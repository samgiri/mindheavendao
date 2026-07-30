import { BSC_TESTNET, getRpcUrl } from "./config";

type JsonRpcResult = {
  jsonrpc: "2.0";
  id: number;
  result?: string;
  error?: { code: number; message: string };
};

async function rpc(method: "eth_chainId" | "eth_blockNumber", signal: AbortSignal) {
  const response = await fetch(getRpcUrl(), {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: method === "eth_chainId" ? 1 : 2, method, params: [] }),
    cache: "no-store",
    signal,
  });

  if (!response.ok) {
    throw new Error(`RPC returned HTTP ${response.status}`);
  }

  const payload = (await response.json()) as JsonRpcResult;
  if (payload.error || typeof payload.result !== "string") {
    throw new Error(payload.error?.message ?? "RPC returned an invalid response");
  }

  return payload.result;
}

export async function readChainStatus() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 7_000);
  const startedAt = performance.now();

  try {
    const [chainIdHex, blockNumberHex] = await Promise.all([
      rpc("eth_chainId", controller.signal),
      rpc("eth_blockNumber", controller.signal),
    ]);
    const chainId = Number.parseInt(chainIdHex, 16);
    const blockNumber = Number.parseInt(blockNumberHex, 16);

    if (chainId !== BSC_TESTNET.chainId) {
      throw new Error(`RPC chain mismatch: expected ${BSC_TESTNET.chainId}, received ${chainId}`);
    }
    if (!Number.isSafeInteger(blockNumber) || blockNumber < 0) {
      throw new Error("RPC returned an invalid block number");
    }

    return {
      chainId,
      chainIdHex,
      blockNumber,
      latencyMs: Math.round(performance.now() - startedAt),
    };
  } finally {
    clearTimeout(timeout);
  }
}
