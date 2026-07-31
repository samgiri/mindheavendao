"use client";

import { useState } from "react";
import { useDisconnect, useSwitchChain } from "wagmi";
import { activeWalletChain, shortAddress } from "../../lib/wallet/config";
import { useWalletEnvironment, useWalletIdentity, WalletControl, walletErrorMessage } from "./WalletControl";
import styles from "./dashboard.module.css";

const demoBalances = [
  { symbol: "MIND", amount: "18,420.00", purpose: "Governance participation" },
  { symbol: "HEAVEN", amount: "6,260.40", purpose: "Foundation programs" },
  { symbol: "tBNB", amount: "0.2500", purpose: "Test network gas · Demo" },
];

export function WalletPage() {
  const identity = useWalletIdentity();
  const environment = useWalletEnvironment();
  const { mutate: disconnect, isPending: disconnecting } = useDisconnect();
  const { mutate: switchChain, isPending: switching, error: switchError } = useSwitchChain();
  const [copyState, setCopyState] = useState("Copy");

  async function copyAddress() {
    if (!identity.address) return;
    try {
      await navigator.clipboard.writeText(identity.address);
      setCopyState("Copied");
    } catch {
      setCopyState("Unavailable");
    }
  }

  return (
    <div className={styles.walletPageGrid}>
      <section className={styles.walletStatusCard}>
        <div className={styles.panelHead}>
          <div><span>Wallet session</span><h2>Connection status</h2></div>
          <div className={`${styles.sessionBadge} ${identity.isConnected ? styles.sessionConnected : ""}`}><i /> {identity.isConnected ? "Connected" : "Not connected"}</div>
        </div>
        {identity.isConnected && identity.address ? (
          <>
            <div className={styles.walletIdentityCard}>
              <div className={styles.walletIdentityMark}>{identity.ensName ? "ENS" : "0×"}</div>
              <div>
                <small>{identity.ensLoading ? "Resolving ENS…" : identity.ensName ? "ENS identity" : "Wallet address"}</small>
                <strong>{identity.ensName ?? shortAddress(identity.address)}</strong>
                <span>{identity.address}</span>
              </div>
              <button type="button" onClick={copyAddress} aria-label="Copy connected wallet address">{copyState}</button>
            </div>
            <p className={styles.walletSafety}>Wallet connected. Dashboard records remain demonstration data until contract and backend integration.</p>
          </>
        ) : (
          <div className={styles.walletEmpty}>
            <i>◫</i><div><strong>No wallet connected</strong><span>Connect a supported wallet to establish a read-only session.</span></div><WalletControl />
          </div>
        )}
        <div className={styles.walletInfoGrid}>
          <div><span>Current chain</span><strong>{identity.isConnected ? identity.chain?.name ?? `Chain ${identity.chainId}` : "—"}</strong><small>Detected from wallet</small></div>
          <div><span>Required network</span><strong>{activeWalletChain.name}</strong><small>Chain ID {activeWalletChain.id}</small></div>
          <div><span>Connector</span><strong>{identity.connector?.name ?? "—"}</strong><small>Session provider</small></div>
          <div><span>Session</span><strong>{identity.isConnected ? "Auto-reconnect enabled" : "Inactive"}</strong><small>Stored locally by wagmi</small></div>
        </div>
        {identity.isConnected && identity.address ? (
          <a
            className={styles.walletExplorerLink}
            href={`${activeWalletChain.blockExplorers.default.url}/address/${identity.address}`}
            target="_blank"
            rel="noreferrer"
          >
            View public address on BscScan
          </a>
        ) : null}
        {identity.isWrongNetwork ? (
          <div className={styles.wrongNetworkPanel} role="alert">
            <div><strong>Wrong Network</strong><span>Switch to BNB Smart Chain Testnet to continue in this demo.</span></div>
            <button type="button" onClick={() => switchChain({ chainId: activeWalletChain.id })} disabled={switching}>{switching ? "Switching…" : "Switch Network"}</button>
          </div>
        ) : null}
        {switchError ? <div className={styles.walletInlineError} role="alert">{walletErrorMessage(switchError)}</div> : null}
      </section>

      <section className={styles.supportedWalletsCard}>
        <div className={styles.panelHead}><div><span>Connection methods</span><h2>Supported wallets</h2></div></div>
        <div className={styles.supportedWalletList}>
          <WalletAvailability name="MetaMask" detail="Browser extension and mobile" state={environment.metaMaskInstalled ? "Detected" : "Supported"} />
          <WalletAvailability name="WalletConnect" detail="QR connection for compatible wallets" state={environment.walletConnectConfigured ? "Available" : "Configuration required"} />
          <WalletAvailability name="Trust Wallet" detail="Injected or WalletConnect compatible" state={environment.trustInstalled ? "Detected" : environment.walletConnectConfigured ? "Available" : "Configuration required"} />
        </div>
      </section>

      <section className={styles.demoBalancesCard}>
        <div className={styles.panelHead}><div><span>Dashboard demonstration data — not read from this wallet.</span><h2>Demo balances</h2></div><b>No live prices</b></div>
        <div className={styles.demoBalanceList}>
          {demoBalances.map(balance => <div key={balance.symbol}><i>{balance.symbol[0]}</i><span><strong>{balance.symbol}</strong><small>{balance.purpose}</small></span><b>{balance.amount}</b></div>)}
        </div>
      </section>

      <section className={styles.walletSecurityCard}>
        <div><span>Security notice</span><h2>Connection only</h2></div>
        <ul>
          <li>MindHeavenDAO will never request your seed phrase or private key</li>
          <li>No signatures or token approvals</li>
          <li>No transfers, staking, or transactions</li>
          <li>Disconnect access inside your wallet at any time</li>
        </ul>
        <button type="button" onClick={() => disconnect()} disabled={!identity.isConnected || disconnecting}>{disconnecting ? "Disconnecting…" : "Disconnect Wallet"}</button>
      </section>
    </div>
  );
}

function WalletAvailability({ name, detail, state }: { name: string; detail: string; state: string }) {
  return <div><i>{name[0]}</i><span><strong>{name}</strong><small>{detail}</small></span><b>{state}</b></div>;
}
