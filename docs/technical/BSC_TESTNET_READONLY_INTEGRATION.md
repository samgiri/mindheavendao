# BSC Testnet Read-Only Integration

**Status:** implementation draft  
**Network:** BNB Smart Chain Testnet (chain ID 97 / `0x61`)  
**Security posture:** observation only

## Purpose

This layer allows the Founder dApp to verify that its BSC Testnet RPC connection is healthy and display the latest block height. It does not deploy contracts, sign messages, submit transactions, request token approvals, or move assets.

## Server-side configuration

The RPC URL remains server-side:

- `BSC_TESTNET_RPC_URL` — optional HTTPS endpoint. When absent, the implementation uses the public BNB Chain testnet seed endpoint.

The contract registry accepts these optional server-side environment variables:

- `BSC_TESTNET_MIND_TOKEN_ADDRESS`
- `BSC_TESTNET_FOUNDER_NODE_STAKING_ADDRESS`
- `BSC_TESTNET_HEAVEN_REWARD_VAULT_ADDRESS`
- `BSC_TESTNET_DIRECT_REFERRAL_REGISTRY_ADDRESS`
- `BSC_TESTNET_MIND_GLOBAL_POOL_ADDRESS`
- `BSC_TESTNET_GOVERNOR_ADDRESS`
- `BSC_TESTNET_TIMELOCK_CONTROLLER_ADDRESS`
- `BSC_TESTNET_TREASURY_ADDRESS`

Unset addresses remain `null`. Configured values must be valid 20-byte EVM addresses. The current repository intentionally supplies no deployed address.

## Public health endpoint

`GET /api/chain/status` returns only:

- expected network name and chain ID;
- current block height;
- RPC health and request latency;
- configured contract names and registry counts;
- check timestamp.

It never returns the RPC URL or environment-variable values. Responses are not cached. RPC calls time out after seven seconds and must report chain ID 97.

## Deployment gates

Before any contract interaction is enabled:

1. Approve final economic and governance specifications.
2. Complete legal and compliance review.
3. Deploy only reviewed contracts to BSC Testnet.
4. Publish and verify deployment addresses and source code.
5. Complete independent security audit and remediate findings.
6. Run scenario, role, pause, timelock, and treasury tests.
7. Obtain explicit governance approval for each enabled write action.

Mainnet configuration is out of scope.
