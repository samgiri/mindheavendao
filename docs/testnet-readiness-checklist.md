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
- [x] Restore an already-authorized injected wallet after refresh
- [x] EIP-6963 multi-provider discovery
- [x] Explicit MetaMask and Uniswap Wallet selection/branding when announced by the installed wallet
- [x] WalletConnect decision documented: defer to a separate credentialed connector phase before operational testnet use
- [ ] Real desktop/mobile provider matrix completed

## Routes and data truthfulness

- [x] `/` loads
- [x] `/system` loads
- [x] Eight internal workspace views render
- [x] Prototype, demo, unavailable, and live RPC data are visibly distinguished
- [x] `/dashboard` exists on the audit branch
- [x] Dashboard sub-routes support direct URLs, refresh, and history on the audit branch
- [x] Automated static coverage for all dashboard route slugs and production metadata

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
- [x] Unit/static integration tests (7/7)
- [x] Vinext production build
- [x] Vercel/Next production build
- [x] Browser console and framework-overlay check
- [x] RPC failure path returns safe, non-secret error
- [x] No transaction/signature methods in current chain layer
- [ ] Dependency vulnerabilities fully remediated and re-audited — production tree is clean; 6 development-tool findings remain behind breaking Vinext/Drizzle upgrades
- [x] Automated static wallet/provider, network-switch, refresh-restoration, listener-cleanup, and dialog-accessibility coverage
- [ ] Accessibility audit with a dedicated tool and manual keyboard pass
- [x] Production canonical, sitemap, robots, JSON-LD, and Open Graph base URLs corrected

## Go/no-go

- [x] Keep all value-changing actions disabled
- [x] Do not deploy or modify mainnet contracts
- [x] Do not describe prototype balances or votes as live
- [ ] Meet all contract, connector, security, and route gates above

The system may continue as a read-only prototype and testnet-development workspace. It is not ready for operational token, node, staking, reward, referral, governance, treasury, or mainnet use.
