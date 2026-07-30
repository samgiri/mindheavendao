const ADDRESS_PATTERN = /^0x[a-fA-F0-9]{40}$/;

export const BSC_TESTNET = {
  name: "BNB Smart Chain Testnet",
  chainId: 97,
  chainIdHex: "0x61",
  currency: "tBNB",
  explorerUrl: "https://testnet.bscscan.com",
} as const;

export const CONTRACT_ENV_KEYS = {
  mindToken: "BSC_TESTNET_MIND_TOKEN_ADDRESS",
  founderNodeStaking: "BSC_TESTNET_FOUNDER_NODE_STAKING_ADDRESS",
  heavenRewardVault: "BSC_TESTNET_HEAVEN_REWARD_VAULT_ADDRESS",
  directReferralRegistry: "BSC_TESTNET_DIRECT_REFERRAL_REGISTRY_ADDRESS",
  mindGlobalPool: "BSC_TESTNET_MIND_GLOBAL_POOL_ADDRESS",
  governor: "BSC_TESTNET_GOVERNOR_ADDRESS",
  timelockController: "BSC_TESTNET_TIMELOCK_CONTROLLER_ADDRESS",
  treasury: "BSC_TESTNET_TREASURY_ADDRESS",
} as const;

export type ContractName = keyof typeof CONTRACT_ENV_KEYS;

function optionalAddress(envKey: string) {
  const value = process.env[envKey]?.trim();
  if (!value) return null;
  if (!ADDRESS_PATTERN.test(value)) {
    throw new Error(`Invalid EVM address configured in ${envKey}`);
  }
  return value;
}

export function getContractRegistry() {
  return Object.fromEntries(
    Object.entries(CONTRACT_ENV_KEYS).map(([name, envKey]) => [name, optionalAddress(envKey)]),
  ) as Record<ContractName, string | null>;
}

export function getRpcUrl() {
  const configuredUrl = process.env.BSC_TESTNET_RPC_URL?.trim();
  if (!configuredUrl) {
    return "https://data-seed-prebsc-1-s1.bnbchain.org:8545";
  }

  const parsed = new URL(configuredUrl);
  if (parsed.protocol !== "https:") {
    throw new Error("BSC_TESTNET_RPC_URL must use HTTPS");
  }
  return parsed.toString();
}

export function getRegistryReadiness() {
  const registry = getContractRegistry();
  const configured = Object.entries(registry)
    .filter(([, address]) => Boolean(address))
    .map(([name]) => name as ContractName);

  return {
    configured,
    configuredCount: configured.length,
    totalCount: Object.keys(registry).length,
  };
}
