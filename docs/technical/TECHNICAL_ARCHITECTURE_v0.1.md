# Technical Architecture v0.1

**Status:** Proposed architecture; component names are not final. No production implementation is included.

## Deployment model

Initial deployment targets BNB Smart Chain. Contracts should use standard EVM interfaces, avoid chain-specific assumptions where practical, pin compiler/tool versions, and document chain ID and final addresses per release. A staged testnet, audit, deployment rehearsal, and multisig verification process must precede mainnet.

## Proposed components

| Component | Responsibility | Recommended posture |
|---|---|---|
| `MindToken` | fixed 20M MIND governance token | immutable, non-upgradeable |
| `FounderNodeStaking` | stake/lock accounting and active-node status | upgradeable only if bounded and timelocked |
| `FounderNodeNFT` | optional node credential/representation | decision pending; transfer-restricted if used |
| `HeavenRewardVault` | custody and funded HEAVEN reward liabilities | conservative, separately paused, timelocked config |
| `DirectReferralRegistry` | immutable direct relationships and qualifications | non-upgradeable registry or tightly bounded upgrade |
| `MindGlobalPool` | periods, points commitments, allocations, claims | upgradeable only with finalized-period immutability |
| `Governor` | proposal and MIND voting lifecycle | audited standard implementation |
| `TimelockController` | delayed execution | audited standard implementation |
| `Treasury` | protocol asset custody and governed disbursement | multisig during launch, then timelocked governance |

## Separation and trust boundaries

Token supply, staking, referral registration, reward custody, pool accounting, governance, and treasury should remain separate. Components communicate through small interfaces. Reward contracts may query active-node status but must not mutate stakes. Registries may record eligibility but must not hold treasury assets. Accounting and custody should be separable so a calculation failure cannot freely move funds.

## Immutability and upgrades

`MindToken` supply rules should be immutable. Governance and timelock should use established audited patterns. Upgradeability for staking, pool, and vault components remains open; if selected, use transparent documented proxies, storage-layout checks, timelocked upgrades, independent multisig approval during launch, and immutable constraints preventing supply changes, finalized-period mutation, or unfunded claims. A migration architecture may be safer than broad proxy authority.

## Authority model

Launch administration uses a threshold multisig with geographically and organizationally diverse signers. Governance queues ordinary actions through a 48-hour timelock. Emergency roles may pause narrowly defined operations but may not transfer user funds, alter MIND supply, change referral parents, or rewrite finalized pool periods. Role acceptance, rotation, revocation, and expiry should be explicit.

## Accounting flows

HEAVEN enters a pre-funded reward vault before a liability is finalized. Direct-referral qualification calculates the rate from the referrer's prior qualified count, reserves the resulting HEAVEN, increments the count, and records a claim. Pool periods receive a defined funded amount; verified contribution points are committed; the period is finalized; and participants claim pro-rata allocations. Aggregate reserved plus claimed liabilities must never exceed accounted funding.

## Off-chain verification and privacy

Community activity and supporting evidence are verified off-chain by an approved, appealable process. On-chain records should contain only pseudonymous addresses, period identifiers, category totals or commitments, and claim proofs. Never place health data, legal identity, contact details, event attendance details, or evidence files on-chain. A Merkle-root approach can make allocations verifiable while minimizing disclosure.

## Events and observability

Emit stable events for deposits, role changes, stake lifecycle, referral registration/qualification/reward reservation, pool creation/funding/point-root publication/finalization/claim, governance actions, pauses, upgrades, and emergency recovery. Indexers are conveniences; contract state remains authoritative.

## Failure and emergency procedures

Use checks-effects-interactions, reentrancy protection, pull claims, safe token transfers, explicit solvency checks, and idempotent finalization. Pause by subsystem. Maintain incident severity definitions, signer escalation, public status updates, forensic preservation, governance review, and post-incident reporting. Recovery must follow predefined authority and cannot bypass protected invariants.

