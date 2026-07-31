import { createPublicClient, http } from "viem";
import { bsc, bscTestnet, mainnet, polygon } from "viem/chains";
import { createConfig } from "wagmi";
import { injected } from "wagmi/connectors/injected";
import { walletConnect } from "wagmi/connectors/walletConnect";

export const activeWalletChain = bscTestnet;

// Prepared for later governance approval. These chains are intentionally not
// included in wagmiConfig, so they remain unsupported in the current demo.
export const futureWalletChains = [bsc, mainnet, polygon] as const;

export const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID?.trim() ?? "";

const appUrl =
  process.env.NEXT_PUBLIC_APP_URL?.trim() ??
  "https://mindheavendao-git-feature-dapp-dashboard-foundation-samlab.vercel.app";

const connectors = [
  injected({
    target() {
      return {
        id: "metaMask",
        name: "MetaMask",
        provider(window) {
          const ethereum = window?.ethereum;
          const providers = ethereum?.providers ?? (ethereum ? [ethereum] : []);
          return providers.find(provider => provider.isMetaMask);
        },
      };
    },
  }),
  ...(walletConnectProjectId
    ? [
        walletConnect({
          projectId: walletConnectProjectId,
          metadata: {
            name: "MindHeavenDAO Foundation DApp",
            description: "Connection-only MindHeavenDAO test environment.",
            url: appUrl,
            icons: [],
          },
          showQrModal: true,
        }),
      ]
    : []),
];

export const wagmiConfig = createConfig({
  chains: [activeWalletChain],
  connectors,
  multiInjectedProviderDiscovery: true,
  ssr: true,
  transports: {
    [activeWalletChain.id]: http(),
  },
});

export const ensPublicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

export function shortAddress(address: string) {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}
