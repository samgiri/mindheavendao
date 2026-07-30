# Founder Node Claim Timing, Mode Switching, and Maturity Eligibility Decision

**Document ID:** MHE-011  
**Version:** 1.0  
**Status:** Approved claim architecture; inactive pending implementation, audit, and legal approval  
**Classification:** Founder Node duration, HEAVEN claim cadence, fee, switching, and anti-gaming decision  
**Maintainer:** MindHeavenDAO Foundation  
**Approval authority:** Founder (pre-governance phase)  
**Approval date:** 2026-07-30  
**Last updated:** 2026-07-30  
**Related records:** MHE-003 through MHE-010  
**Related open decisions:** OD-09, OD-11, OD-12, and OD-28

## Approved objective

Founder Node positions will use explicit duration and claim-mode selections, deterministic time constants, prospective switching, reward-lot attribution, and strict maturity-bonus eligibility. Participants cannot claim a provisional or unfunded amount and cannot receive both an early-claim benefit and a maturity loyalty bonus for the same position.

This decision approves timing and anti-gaming architecture. It does not activate a claim contract, approve an actual reward rate or bonus, fund a vault, authorize withdrawals, determine tax treatment, or constitute legal approval.

## Exact Founder Node durations

| Duration label | Exact on-chain duration | Maximum total reward ceiling |
|---|---:|---:|
| 6 months | 180 consecutive days | Up to 38% |
| 12 months | 365 consecutive days | Up to 78% |
| 24 months | 730 consecutive days | Up to 122% |

A day equals 86,400 seconds. Durations begin at the position's recorded activation timestamp and use elapsed seconds, not calendar-month arithmetic.

The interface must show the exact UTC activation and maturity timestamps before confirmation. “6 months,” “12 months,” and “24 months” are user-facing labels for the approved 180-, 365-, and 730-day contract durations.

A position reaching its duration does not make provisional, disputed, unfunded, or unfinalized HEAVEN claimable. Settlement remains subject to MHE-007 through MHE-010.

## Available claim modes

Each position must explicitly select one claim mode before activation. There is no hidden default.

| Claim mode | Minimum successful-claim interval | Protocol claim fee | Maturity loyalty bonus |
|---|---:|---:|---|
| Weekly | 7 consecutive days | 2% of gross claimed HEAVEN | Not eligible |
| Monthly | 30 consecutive days | 0% | Not eligible |
| Maturity | No early claim; settlement after position maturity and applicable finalization | 0% | Eligible for an actual pre-funded bonus up to 5% |

Network gas remains payable by the claimant for every on-chain claim unless a separately approved gas-sponsorship policy applies.

A claim interval controls frequency only. It does not cause rewards to accrue, guarantee a payment, override participation requirements, or shorten evidence and settlement finalization.

## Claimable balance requirements

A HEAVEN amount becomes claimable only after all of the following are true:

1. the relevant epoch was validly approved and pre-funded;
2. the participant's eligible MIND quantity was validly recorded;
3. the applicable service work and participation score were finalized under MHE-008;
4. the MHE-007 calculation and common pool adjustment were finalized;
5. any applicable appeal or legal hold was resolved;
6. the amount entered the finalized-claimable state under MHE-010; and
7. the selected claim mode permits a claim at the current timestamp.

No estimated dashboard value, maximum ceiling, provisional score, preliminary calculation, future bonus, or unallocated vault balance is claimable.

## First and subsequent claims

For weekly or monthly mode:

- the first claim may occur as soon as a finalized-claimable reward lot exists;
- after a successful weekly claim, the next weekly claim cannot occur for 7 days;
- after a successful monthly claim, the next monthly claim cannot occur for 30 days;
- a failed or reverted transaction does not consume the interval;
- an interval begins at the timestamp of the last successful claim for that position;
- claimable lots may accumulate without compounding; and
- delaying a claim does not change the fee classification assigned to a reward lot.

The 24-month standard claim and 12-month dormant-protection timeline in MHE-010 begins separately for each finalized reward lot on its claimable date.

## Reward-lot mode attribution

Every finalized reward lot must record:

- position identifier;
- source epoch and Release Year;
- service/eligibility interval;
- mode that was effective during the interval;
- gross HEAVEN amount;
- applicable protocol fee classification;
- maturity-bonus eligibility;
- finalization and claimable timestamps;
- claimed, dormant, returned, and legal-hold state; and
- calculation and evidence references.

A mode change applies only to service/reward intervals beginning after the change becomes effective. It cannot reclassify an earlier lot.

Therefore:

- a weekly-attributed lot retains its 2% protocol fee even if claimed after switching to monthly or maturity mode;
- a monthly-attributed lot retains its zero protocol fee;
- an early-mode lot can never become maturity-bonus eligible; and
- no participant can avoid a fee or acquire a bonus by delaying a claim or switching immediately before settlement.

## Claim-mode switching

A participant may request a prospective mode change subject to all of the following:

| Control | Approved rule |
|---|---|
| Switch frequency | No more than one effective switch per position in any rolling 90-day period |
| Switch delay | 14 consecutive days from request to effective timestamp |
| Retroactivity | Prohibited |
| Existing reward lots | Retain original mode, fee, and bonus attributes |
| Pending appeal or disputed accounting | Switch may be requested but cannot alter disputed periods |
| Cancellation | Allowed before effectiveness under the published transaction process |
| Fee | No protocol switch fee at launch; network gas applies |

A switch is effective only after the 14-day delay and a successful on-chain execution or deterministic pre-authorized transition defined in the audited specification. It cannot modify a finalized or already-started service/reward interval.

Governance cannot selectively waive switching controls for an individual position.

## Maturity loyalty-bonus eligibility

A position is eligible to be considered for the maturity loyalty bonus only if all conditions below are satisfied:

1. maturity mode was selected before position activation;
2. maturity mode remained continuously effective from activation through the exact maturity timestamp;
3. no weekly or monthly mode ever became effective for the position;
4. no base reward was claimed before maturity;
5. the position satisfied all approved participation, conduct, legal, and eligibility rules;
6. the applicable maturity bonus was approved prospectively and pre-funded;
7. the bonus plus base rewards remains inside the position's MHE-004 maximum total reward ceiling; and
8. sufficient HEAVEN remains in the applicable funded bonus pool after the MHE-007 adjustment.

An actual maturity bonus may be lower than 5% or zero.

Requesting a switch away from maturity mode does not immediately destroy eligibility if the request is cancelled before effectiveness. Once a non-maturity mode becomes effective, maturity-bonus eligibility for that position is permanently lost and cannot be restored by switching back.

A participant who switches into maturity mode from weekly or monthly mode may use maturity settlement for future convenience but receives no maturity loyalty bonus for that position.

## Maturity settlement timing

Maturity settlement becomes available at the later of:

1. the position's exact maturity timestamp; and
2. finalization of all reward lots and appeals included in that settlement.

A participant may settle finalized undisputed lots while a separate lot remains under a legal hold only if the contract and legal specification can preserve the held amount without duplicate payment or bonus manipulation. Otherwise, the undisputed settlement remains reserved until lawful completion.

Protocol-caused delay does not reduce a finalized base reward or independently disqualify an otherwise eligible position from consideration for a funded maturity bonus.

## Weekly protocol claim fee

For each weekly-attributed reward lot:

```text
Protocol fee = gross claimed HEAVEN × 2%
Net transferred = gross claimed HEAVEN − protocol fee
```

The calculation must use full token precision and the final approved rounding rule. The fee:

- is denominated only in HEAVEN;
- is disclosed before confirmation;
- is deducted only when the applicable lot is successfully claimed;
- cannot be charged to an unclaimed, failed, reverted, provisional, or zero claim;
- must be routed to a disclosed governance-approved HEAVEN reserve destination;
- cannot increase the participant's MIND principal or reward ceiling; and
- must be separately reported and reconciled.

Monthly and maturity claims have no DAO protocol claim fee. Zero protocol fee does not mean zero network gas or zero tax.

## Partial claims and lot ordering

The final implementation may permit claiming all eligible lots or a user-selected subset, but it must:

- use deterministic disclosed lot ordering;
- prevent the same lot or fraction from being claimed twice;
- apply the correct fee to every lot fraction;
- preserve remaining balances and expiry dates;
- prevent fee-class mixing from changing the total fee;
- avoid rounding that exceeds the funded pool; and
- preserve maturity eligibility rules.

The recommended default is oldest-finalized-lot first. Exact partial-claim and minimum-claim thresholds remain subject to technical approval and invariant testing.

## Position upgrades, splits, and combinations

No position upgrade, split, merge, transfer, wallet migration, or inheritance process may reset:

- activation or maturity timestamp;
- claim cooldown;
- mode-switch cooldown;
- reward-lot fee classification;
- early-claim history;
- maturity-bonus eligibility loss;
- claimable date or expiry; or
- annual/epoch provenance.

Any future position-modification feature requires a separate approved decision and audited anti-gaming specification.

## Emergency and pause protections

- A pause stops new claims only where necessary for security or law; it cannot redirect balances or rewrite claim history.
- Claim cooldown does not continue to disadvantage a participant for protocol-caused claim unavailability; applicable MHE-010 expiry extensions remain mandatory.
- Emergency authority cannot waive fees for selected participants, restore lost maturity eligibility, accelerate a bonus, or shorten a switch delay.
- Migration must preserve every timestamp, lot, mode, fee, eligibility, claim, and dormant state exactly.
- After recovery, the contract must prevent duplicate use of the pre-pause interval or claim balance.

## Required interface disclosures

Before activation or a mode switch, the interface must show:

- exact position duration and UTC maturity timestamp;
- current mode and pending mode;
- switch request and effective timestamps;
- earliest next successful claim timestamp;
- gross claimable HEAVEN by fee class;
- protocol fee, estimated network gas, and net transfer;
- whether maturity-bonus eligibility remains intact;
- explicit warning that switching away from maturity permanently removes bonus eligibility;
- actual approved bonus percentage, funded status, and ceiling impact, if applicable;
- claim expiry and dormant dates; and
- confirmation that rewards and bonuses may be lower or zero.

The interface must not display ceilings as earned balances or label variable rewards as guaranteed APY.

## Security and accounting tests

Before activation, testing and independent review must cover at least:

- exact 180/365/730-day boundaries;
- 7-, 14-, 30-, and 90-day timestamps;
- simultaneous claim and switch transactions;
- delayed finalization and post-maturity settlement;
- fee attribution before and after switches;
- cancelled and repeated switch requests;
- maturity disqualification and inability to restore it;
- partial claims and mixed-fee lots;
- rounding, dust, zero claims, and insufficient funding;
- replay, reentrancy, timestamp manipulation, duplicate claims, pause, recovery, and migration; and
- reconciliation of gross, fee, net, remaining, dormant, and returned HEAVEN.

## Legal and communications boundary

Claim frequency and loyalty bonuses do not establish legal compliance or prevent characterization under securities, consumer, payments, custody, tax, AML, sanctions, employment, promotion, or other law.

Public materials must not describe weekly or monthly access as salary, passive income, assured cash flow, fixed yield, or guaranteed return. “Maturity bonus up to 5%” must always disclose that the actual bonus is variable, separately approved, pre-funded, ceiling-limited, conditional, and may be zero.

MHE-006 legal-readiness gates remain mandatory for every market.

## Matters still open

This decision does not approve:

- an actual epoch rate, HEAVEN allocation factor, or maturity bonus percentage;
- recurring epoch duration or relationship between service windows and claim lots;
- exact partial-claim, rounding, dust, or minimum-claim rules;
- fee destination contract;
- early or emergency MIND withdrawal;
- position upgrades, splitting, merging, transfer, inheritance, or recovery implementation;
- contract code, roles, multisig, timelock, deployment, funding, distribution, or launch;
- legal, tax, accounting, consumer, privacy, or security approval.

## Effective scope

This decision further resolves OD-09 by approving exact position durations, claim intervals, prospective mode switching, reward-lot attribution, fee preservation, and maturity anti-gaming rules.

OD-11 and OD-12 remain open for principal/position withdrawal. OD-28 remains open for implementation-specific claim and recovery mechanics, while its 24-plus-12-month protection policy remains approved under MHE-010.
