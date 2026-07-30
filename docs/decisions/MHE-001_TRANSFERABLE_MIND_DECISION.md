# Transferable MIND Decision

**Document ID:** MHE-001  
**Version:** 1.0  
**Status:** Approved  
**Classification:** Economic and token policy decision  
**Maintainer:** MindHeavenDAO Foundation  
**Approval authority:** Founder (pre-governance phase)  
**Approval date:** 2026-07-30  
**Last updated:** 2026-07-30  
**Related decision:** OD-15 — MIND token transferability  
**Supersedes:** Non-transferable MIND recommendation in `MIND_PROTOCOL_DUAL_TOKEN_ARCHITECTURE_STEP_2_v0.1.md`

## Question decided

Should MIND launch as a transferable governance token or as a non-transferable founder credential?

## Options considered

1. Standard transferable governance token.
2. Non-transferable, founder-only governance credential.
3. Phased or restricted transferability.

## Decision

**Option 1 is approved: MIND will be a transferable governance token.**

MIND remains the governance token of MindHeavenDAO and the asset used for approved Founder Node commitments. Transferability does not create equity, debt, guaranteed return, redemption rights, treasury ownership, or entitlement to HEAVEN rewards.

## Approved immutable boundaries

- Maximum and genesis supply: **20,000,000 MIND**.
- No future mint function or inflation mechanism.
- No transfer tax, hidden fee, blacklist, confiscation, or arbitrary balance-adjustment function.
- MIND rewards are prohibited; any approved rewards use separately funded HEAVEN.
- Token transfers must remain distinguishable from Founder Node status, identity verification, referral qualification, and reward eligibility.
- MIND and HEAVEN cannot be automatically converted, redeemed, or minted against one another.

## Contract direction

The contract-ready design should use audited standard ERC-20 and vote-checkpoint behavior:

- transferable balances and standard allowances;
- historical balance and delegation checkpoints for governance snapshots;
- replay-protected signatures only if separately reviewed and tested;
- fixed-supply construction with exact allocation reconciliation;
- no privileged post-deployment supply or balance-control path; and
- explicit exclusion of designated protocol-controlled balances from governance eligibility where technically and constitutionally approved.

Founder Node positions may remain non-transferable even though the underlying MIND token is transferable. A node lock must prevent movement of committed MIND until maturity or an approved emergency exit.

## Risk controls

Transferability increases market, concentration, governance-capture, classification, and communication risk. Before deployment, the project must approve and test:

1. allocation vesting and release schedules;
2. snapshot voting, delegation, quorum denominator, and late-quorum protection;
3. proposal thresholds and anti-spam controls;
4. treasury and protocol-address voting exclusions;
5. concentration monitoring and conflict disclosures;
6. legal review for launch jurisdictions and public communications; and
7. rules prohibiting promises of price, listing, liquidity, profit, or guaranteed APY.

No transfer restriction, price-support mechanism, hidden tax, or emergency seizure power may be introduced under the label of “anti-dump.”

## Matters not decided here

This decision does not approve:

- a public sale, exchange listing, liquidity pool, or launch price;
- an on-chain USD oracle or guaranteed value of MIND;
- exact Founder Node tier amounts or payment assets;
- automatic staking yield or the proposed 38% / 78% / 122% planning rates;
- referral reward base or qualification finality;
- HEAVEN supply, emissions, or vesting;
- mainnet or testnet contract deployment.

Those matters remain separately governed and must be resolved before implementation exceeds a non-production prototype.

## Rationale

The transferable model matches the Founder-approved business direction and allows governance participation, delegation, custody flexibility, and future ecosystem composability. Fixed supply, transparent allocations, checkpoint voting, timelocks, and legal controls are required to prevent transferability from silently becoming a promise of liquidity or returns.

## Effective scope

This decision is effective immediately for all new economic and technical drafts. Historical documents remain preserved but are superseded wherever they describe MIND as non-transferable. Related specifications must be revised through new versions before contract implementation.
