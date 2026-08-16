# Testnet Readiness Checklist

**Current recommendation:** **NOT READY**

## Repository and delivery

- [x] Latest `main` audited at `65336c45133c85eba70457d39d26a3bf03f47be6`
- [x] Work isolated on `codex/testnet-system-audit`
- [x] Frontend, API, worker, database scaffold, and deployment configuration inventoried
- [x] Vercel production URL and commit verified
- [x] Environment-variable names inventoried without exposing values
- [ ] Draft PR reviewed and approved

## Network

- [x] BNB Smart Chain Testnet configured
- [x] Chain ID `97` / `0x61`
- [x] `tBNB`, 18 decimals
- [x] Testnet BscScan explorer
- [x] HTTPS testnet RPC and live chain-ID validation
- [x] No mainnet RPC or contract address mixed into runtime configuration

## Wallet experience

- [x] Generic injected-wallet request
- [x] Clear no-wallet error
- [x] Connection cancellation message
- [x] Automatic target-network request after connection
- [x] Add-chain fallback for error 4902
- [x] Wrong-network label and Switch Network action
- [x] Short address, active network, Copy, Explorer, and Disconnect controls
- [x] Account/chain event listeners with cleanup
- [x] Disconnect clears local interface session
- [x] Desktop and mobile panel geometry verified
- [x] Keyboard focus styling and Escape close
- [ ] Restore an already-authorized injected wallet after refresh
- [ ] EIP-6963 multi-provider discovery
- [ ] Explicit MetaMask and Uniswap Wallet selection/branding
- [ ] WalletConnect or documented decision not to support it
- [ ] Real desktop/mobile provider matrix completed

## Routes and data truthfulness

- [x] `/` loads
- [x] `/system` loads
- [x] Eight internal workspace views render
- [x] Prototype, demo, unavailable, and live RPC data are visibly distinguished
- [ ] `/dashboard` exists
- [ ] Dashboard sub-routes support direct URLs, refresh, and history
- [ ] Automated route coverage beyond the static baseline

## Contracts

- [ ] MIND address, bytecode, ABI, and verified source
- [ ] HEAVEN address, bytecode, ABI, and verified source
- [ ] Founder Node staking address, bytecode, ABI, and verified source
- [ ] Reward vault address, bytecode, ABI, and verified source
- [ ] Referral registry address, bytecode, ABI, and verified source
- [ ] MindGlobal Pool address, bytecode, ABI, and verified source
- [ ] Governor address, bytecode, ABI, and verified source
- [ ] Timelock address, bytecode, ABI, and verified source
- [ ] Treasury address, bytecode, ABI, and verified source
- [ ] Safe read-call suite
- [ ] Independent security audit and remediation

## Quality and security

- [x] Locked dependency install
- [x] Lint
- [x] Type checking
- [x] Unit/static integration tests (4/4)
- [x] Vinext production build
- [x] Vercel/Next production build
- [x] Browser console and framework-overlay check
- [x] RPC failure path returns safe, non-secret error
- [x] No transaction/signature methods in current chain layer
- [ ] Dependency vulnerabilities remediated and re-audited
- [ ] Automated wallet/provider tests
- [ ] Accessibility audit with a dedicated tool and manual keyboard pass
- [ ] Production canonical/Open Graph URLs corrected

## Go/no-go

- [x] Keep all value-changing actions disabled
- [x] Do not deploy or modify mainnet contracts
- [x] Do not describe prototype balances or votes as live
- [ ] Meet all contract, connector, security, and route gates above

The system may continue as a read-only prototype and testnet-development workspace. It is not ready for operational token, node, staking, reward, referral, governance, treasury, or mainnet use.
