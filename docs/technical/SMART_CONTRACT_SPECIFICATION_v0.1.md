# Smart Contract Specification v0.1

**Status:** Design specification only. All contract names are proposed, not final.

## Global invariants

1. MIND total supply is exactly 20,000,000 and can never increase.
2. Reward contracts never pay rewards in MIND.
3. Referral parent is single, non-self, acyclic, and immutable.
4. Referral rate is determined prospectively from the prior qualified count.
5. Finalized pool periods and their weights/allocations cannot change.
6. Reserved and paid HEAVEN never exceed credited funding.
7. Emergency roles cannot seize user balances or bypass timelocks for ordinary actions.

## `MindToken`

- **Purpose:** Governance and Founder Node staking asset.
- **Responsibilities/state:** name, symbol, decimals, fixed total supply, balances, allowances, delegation/checkpoints if approved.
- **Roles:** none after constructor distribution; governance roles only if required for standard vote delegation features.
- **Functions:** standard ERC-20 transfers/approvals and ERC20Votes delegation/checkpoint functions.
- **Events/errors:** standard ERC-20/vote events; custom constructor-allocation validation error.
- **Access controls:** no mint, tax, blacklist, confiscation, or hidden adjustment path.
- **Invariants:** supply fixed at 20M; initial allocation 15M Founder allocation / 5M Foundation-treasury.
- **Upgradeability:** immutable.
- **Risks/tests:** allocation error, checkpoint manipulation, signature replay; test exact supply/allocation, transfer, delegation, permit domain and no callable mint.
- **Dependencies/open questions:** audited token library; transferability and initial custody schedule remain open.

## `FounderNodeStaking`

- **Purpose:** Lock MIND and expose active Founder Node status.
- **Responsibilities/state:** tier definitions, required MIND amounts, 365/730-day positions, owner, start/end, status, reward references.
- **Roles:** governance parameter role; narrow pauser; optional verifier.
- **Functions:** `openNode`, `extendLock`, `withdrawAtMaturity`, `isActive`, position getters; emergency withdrawal only if approved.
- **Events/errors:** node opened/extended/matured/withdrawn/status changed; invalid tier, amount, lock, inactive, premature withdrawal.
- **Access controls:** user controls own position; parameters timelocked and prospective.
- **Invariants:** locked principal conserved; tier/terms fixed per position; active status deterministic.
- **Upgradeability:** bounded proxy or versioned migration; decision pending.
- **Risks/tests:** timestamp boundaries, reentrancy, fee-on-transfer tokens, status desync; fuzz lock lifecycle and principal conservation.
- **Dependencies/open questions:** MIND token; exact tier amounts, early/emergency withdrawal, transfer/inheritance, multi-node rules.

## `FounderNodeNFT`

- **Purpose:** Optional credential representing a node position.
- **Responsibilities/state:** position-to-token mapping and metadata reference.
- **Roles/functions:** staking contract mints/burns or updates; metadata administration must be bounded.
- **Events/errors:** issued, burned, metadata updated; unauthorized issuer, non-transferable.
- **Access/invariants:** no transfer unless governance explicitly approves; NFT cannot independently create staking rights.
- **Upgradeability:** preferably unnecessary; omit entirely unless a clear requirement is approved.
- **Risks/tests:** market confusion, unauthorized transfer, metadata manipulation; test soulbound restrictions and one-to-one mapping.
- **Dependencies/open questions:** FounderNodeStaking; whether an NFT is needed, visual design, transferability and inheritance.

## `HeavenRewardVault`

- **Purpose:** Custody pre-funded HEAVEN and settle approved reward liabilities.
- **Responsibilities/state:** credited funding, reserved liabilities by module, claimed totals, authorized modules, pause state.
- **Roles:** funder, governance/timelock module authorization, emergency pauser.
- **Functions:** `fund`, `reserve`, `releaseReservation`, `claim` or `pay`, `availableBalance`, reconciliation getters.
- **Events/errors:** funded, reserved, released, claimed, module changed; insufficient funding, unauthorized module, duplicate claim.
- **Access controls:** only approved accounting modules reserve; recipients pull claims; treasury cannot withdraw reserved balances.
- **Invariants:** reserved + paid ≤ credited funding; MIND cannot be configured as reward token; token address fixed or tightly governed.
- **Upgradeability:** conservative migration preferred; if proxy, timelocked and invariant-bound.
- **Risks/tests:** insolvency, malicious token, reentrancy, accounting mismatch; invariant and adversarial token tests.
- **Dependencies/open questions:** HEAVEN token; funding source, claim deadline, unclaimed handling, supported token behavior.

## `DirectReferralRegistry`

- **Purpose:** Record immutable one-level referral relationships and prospective reward brackets.
- **Responsibilities/state:** participant parent, qualified direct count, qualification IDs, reserved rewards.
- **Roles:** approved qualifier/oracle; governance can rotate qualifier prospectively.
- **Functions:** `registerReferrer`, `qualifyReferral`, `rateForNextQualification`, views; no parent-change function.
- **Events/errors:** referrer registered, referral qualified, reward reserved; self-referral, circular path, already registered, inactive referrer, duplicate qualification, vault unfunded.
- **Access controls:** participant registers once; qualifier confirms qualification; vault reservation atomic with qualification.
- **Invariants:** one parent, no self/cycle, rates 7%/8%/10% based on prior count, no retroactive repricing, HEAVEN only.
- **Upgradeability:** immutable core registry recommended; versioned qualifier adapters.
- **Risks/tests:** Sybil/refund abuse, oracle compromise, front-running; test boundaries at 1/10/20, cycles, duplicates, inactive nodes and rollback on failed reservation.
- **Dependencies/open questions:** staking, vault, eligible base, qualified-referral definition, status snapshot, refund/clawback policy.

## `MindGlobalPool`

- **Purpose:** Fund, finalize, and distribute monthly contribution rewards.
- **Responsibilities/state:** BPS (100 initial, 0–500 bound), period dates/status, funding, point weights/root, total points, claimed bitmap/totals.
- **Roles:** governance sets future BPS/weights; allocator publishes verified points; finalizer; pauser.
- **Functions:** `createPeriod`, `fundPeriod`, `setFutureWeights`, `publishPointsRoot`, `finalizePeriod`, `claim`, proof/view functions.
- **Events/errors:** pool funded, point allocation/root published, period finalized, reward claimed, future parameters changed; invalid proof, finalized, unfunded, cap exceeded, duplicate claim.
- **Access controls:** allocator cannot withdraw; governance cannot change finalized periods; recipient claims with proof.
- **Invariants:** 0≤BPS≤500; period allocation ≤ funded HEAVEN; pro-rata rewards; finalized data immutable; claims ≤ allocation.
- **Upgradeability:** bounded proxy or versioned migration with finalized state preserved.
- **Risks/tests:** biased points, root replacement, rounding/dust, privacy leakage; test proportionality, zero points, proof failure, finalized immutability and funded cap.
- **Dependencies/open questions:** vault, contribution verification, weight assignment, appeals, eligible budget, rounding, claim deadline.

## `Governor`

- **Purpose:** MIND-based proposal, voting, queueing, and execution.
- **State/roles/functions:** standard proposal lifecycle, voting checkpoints, quorum, proposal threshold and cancellation; no unilateral executor.
- **Events/errors:** standard proposal/vote events; invalid state, threshold, quorum, duplicate vote.
- **Access/invariants:** one MIND one vote at snapshot; ordinary 7-day vote and >50% approval with 10% quorum; execution only through timelock.
- **Upgradeability:** audited standard implementation; upgrades only by protected governance if used.
- **Risks/tests:** flash voting, capture, proposal spam, late quorum; lifecycle and checkpoint tests.
- **Dependencies/open questions:** MIND votes, proposal eligibility, quorum denominator, major/constitutional classification.

## `TimelockController`

- **Purpose:** Enforce review delay before governance execution.
- **State/roles/functions:** operation hashes, timestamps, proposer/executor/canceller roles, queue/execute/cancel.
- **Events/errors:** standard scheduling/execution events; premature, duplicate, unauthorized operation.
- **Invariants:** ordinary delay 48 hours; constitutional recommended ≥7 days; role changes timelocked.
- **Upgradeability:** immutable/audited standard preferred.
- **Risks/tests:** open executor misuse, admin retention, predecessor bypass; role and delay tests.
- **Dependencies/open questions:** Governor; emergency cancellation policy and final constitutional delay.

## `Treasury`

- **Purpose:** Hold and disburse protocol assets under approved governance.
- **State/roles/functions:** asset balances, spending policies, timelocked execution, emergency reserve classification and reporting events.
- **Events/errors:** deposit, governed transfer, policy update; unauthorized, exceeds budget, invalid asset.
- **Access/invariants:** no hidden operator; multisig at launch, then timelock; reward liabilities isolated from free treasury.
- **Upgradeability:** multisig smart account or minimal governed vault; avoid custom upgradeable custody where possible.
- **Risks/tests:** signer compromise, malicious proposal, token quirks; permission, budget and simulation tests.
- **Dependencies/open questions:** legal wrapper, signer policy, allocation breakdown, accepted assets, liquidity and oracle policy.

