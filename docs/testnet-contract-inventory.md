# Testnet Contract Inventory

**Network:** BNB Smart Chain Testnet (`97` / `0x61`)

**Explorer:** https://testnet.bscscan.com

**Audit baseline:** `65336c45133c85eba70457d39d26a3bf03f47be6`

No contract address or ABI is configured. The production health endpoint reported 0 of 8 registry entries configured. Consequently, deployed bytecode, source verification, ABI compatibility, ownership, roles, pause controls, and read calls cannot be verified.

| Frontend registry name | Environment variable | Address | Bytecode | ABI/read calls | Status |
|---|---|---|---|---|---|
| MIND token | `BSC_TESTNET_MIND_TOKEN_ADDRESS` | Missing | Not testable | No ABI | Not built/deployed |
| Founder Node staking | `BSC_TESTNET_FOUNDER_NODE_STAKING_ADDRESS` | Missing | Not testable | No ABI | Specification only |
| HEAVEN reward vault | `BSC_TESTNET_HEAVEN_REWARD_VAULT_ADDRESS` | Missing | Not testable | No ABI | Specification only |
| Direct referral registry | `BSC_TESTNET_DIRECT_REFERRAL_REGISTRY_ADDRESS` | Missing | Not testable | No ABI | Specification only |
| MindGlobal Pool | `BSC_TESTNET_MIND_GLOBAL_POOL_ADDRESS` | Missing | Not testable | No ABI | Specification only |
| Governor | `BSC_TESTNET_GOVERNOR_ADDRESS` | Missing | Not testable | No ABI | Off-chain UI simulation only |
| Timelock controller | `BSC_TESTNET_TIMELOCK_CONTROLLER_ADDRESS` | Missing | Not testable | No ABI | Specification only |
| Treasury | `BSC_TESTNET_TREASURY_ADDRESS` | Missing | Not testable | No ABI | No live treasury |

## Feature implementation state

| Feature | Current state |
|---|---|
| MIND | Documentation/specification only; no token contract or balance integration. |
| HEAVEN | Documentation/specification only; no token address or vault. |
| Founder Nodes | Static tiers and disabled journey; no positions or staking. |
| Staking | Not implemented. |
| Rewards/claims | Static unavailable state; not implemented. |
| Referrals | Documentation/specification only. |
| Governance | Local prototype proposals/votes; not on-chain. |
| Treasury | Static policy categories; no wallet or assets. |

## Activation gate

Before any registry entry is accepted, record the chain ID, address, deployment transaction, deployed bytecode hash, verified source URL, ABI artifact, compiler settings, constructor arguments, proxy/implementation relationship, privileged roles, and safe read-call results. No write action should be enabled until independent audit, legal/economic review, and explicit governance approval are complete.
