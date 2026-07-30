# Founder Node Early Withdrawal and Emergency Exit Decision

**Document ID:** MHE-012  
**Version:** 1.0  
**Status:** Approved exit architecture; inactive pending implementation, audit, and legal approval  
**Classification:** Locked-MIND principal protection, early exit, emergency escape, and reward-consequence decision  
**Maintainer:** MindHeavenDAO Foundation  
**Approval authority:** Founder (pre-governance phase)  
**Approval date:** 2026-07-30  
**Last updated:** 2026-07-30  
**Related records:** MHE-003 through MHE-011  
**Related open decisions:** OD-11, OD-12, OD-13, OD-14, and OD-18

## Approved objective

A Founder Node position will protect the participant's locked MIND principal. Ordinary early exit is permitted through a transparent cooldown, and emergency principal recovery is available during a qualifying critical incident or prolonged protocol failure.

No ordinary or emergency exit may confiscate MIND principal, redirect it to treasury, burn it as a penalty, or retroactively claw back already claimed or finalized HEAVEN. Exit consequences apply to future and unfinalized reward eligibility, not to ownership of principal.

This decision approves exit architecture. It does not deploy a custody contract, activate withdrawals, determine legal custody status, approve recovery or inheritance, or constitute legal approval.

## Position and principal boundary

For this decision:

- **MIND principal** is the exact MIND quantity deposited into the Founder Node position;
- **position status** is the participant's active Founder Node eligibility and related accounting state;
- **finalized HEAVEN** is a reward lot in the finalized-claimable, claimed, or dormant state under MHE-010; and
- **unfinalized HEAVEN** includes illustrative, estimated, accrued-but-unverified, provisional, disputed, unallocated, or unfunded amounts.

Locking MIND does not transfer beneficial ownership to the Foundation, DAO treasury, SatoshiLab.ai, a reviewer, or a node operator. The final legal and technical structure must accurately disclose custody, control, insolvency, tax, sanctions, and recovery treatment.

## Normal maturity exit

At or after the exact 180-, 365-, or 730-day maturity timestamp established by MHE-011, a participant may withdraw 100% of the position's MIND principal, subject only to:

- completion of a valid non-reentrant withdrawal transaction;
- any narrowly applicable documented legal hold;
- network gas; and
- a temporary security pause governed by the protections below.

There is no protocol withdrawal fee or MIND principal penalty at normal maturity.

Withdrawing MIND at maturity:

- closes the active position;
- ends future participation and reward eligibility for that position;
- does not remove finalized HEAVEN claims;
- does not accelerate unfinalized HEAVEN;
- does not reset claim deadlines; and
- does not prevent a participant from creating a separately eligible new position under then-current prospective rules.

## Ordinary early-exit process

A participant may request an ordinary early exit before maturity.

| Control | Approved rule |
|---|---|
| Early-exit request | Permissionless participant transaction |
| Cooldown | 30 consecutive days |
| MIND returned at execution | 100% of deposited principal |
| Protocol exit fee | 0% |
| Network gas | Payable by participant |
| Reward accrual cutoff | Request timestamp |
| Founder Node status and voting/delegation effect | Suspended prospectively at request timestamp |
| Maturity-bonus eligibility | Permanently lost when the early-exit request is submitted |
| Previously claimed/finalized HEAVEN | Preserved |
| Unfinalized future HEAVEN | Not claimable except eligible pre-request completed service lots described below |

The interface must show the exact request and earliest execution timestamps, MIND principal, affected governance rights, preserved finalized HEAVEN, lost unfinalized eligibility, and irreversible maturity-bonus consequence before confirmation.

## Early-exit reward treatment

An ordinary early-exit request has the following effects:

- reward and participation intervals ending before the request timestamp may proceed through normal evidence, review, appeal, funding, and finalization;
- a service or reward interval ending at or after the request timestamp is ineligible for that position, even if partially completed;
- no reward is prorated merely because the participant was active for part of an unfinished interval;
- already finalized reward lots remain protected under MHE-010;
- already claimed HEAVEN is not clawed back;
- weekly-attributed finalized lots retain their 2% claim fee;
- monthly-attributed finalized lots retain zero protocol claim fee;
- all maturity-bonus eligibility is permanently lost for that position; and
- no forfeited or ineligible estimate becomes treasury property—it remains or returns within the applicable funded-pool accounting.

The final task catalog must disclose this interval-completion rule before participation.

## Cancellation of an ordinary early-exit request

A participant may cancel an ordinary early-exit request before execution.

Cancellation:

- keeps MIND locked under the original maturity timestamp;
- does not restore governance status, reward eligibility, or service scoring for the period between request and cancellation;
- resumes prospective position and participation eligibility only from the cancellation timestamp;
- does not restore maturity-bonus eligibility;
- does not reset the original activation or maturity timestamp;
- cannot reclassify earlier reward lots; and
- must be recorded on-chain.

A participant cannot repeatedly request and cancel exit to manufacture reward, voting, claim, or timing advantages. The final implementation must enforce a 30-day waiting period after cancellation before another ordinary early-exit request, unless an emergency exit becomes available.

## Ordinary early-exit execution

After the 30-day cooldown:

- only the participant or an approved participant-authorized recovery mechanism may execute the exit;
- the contract returns the full MIND principal to the approved destination;
- the position becomes permanently closed;
- position voting, delegation, referral/status, and future reward eligibility end;
- the same position cannot be reactivated;
- finalized HEAVEN remains separately claimable; and
- execution cannot depend on DAO treasury liquidity because the principal must remain fully reserved in the position contract.

If the participant does not execute, MIND remains locked and the position remains suspended until cancellation, execution, maturity withdrawal, or an eligible emergency path.

## Emergency-exit activation conditions

A principal-only emergency exit may become available through either:

1. a published emergency-governance/security action responding to a critical contract vulnerability, custody risk, prolonged operational failure, unlawful lock, migration failure, or comparable participant-protection event; or
2. an objective on-chain prolonged-pause trigger where the relevant position withdrawal function has remained unavailable for at least 30 consecutive days.

The final implementation should prefer objective permissionless triggers where technically safe. Exact emergency authority, multisig threshold, automatic trigger logic, maximum pause, and migration relationship require separate technical and security approval under OD-18 and OD-33.

An emergency cannot be declared to improve token economics, alter market supply, avoid lawful participant claims, favor selected wallets, or bypass ordinary governance for convenience.

## Emergency-exit treatment

When an emergency exit is validly available:

| Item | Approved treatment |
|---|---|
| Cooldown | None |
| MIND principal returned | 100% |
| Protocol exit fee | 0% |
| Network gas | Payable unless separately sponsored |
| Treasury approval for individual execution | Not required |
| Previously claimed HEAVEN | Preserved |
| Finalized and dormant HEAVEN | Preserved in separate claim accounting |
| Unfinalized HEAVEN | No automatic payout; follows the cutoff and finalization rules below |
| Maturity bonus | Not automatically created or accelerated |

For an emergency affecting the protocol rather than participant misconduct:

- completed service/reward intervals ending before the emergency cutoff may still finalize if evidence, funding, law, and security allow;
- incomplete intervals ending after the cutoff do not create prorated or guaranteed rewards;
- a position already past maturity retains any maturity eligibility it validly completed before the emergency;
- an early emergency return before maturity does not automatically earn a maturity bonus;
- governance may not invent retroactive compensation from participant claim funds; and
- any separately proposed remediation program requires its own legal, governance, funding, and disclosure approval.

## Principal solvency and segregation

At every moment before withdrawal, the position system must maintain:

```text
MIND held for open positions ≥ total MIND principal owed to open positions
```

The locked-MIND contract:

- cannot lend, stake externally, bridge, wrap, pledge, rehypothecate, trade, delegate custody, or use participant principal for operations;
- cannot transfer MIND principal to a reward vault, treasury, liquidity pool, adviser, service provider, or another participant;
- cannot treat principal as revenue or protocol-owned supply;
- must keep principal accounting separate from governance weight and HEAVEN rewards;
- must expose total principal owed and contract MIND balance; and
- must fail atomically if a withdrawal transfer fails.

Any deficit or unexplained mismatch immediately pauses new deposits and triggers the incident process without disabling a safe principal exit where technically possible.

## Governance and snapshot consequences

To prevent exit-related voting manipulation:

- voting and delegation weight attributable to the position is suspended prospectively when an ordinary early-exit request is submitted;
- cancelling the request restores future eligibility only after the approved snapshot/cooldown process, never retroactively;
- executing ordinary or emergency exit permanently removes position-based status;
- votes validly cast before the request under a finalized snapshot are not rewritten;
- an exit cannot be used to vote twice through simultaneous locked and unlocked balances; and
- quorum and eligible-supply calculations must follow the separately approved governance specification.

Exact treatment of transferable unlocked MIND after exit remains governed by MHE-001 and the future governance-voting mechanics.

## Pauses and participant protection

- New deposits and ordinary operations may be paused independently.
- A pause cannot transfer, burn, confiscate, or redirect MIND principal.
- Emergency authority must not disable a matured withdrawal or emergency principal exit longer than necessary to prevent an immediate technical loss.
- If immediate transfer is unsafe, the system must use an audited migration or withdrawal queue with public reconciliation and the shortest safe delay.
- A pause reason, affected modules, activation time, approving authority, review cadence, and recovery plan must be published.
- A pause requires review at least every seven days and cannot silently become indefinite.
- Thirty consecutive days of unavailable position withdrawal activates or requires the approved prolonged-pause escape path.

## Legal holds and prohibited discretion

A narrowly applicable legal hold may delay a specific transfer only where the responsible entity receives and verifies a binding legal obligation. It must be documented, access-controlled, periodically reviewed, and disclosed to the participant to the extent lawful.

No administrator may:

- seize principal because of a governance disagreement, inactivity, low participation score, referral dispute, criticism, or failure to earn HEAVEN;
- apply a hidden early-exit penalty;
- redirect principal through an emergency function;
- blacklist a participant without applicable legal authority and due process;
- selectively accelerate or delay withdrawals; or
- condition principal return on surrendering an appeal or finalized HEAVEN claim.

The token and position architecture must minimize discretionary transfer-control powers consistent with applicable law and security.

## Recovery, inheritance, and destination safety

Ordinary and emergency withdrawals normally return MIND to the position owner's recorded wallet. Any alternative destination, wallet recovery, death, incapacity, executor, beneficiary, or inheritance flow requires a separately approved process with:

- advance participant authorization where possible;
- strong evidence and identity safeguards;
- multi-person review and conflict controls;
- notice and appeal;
- duplicate-payment prevention;
- privacy minimization;
- jurisdiction-specific succession and sanctions review; and
- no general transfer or confiscation backdoor.

MHE-012 does not approve that operating process.

## Position modification boundary

An upgrade, split, merge, transfer, migration, inheritance, or new position cannot erase or reset:

- early-exit request history;
- cooldown and cancellation history;
- reward cutoff;
- governance suspension;
- maturity-bonus disqualification;
- finalized HEAVEN lots;
- claim and dormant dates; or
- annual/epoch provenance.

Any position migration must preserve principal exactly and reconcile the source and destination atomically or through a participant-controlled claim process.

## Required interface disclosures

Before position activation, early-exit request, cancellation, execution, or emergency exit, the interface must display:

- exact MIND principal and destination;
- original activation and maturity timestamps;
- exit request, cooldown, and earliest execution timestamp;
- zero protocol principal penalty and applicable network gas;
- voting/status suspension;
- reward cutoff and affected service intervals;
- preserved finalized HEAVEN;
- forfeited or ineligible unfinalized estimates;
- irreversible maturity-bonus loss for ordinary early exit;
- whether an emergency trigger is active and why;
- any verified legal hold; and
- warning that a new position uses future terms and does not restore the old position.

No interface may describe principal protection as a guarantee against smart-contract, network, wallet, legal, tax, or market risk.

## Security and invariant requirements

Before activation, independent testing and audit must verify:

- exact principal solvency at all times;
- no treasury/admin path to participant principal;
- 30-day ordinary cooldown and post-cancellation waiting period;
- no double withdrawal, reentrancy, replay, or destination substitution;
- reward cutoff and completed-interval treatment;
- preservation of finalized HEAVEN;
- irreversible maturity-bonus disqualification;
- governance weight suspension without double voting;
- objective 30-day prolonged-pause trigger;
- safe pause, emergency exit, migration, and recovery interactions;
- exact event and state reconciliation; and
- behavior with fee-on-transfer, callback, malformed, paused, or non-standard tokens, even though approved MIND should prohibit incompatible behavior.

Formal or machine-checked invariants should include principal conservation, single-exit execution, and separation of MIND and HEAVEN accounting.

## Legal and communications boundary

Principal return, zero exit fee, cooldowns, and emergency escape do not establish that the position is legally compliant or outside securities, custody, trust, consumer, payments, insolvency, tax, AML, sanctions, property, or other law.

Terms must accurately disclose smart-contract risk, lock consequences, reward cutoff, maturity-bonus loss, transaction gas, pause powers, legal holds, recovery limitations, governing law, and responsible entities.

Public materials must not present a 100% principal-return contract rule as guaranteed fiat value, capital protection, redemption at a fixed price, insurance, or absence of token-price risk. It means only that the contract is designed to return the same number of locked MIND units.

## Matters still open

This decision does not approve:

- contract code, custody model, administrators, emergency council, multisig, or timelock;
- exact automatic emergency trigger implementation;
- voting/quorum treatment of unlocked transferable MIND;
- position transfer, upgrade, split, merge, recovery, or inheritance;
- withdrawal destination changes or smart-wallet support;
- legal-hold operator and process;
- deployment, token issuance, position activation, distribution, or launch;
- legal, tax, accounting, consumer, privacy, insolvency, or security approval.

## Effective scope

This decision resolves the policy architecture of OD-11 and OD-12 by approving a 30-day ordinary early-exit cooldown, full MIND principal return without protocol penalty, prospective reward cutoff, preserved finalized HEAVEN, irreversible maturity-bonus loss, and principal-only emergency exit after qualifying activation or prolonged pause.

OD-11 and OD-12 remain open for contract implementation, exact authorities, legal treatment, security review, and activation. OD-13, OD-14, OD-18, and OD-33 remain open.
