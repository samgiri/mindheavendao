import { BSC_TESTNET, getRegistryReadiness } from "@/lib/chain/config";
import { readChainStatus } from "@/lib/chain/rpc";

export const dynamic = "force-dynamic";

const responseHeaders = {
  "Cache-Control": "no-store, max-age=0",
};

export async function GET() {
  const checkedAt = new Date().toISOString();

  try {
    const [chain, contracts] = await Promise.all([
      readChainStatus(),
      Promise.resolve(getRegistryReadiness()),
    ]);

    return Response.json(
      {
        status: "online",
        network: {
          name: BSC_TESTNET.name,
          chainId: chain.chainId,
          chainIdHex: chain.chainIdHex,
          explorerUrl: BSC_TESTNET.explorerUrl,
        },
        block: { number: chain.blockNumber },
        rpc: { healthy: true, latencyMs: chain.latencyMs },
        contracts: {
          configured: contracts.configured,
          configuredCount: contracts.configuredCount,
          totalCount: contracts.totalCount,
          mode: "registry-only",
        },
        checkedAt,
      },
      { headers: responseHeaders },
    );
  } catch {
    return Response.json(
      {
        status: "offline",
        network: {
          name: BSC_TESTNET.name,
          chainId: BSC_TESTNET.chainId,
          chainIdHex: BSC_TESTNET.chainIdHex,
          explorerUrl: BSC_TESTNET.explorerUrl,
        },
        block: null,
        rpc: { healthy: false, latencyMs: null },
        contracts: {
          configured: [],
          configuredCount: 0,
          totalCount: Object.keys(getRegistryReadiness().configured).length,
          mode: "registry-only",
        },
        checkedAt,
        message: "The read-only testnet check is temporarily unavailable.",
      },
      { status: 503, headers: responseHeaders },
    );
  }
}
