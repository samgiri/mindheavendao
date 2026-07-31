"use client";

import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { Connector } from "wagmi";
import {
  useConnect,
  useConnection,
  useConnectors,
  useDisconnect,
  useSwitchChain,
} from "wagmi";
import {
  activeWalletChain,
  ensPublicClient,
  shortAddress,
  walletConnectProjectId,
} from "../../lib/wallet/config";
import styles from "./dashboard.module.css";

type EthereumProviderFlags = {
  isMetaMask?: boolean;
  isTrust?: boolean;
  isTrustWallet?: boolean;
  providers?: EthereumProviderFlags[];
};

export type WalletEnvironment = {
  metaMaskInstalled: boolean;
  trustInstalled: boolean;
  walletConnectConfigured: boolean;
};

export function detectWalletEnvironment(): WalletEnvironment {
  if (typeof window === "undefined") {
    return {
      metaMaskInstalled: false,
      trustInstalled: false,
      walletConnectConfigured: Boolean(walletConnectProjectId),
    };
  }

  const ethereum = (window as Window & { ethereum?: EthereumProviderFlags }).ethereum;
  const providers = ethereum?.providers?.length ? ethereum.providers : ethereum ? [ethereum] : [];

  return {
    metaMaskInstalled: providers.some(provider => Boolean(provider.isMetaMask)),
    trustInstalled: providers.some(provider => Boolean(provider.isTrust || provider.isTrustWallet)),
    walletConnectConfigured: Boolean(walletConnectProjectId),
  };
}

function walletEnvironmentSnapshot() {
  const environment = detectWalletEnvironment();
  return `${Number(environment.metaMaskInstalled)}${Number(environment.trustInstalled)}${Number(environment.walletConnectConfigured)}`;
}

export function useWalletEnvironment(): WalletEnvironment {
  const snapshot = useSyncExternalStore(
    onStoreChange => {
      window.addEventListener("eip6963:announceProvider", onStoreChange);
      window.dispatchEvent(new Event("eip6963:requestProvider"));
      return () => window.removeEventListener("eip6963:announceProvider", onStoreChange);
    },
    walletEnvironmentSnapshot,
    () => `00${Number(Boolean(walletConnectProjectId))}`,
  );

  return {
    metaMaskInstalled: snapshot[0] === "1",
    trustInstalled: snapshot[1] === "1",
    walletConnectConfigured: snapshot[2] === "1",
  };
}

export function walletErrorMessage(error: Error | null) {
  if (!error) return "";
  const message = error.message.toLowerCase();
  const code = (error as Error & { code?: number }).code;

  if (code === 4001 || message.includes("user rejected") || message.includes("user denied")) {
    return "User rejected request. No wallet permission was granted.";
  }
  if (message.includes("connector not found") || message.includes("provider not found")) {
    return "Wallet unavailable. Install a supported wallet or use WalletConnect.";
  }
  if (message.includes("unsupported") || message.includes("not supported")) {
    return "Unsupported wallet or network.";
  }
  return "Connection failed. No signature or transaction was requested.";
}

export function useWalletIdentity() {
  const connection = useConnection();
  const address = connection.address;
  const ens = useQuery({
    queryKey: ["ens-name", address],
    queryFn: () => ensPublicClient.getEnsName({ address: address! }),
    enabled: Boolean(address),
  });

  return {
    ...connection,
    displayName: ens.data ?? (address ? shortAddress(address) : ""),
    ensName: ens.data ?? null,
    ensLoading: ens.isPending && Boolean(address),
    isWrongNetwork: connection.isConnected && connection.chainId !== activeWalletChain.id,
  };
}

export function WalletControl() {
  const [open, setOpen] = useState(false);
  const identity = useWalletIdentity();
  const closeDialog = useCallback(() => setOpen(false), []);

  return (
    <>
      <button
        type="button"
        className={`${styles.walletButton} ${identity.isConnected ? styles.walletButtonConnected : ""}`}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span>{identity.isConnected ? identity.displayName : "Connect wallet"}</span>
        <i>{identity.isConnected ? "●" : "↗"}</i>
      </button>
      {open ? <WalletDialog onClose={closeDialog} /> : null}
    </>
  );
}

function WalletDialog({ onClose }: { onClose: () => void }) {
  const connectors = useConnectors();
  const { mutate: connect, error, isPending, reset } = useConnect();
  const { mutate: disconnect } = useDisconnect();
  const { mutate: switchChain, isPending: isSwitching, error: switchError } = useSwitchChain();
  const identity = useWalletIdentity();
  const [copyState, setCopyState] = useState("Copy address");
  const [selectedConnector, setSelectedConnector] = useState<Connector | null>(null);
  const environment = useWalletEnvironment();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  function connectWallet(connector: Connector) {
    setSelectedConnector(connector);
    reset();
    connect(
      { connector },
      { onSuccess: () => undefined },
    );
  }

  async function copyAddress() {
    if (!identity.address) return;
    try {
      await navigator.clipboard.writeText(identity.address);
      setCopyState("Copied");
    } catch {
      setCopyState("Copy unavailable");
    }
  }

  return (
    <div className={styles.walletOverlay} role="presentation" onMouseDown={event => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section className={styles.walletDialog} role="dialog" aria-modal="true" aria-labelledby="wallet-dialog-title">
        <div className={styles.walletDialogHead}>
          <div>
            <span>Connection only · Test environment</span>
            <h2 id="wallet-dialog-title">{identity.isConnected ? "Wallet Connected" : "Connect Wallet"}</h2>
          </div>
          <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close wallet dialog">×</button>
        </div>

        {identity.isConnected && identity.address ? (
          <div className={styles.connectedWallet}>
            <div className={styles.connectionStatus}><i /> Connected</div>
            <strong>{identity.ensName ?? shortAddress(identity.address)}</strong>
            {identity.ensName ? <small>{identity.address}</small> : <small>ENS name not available</small>}
            <div className={`${styles.walletNetwork} ${identity.isWrongNetwork ? styles.wrongNetwork : ""}`}>
              <span>{identity.isWrongNetwork ? "Wrong Network" : identity.chain?.name ?? `Chain ${identity.chainId}`}</span>
              <b>{identity.connector?.name ?? "Wallet"}</b>
            </div>
            {identity.isWrongNetwork ? (
              <button
                type="button"
                className={styles.primaryWalletAction}
                onClick={() => switchChain({ chainId: activeWalletChain.id })}
                disabled={isSwitching}
              >
                {isSwitching ? "Switching…" : "Switch Network"}
              </button>
            ) : null}
            {switchError ? <WalletFeedback message={walletErrorMessage(switchError)} retry={() => switchChain({ chainId: activeWalletChain.id })} /> : null}
            <div className={styles.walletDialogActions}>
              <button type="button" onClick={copyAddress}>{copyState}</button>
              <button type="button" onClick={() => disconnect(undefined, { onSuccess: onClose })}>Disconnect</button>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.walletOptions} aria-busy={isPending}>
              {connectors.map(connector => (
                <button
                  key={connector.uid}
                  type="button"
                  onClick={() => connectWallet(connector)}
                  disabled={isPending}
                >
                  <i>{connector.name.toLowerCase().includes("walletconnect") ? "W" : "M"}</i>
                  <span>
                    <strong>{connector.name}</strong>
                    <small>{isPending ? "Connecting…" : connector.name.toLowerCase().includes("walletconnect") ? "QR code · Trust Wallet compatible" : environment.metaMaskInstalled ? "Browser wallet detected" : "Extension or mobile connection"}</small>
                  </span>
                  <b>{isPending ? "…" : "→"}</b>
                </button>
              ))}
              {!environment.walletConnectConfigured ? (
                <div className={styles.walletUnavailable}>
                  <i>W</i><span><strong>WalletConnect & Trust Wallet</strong><small>Unavailable until a WalletConnect project ID is configured</small></span>
                </div>
              ) : null}
            </div>
            {error ? <WalletFeedback message={walletErrorMessage(error)} retry={() => selectedConnector ? connectWallet(selectedConnector) : reset()} /> : null}
          </>
        )}

        <p className={styles.walletSafety}>Never share a private key or seed phrase. This demo requests connection only—no signatures, approvals, transfers, staking, or transactions.</p>
      </section>
    </div>
  );
}

function WalletFeedback({ message, retry }: { message: string; retry: () => void }) {
  return (
    <div className={styles.walletFeedback} role="alert">
      <span>{message}</span>
      <button type="button" onClick={retry}>Retry</button>
    </div>
  );
}
