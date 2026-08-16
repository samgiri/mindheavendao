# MindHeavenDAO Testnet System Audit

**Audit date:** 2026-08-16

**Repository:** `samgiri/mindheavendao`

**Base branch:** `main`

**Commit tested:** `65336c45133c85eba70457d39d26a3bf03f47be6`

**Audit branch:** `codex/testnet-system-audit`

**Production URL tested:** https://mindheavendao.vercel.app

**Recommendation:** **NOT READY**

## Executive result

The public website and the `/system` prototype load successfully. The only live blockchain integration is a server-side, read-only BNB Smart Chain Testnet health check. It returned chain ID 97, a current block, and zero configured contracts during the audit. No executable contracts, ABIs, token operations, node purchases, staking, rewards, referrals, or on-chain governance exist in this repository.

The interface is suitable as a clearly labelled prototype, but it is not a complete testnet DApp. It cannot be classified as TESTNET READY while all eight contract addresses are absent, dedicated wallet connectors are absent, required URL routes are missing, and real-wallet scenarios cannot be exercised without a supported injected wallet.

## Repository and deployment

| Area | Finding |
|---|---|
| Frontend | Next.js 16 App Router with React 19. Homepage at `/`; founder prototype at `/system`. |
| Backend/API | `GET /api/chain/status`, which performs `eth_chainId` and `eth_blockNumber` only. |
| Cloudflare/Vinext | `worker/index.ts`, Vite/Vinext, and optional D1/Image bindings. D1 and R2 are currently null in `.openai/hosting.json`. |
| Smart contracts | No Solidity, Foundry, Hardhat, ABI, deployment manifest, or executable contract integration. |
| Vercel | Project `mindheavendao`, Next.js, Node 24.x. Production deployment `dpl_AAXQtosiGJZaVK3ZexbK6ytRS31A` is READY and points to the tested commit. |
| Preview configuration | Git branches receive Vercel previews. The newest preview seen during the audit was for `feature/wallet-integration`, not `main`, and was not used as the audited production baseline. |

### Environment and binding inventory

No environment variable is mandatory for the current public read-only experience. `BSC_TESTNET_RPC_URL` is optional and falls back to the public BNB Chain testnet seed endpoint. The following optional server-side address variables form the contract registry:

- `BSC_TESTNET_MIND_TOKEN_ADDRESS`
- `BSC_TESTNET_FOUNDER_NODE_STAKING_ADDRESS`
- `BSC_TESTNET_HEAVEN_REWARD_VAULT_ADDRESS`
- `BSC_TESTNET_DIRECT_REFERRAL_REGISTRY_ADDRESS`
- `BSC_TESTNET_MIND_GLOBAL_POOL_ADDRESS`
- `BSC_TESTNET_GOVERNOR_ADDRESS`
- `BSC_TESTNET_TIMELOCK_CONTROLLER_ADDRESS`
- `BSC_TESTNET_TREASURY_ADDRESS`

Cloudflare builds additionally expect platform bindings `ASSETS`, `IMAGES`, and `DB`; current hosting configuration does not provision D1 or R2. No secret values were printed or copied into this report.

## Network verification

| Setting | Repository value | Result |
|---|---|---|
| Network | BNB Smart Chain Testnet | Correct |
| Chain ID | `97` | Correct |
| Hex chain ID | `0x61` | Correct |
| Native currency | `tBNB`, 18 decimals | Correct |
| Explorer | `https://testnet.bscscan.com` | Correct |
| Default RPC | `https://data-seed-prebsc-1-s1.bnbchain.org:8545` | HTTPS testnet endpoint |
| Mainnet contamination | Only `0x38` appears as a display label for wrong-network feedback | No mainnet RPC or contract address found |

The deployed health endpoint returned HTTP 200, `status: online`, chain ID 97, a live block, and `configuredCount: 0` of 8. The endpoint does not disclose its effective RPC URL, so the audit confirms the live RPC's chain identity but not whether Vercel overrides the repository's default endpoint.

The supplied public wallet `0x3566F204C1c96c6718Df4f1EfA26e8fEBdCfB895` was queried read-only and held `0.1 tBNB` at the audit time. No signature, private key, seed phrase, approval, or transaction was requested.

## Wallet journey

| Scenario | Status | Evidence / limitation |
|---|---|---|
| Generic injected browser wallet | Implemented | Uses `window.ethereum` and `eth_requestAccounts`. |
| Automatic testnet request | Fixed | A successful connection now immediately requests chain `0x61` when needed. |
| Add missing network | Implemented | Handles provider error 4902 with BSC Testnet parameters. |
| Wrong network | Implemented | Displays the active chain and a Switch Network action. |
| Reject/cancel connection | Implemented message | Error is caught and no transaction is attempted. Not exercised with a real extension in the audit browser. |
| Unsupported/no wallet | Fixed | Now shows a clear error and does not silently enter demo mode. |
| Refresh while connected | Partial | Demo state restores; injected-wallet authorization is not restored or queried on load. |
| Disconnect/logout | Fixed | Clears demo identity and local prototype votes, then returns to logged-out UI. Wallet permissions remain managed by the wallet. |
| Account/chain changes | Implemented | Listeners update state and are removed during cleanup. |
| MetaMask | Generic only | May work through `window.ethereum`; no explicit connector or brand option. |
| Uniswap Wallet | Not specifically supported | No EIP-6963 provider discovery or Uniswap connector. |
| WalletConnect | Not built | No dependency, project ID, or connector configuration. |
| Another account | Provider-dependent | `accountsChanged` is handled; no in-app account chooser. |

The browser audit environment had no injected wallet, so successful real-wallet connection, rejection, account switching, and provider-native network prompts could not be proven end to end. Demo identity was used only to verify local session UI. This is a remaining test blocker, not a pass.

## Route and data audit

| Surface | Route | Classification |
|---|---|---|
| Homepage | `/` | Static project/marketing content; loads successfully. |
| Founder system | `/system` | Mixed: live RPC block plus explicitly labelled static/prototype data. |
| Dashboard | Internal `/system` view | Live RPC block; readiness, proposal counts, and contribution points are static/prototype. |
| Identity | Internal `/system` view | Real injected address/chain when available; otherwise explicit local demo. |
| Founder Nodes | Internal `/system` view | Static specification placeholder; contracts not deployed. |
| Governance | Internal `/system` view | Mock/off-chain local simulation; no legal or on-chain effect. |
| Contributions | Internal `/system` view | Mock local prototype data. |
| Rewards | Internal `/system` view | Static unavailable state; no live vault, balance, APY, or claim. |
| Treasury | Internal `/system` view | Static policy/readiness content; no live treasury. |
| Documents | Internal `/system` view | Static links to repository records. |
| Dashboard URL | `/dashboard` | Broken/unimplemented: HTTP 404. |
| Dashboard sub-route URL | `/system/dashboard` | Broken/unimplemented: HTTP 404. |

All eight internal views rendered successfully through client-side navigation, but they do not have independent URLs, browser history, deep linking, or refreshable route state.

## Security findings

- No committed private key, seed phrase, credential-bearing RPC URL, or obvious admin/API secret was found in tracked application files.
- Wallet listeners have matching cleanup and no duplicate-listener path was found.
- No transaction method exists. `eth_sendTransaction`, signing, approvals, claims, staking, purchases, and transfers are absent.
- Address environment variables are format-validated but not checksummed, bytecode-verified, or ABI-verified. Because all addresses are absent, contract verification cannot start.
- The API suppresses RPC error detail and returns a safe 503 message. It validates the RPC chain before reporting success and uses a seven-second timeout.
- Dependency installation reported 21 vulnerabilities: 1 low, 4 moderate, and 16 high across the full dependency tree. Production-only audit reported 4 high findings involving `next`, `postcss`, `sharp`, and `nanoid`. No automatic major upgrade was applied.
- The homepage canonical/Open Graph URLs still point to `mind-heaven-dao-sample.blockchain444.chatgpt.site`, not the tested Vercel production domain. This is outside the wallet-focused safe-fix set and remains a deployment metadata issue.
- The injected-wallet integration relies on a single `window.ethereum` provider. Multiple-provider selection and EIP-6963 discovery are absent.

## Safe fixes made

- Positioned the wallet panel on the right and below the top navigation on desktop.
- Added viewport-bounded mobile layout and scrolling.
- Added Copy Address, View on Explorer, conditional Switch Network, and Disconnect actions.
- Added automatic BSC Testnet switching after wallet connection.
- Prevented unsupported-wallet attempts from silently activating demo identity.
- Cleared all local DApp session state on disconnect.
- Added Escape-to-close, initial dialog focus, accessible labels, and retained visible focus styling.
- Made dev/build/start scripts cross-platform with `cross-env`.

No contract, tokenomic, payment, staking, claim, referral, node-purchase, logo, typography, or approved homepage design change was made.

## Verification results

| Check | Result |
|---|---|
| Install from `package-lock.json` | PASS — 505 packages after the approved script helper addition |
| ESLint | PASS |
| TypeScript `--noEmit` | PASS |
| Repository tests | PASS — 4/4 |
| Vinext production build | PASS |
| Vercel/Next production build | PASS |
| Dependency audit | FAIL — vulnerabilities remain as described above |
| Live `/` and `/system` | PASS — meaningful content, no framework overlay, no console warnings/errors observed |
| Live `/api/chain/status` | PASS — HTTP 200 and chain 97 |
| All internal workspace views | PASS for rendering; FAIL for independent route URLs |
| Desktop wallet placement | PASS — panel bounds 937–1397 × 96–573 in 1440×900 |
| Mobile wallet placement | PASS — connected panel bounds 12–378 × 282–832 in 390×844 |
| Real wallet connection matrix | BLOCKED — no injected wallet in controlled browser and no WalletConnect connector |

Screenshots were captured as task artifacts for the desktop and mobile-responsive checks. Equivalent browser evidence above records exact DOM geometry, visible controls, console results, and response status.

## Remaining blockers and recommendation

1. Deploy, publish, and independently audit the intended testnet contracts; provide verified addresses and ABIs.
2. Decide and implement supported wallet connectors, including EIP-6963 and WalletConnect if required.
3. Run the full real-wallet matrix with MetaMask and Uniswap Wallet on desktop and mobile devices.
4. Add independent URL routes or explicitly revise the route requirement.
5. Remediate and retest dependency vulnerabilities using reviewed upgrades.
6. Correct production canonical/social metadata.
7. Add automated wallet-provider, network-switch, session-refresh, and accessibility tests.

**Recommendation: NOT READY.** Continue only with bounded testnet development. Do not enable value-changing features or begin mainnet work.
