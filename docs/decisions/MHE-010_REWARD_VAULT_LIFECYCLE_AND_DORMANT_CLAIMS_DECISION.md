# HEAVEN Reward Vault Lifecycle and Dormant Claims Decision

**Document ID:** MHE-010  
**Version:** 1.0  
**Status:** Approved lifecycle architecture; inactive pending implementation, audit, and legal approval  
**Classification:** Reward-vault timing, funding, settlement, unused-fund, and dormant-claim decision  
**Maintainer:** MindHeavenDAO Foundation  
**Approval authority:** Founder (pre-governance phase)  
**Approval date:** 2026-07-30  
**Last updated:** 2026-07-30  
**Related records:** MHE-004 through MHE-009  
**Related open decisions:** OD-07, OD-08, OD-09, OD-28, and OD-29

## Approved objective

HEAVEN reward vaults will follow a prospective, fully funded, auditable lifecycle. No epoch can activate before its HEAVEN budget is deposited. Unused funds cannot become discretionary treasury revenue, and finalized participant claims receive an extended, notice-based protection period before any lawful return to the reward reserve.

This decision approves lifecycle timing and handling architecture. It does not deploy a vault, activate an epoch, approve an actual reward rate or allocation factor, select claim mechanics, appoint administrators, or establish legal compliance.

## Nine-year commencement and release-year timing

The nine-year schedule in MHE-009 begins only at a separately approved **HEAVEN Reward Release Commencement Timestamp** ((T_0)).

(T_0) must:

- occur after token and vault deployment, independent security review, legal readiness, governance approval, role verification, and public reconciliation;
- be recorded as an exact Unix timestamp and UTC date in a repository activation record;
- not occur automatically upon token deployment or genesis mint; and
- never be backdated.

A **Release Year** is a consecutive 365-day interval:

```text
Release Year n:
[T_0 + (n - 1) × 365 days, T_0 + n × 365 days)
```

Nine Release Years therefore cover 3,285 consecutive days. Leap-day and calendar-year differences do not change the on-chain ceiling calculation. User-facing reports must show both exact UTC dates and the governing timestamps.

An epoch cannot be funded from more than one Release Year. If a proposed epoch would cross a Release Year boundary, it must end at the boundary or be divided into separately funded epochs.

## Epoch approval and pre-funding timeline

Every reward epoch must have a unique identifier and a repository specification approved prospectively.

| Lifecycle event | Minimum or maximum timing |
|---|---|
| Final governance and legal activation record | At least 7 calendar days before epoch start |
| Full HEAVEN deposit into isolated epoch vault | At least 48 hours before epoch start |
| Public vault, budget, rate, factor, task, score, and claim disclosure | Before the funding deadline |
| Epoch service/eligibility window | Exact start/end fixed before activation; cannot cross a Release Year |
| Evidence submission closes | 14 calendar days after service window ends |
| Preliminary review completes | 35 calendar days after service window ends |
| Appeal period closes | 49 calendar days after service window ends |
| Final score and settlement set | No later than 56 calendar days after service window ends |
| Unused epoch balance returned or quarantined | Within 7 calendar days after finalization |

Governance may publish earlier deadlines for preliminary submissions or reviews but cannot reduce the MHE-008 minimum 14-day appeal period.

A system-wide failure, legal hold, sanctions review, security incident, or participant-protective emergency may extend a deadline under a published bounded procedure. Extensions cannot increase a participant's reward, annual ceiling, or funded pool and must be publicly recorded.

## Mandatory epoch specification

Before funding, each epoch record must state:

1. Release Year attribution;
2. exact UTC start and end timestamps;
3. the maximum epoch budget;
4. the actual MHE-007 rate and HEAVEN allocation factor;
5. the MHE-008 task catalog and evidence rules;
6. eligible MIND quantity and snapshot rules;
7. exact vault address and token address;
8. funding source and transaction proof;
9. reviewer, conflict, appeal, and finalization rules;
10. settlement-set and pro-rata calculation rules;
11. claim availability and expiry dates;
12. applicable weekly, monthly, or maturity claim treatment;
13. fees, network gas, bonus eligibility, rounding, and dust handling;
14. unused, rejected, disputed, dormant, and expired-claim treatment;
15. jurisdictional eligibility, sanctions, tax, privacy, and legal disclosures; and
16. governance, legal, treasury, and security approvals.

An omitted required field keeps the epoch inactive.

## Vault accounting states

Every HEAVEN unit deposited into an epoch vault must be publicly reconcilable in one mutually exclusive state:

| State | Meaning |
|---|---|
| Funded-unallocated | Deposited but not yet calculated for a participant |
| Provisionally calculated | Included in a preliminary calculation; not a finalized claim |
| Disputed | Subject to a timely appeal, fraud review, legal hold, or calculation correction |
| Finalized-claimable | Owed under the finalized settlement set and protected from treasury withdrawal |
| Claimed | Transferred to the eligible claimant, net of any disclosed protocol fee |
| Unused | Not required after finalization or released from a rejected/provisional calculation |
| Dormant | Finalized but unclaimed after the standard claim period |
| Returned | Lawfully returned to the originating reward reserve |
| Burned | Permanently destroyed through a separately authorized burn, with no re-mint |

The sum of all accounting states must equal the epoch vault's funded amount plus documented claimed or returned transfers. State transitions must emit auditable events and cannot silently erase a finalized participant claim.

## Unused epoch HEAVEN

After the settlement set becomes final:

- HEAVEN not required for finalized claims is classified as unused;
- unused HEAVEN must be returned to the originating MHE-009 reward reserve or placed in a restricted return-pending vault within seven calendar days;
- returned HEAVEN retains its original Release Year provenance;
- returning HEAVEN does not restore or automatically roll forward the expired annual release capacity;
- returned HEAVEN cannot be redirected to treasury, insiders, liquidity, price support, or a different allocation;
- any later use requires a new prospective governance decision consistent with MHE-009, the then-applicable ceiling, legal approval, and a new pre-funded epoch; and
- no administrator may keep an unexplained surplus in an epoch vault.

## Finalized participant claims

Once a claim is finalized:

- the corresponding HEAVEN is reserved exclusively for that claimant;
- it cannot be withdrawn, borrowed, staked, reallocated, used for treasury operations, or counted as unallocated funding;
- it remains subject only to the published claim method, network gas, valid protocol fee, sanctions/legal hold, verified recovery process, or final lawful order;
- an ordinary governance vote cannot retroactively reduce it; and
- contract and reporting systems must distinguish finalized claims from estimates, illustrations, and provisional calculations.

This protection does not create a guarantee before finalization and does not override applicable law.

## Standard claim and dormant-claim timeline

A finalized claim receives the following protection:

| Period | Duration from claimable date | Treatment |
|---|---:|---|
| Standard claim period | 0–24 months | Claim remains available under the approved method |
| Dormant protection period | Months 24–36 | Claim moves to or remains reserved in a segregated Dormant Claims Vault; late claim remains available subject to lawful verification |
| Post-dormancy disposition | After 36 months | May return to the originating reward reserve only after final notice, legal review, and confirmation that unclaimed-property or similar law does not require another treatment |

No expiry or return is automatic where applicable law requires remittance, continued custody, escheat, trust treatment, beneficiary protection, or another process.

Claim deadlines pause for periods when claims are unavailable because of a protocol pause, material contract failure, Foundation-caused access failure, unresolved approved appeal, or legal restriction that is not attributable to the claimant. The extension must be at least equal to the affected unavailable period.

## Required notices

Subject to lawful contact permissions and data-minimization rules, the responsible operator must provide or publish notices:

- when a claim becomes available;
- approximately 12 months after the claimable date if still unclaimed;
- approximately 18 months after the claimable date;
- at least 30 days before the 24-month dormant transition;
- at least 90 days before the 36-month disposition eligibility date; and
- at least 30 days before any actual return or legally required remittance.

Failure to deliver an individual electronic notice does not by itself expose private contact data or authorize a public identity disclosure. Public wallet-based notices and dashboards must remain available.

## Death, incapacity, recovery, and legal holds

No finalized claim may be returned merely because the original wallet is inaccessible where a timely, approved recovery, inheritance, incapacity, or executor process is pending.

The final system requires:

- a privacy-preserving claimant recovery process;
- documented authority and evidence standards;
- multi-person review and conflicts controls;
- protection against duplicate payment;
- jurisdiction-specific succession and unclaimed-property review;
- an appeal path; and
- no general administrator ability to seize or redirect user balances.

Sanctions, fraud, court, tax, or law-enforcement holds must be narrow, documented, legally reviewed, periodically reassessed, and reported to the extent lawful. A hold does not convert a claim into treasury property.

## Interaction with claim options

MHE-005 remains controlling:

- weekly claims carry a 2% protocol claim fee;
- monthly claims carry no DAO protocol claim fee;
- maturity settlement may receive an eligible pre-funded loyalty bonus up to 5%;
- network gas remains payable; and
- all rewards, fees, and bonuses remain within the applicable maximum total reward ceiling.

This decision does not yet approve exact weekly/monthly time constants, mode selection, switching, cooldowns, provisional accrual, maturity eligibility, or anti-gaming implementation. Those mechanics must be reconciled with the MHE-008 participation finalization process before contract implementation.

No participant may claim a provisional, disputed, or unfunded amount.

## Rounding and dust boundary

The final contract specification must:

- calculate with full token precision where practical;
- use one published rounding direction consistently;
- prevent aggregate rounding from exceeding the funded pool;
- identify participant-level dust;
- disclose minimum claim thresholds, if any;
- keep dust attributable and auditable; and
- return only non-claimable residual dust under the unused-fund process after all protected claims are satisfied.

Exact arithmetic and thresholds remain subject to implementation approval and invariant testing.

## Reporting and reconciliation

At minimum, publish for every epoch:

- approved and funded budget;
- annual ceiling attribution;
- vault balance and funding transaction;
- preliminary, disputed, finalized, claimed, dormant, unused, and returned totals;
- number of eligible participants without unnecessary personal data;
- pro-rata adjustment factor;
- protocol fees and destinations;
- claim deadlines and paused-time extensions;
- reconciliation differences and corrections; and
- legal holds or exceptional dispositions to the extent disclosure is lawful.

A material mismatch pauses new funding and settlement until investigated and corrected under the incident process.

## Security and authority boundaries

- Treasury and reward-reserve administrators cannot withdraw finalized claims.
- Epoch-vault authority must be separated from reviewer and score authority.
- Emergency pause can stop new funding or claims for security, but cannot redirect balances, increase ceilings, rewrite finalized allocations, or accelerate expiry.
- Contract migration must preserve every finalized and dormant claim exactly and be independently reconciled.
- No upgrade may shorten an active claim period or remove an existing recovery right.
- Vault solvency, state accounting, access control, timestamp boundaries, repeated claims, fee routing, return paths, and migration require unit, integration, fuzz, and invariant testing plus independent audit.

## Legal and communications boundary

A long claim period, dormant vault, or pre-funded budget does not by itself determine securities, custody, trust, money-transmission, payments, tax, employment, consumer, unclaimed-property, AML, sanctions, or other legal treatment.

Terms must accurately identify the responsible legal entity, custody arrangement, participant rights, claim deadlines, fees, risks, recovery process, governing law, and dispute process before activation.

Public materials must not portray a funded maximum budget as guaranteed individual income or characterize dormant participant property as automatically belonging to the DAO.

## Matters still open

This decision does not approve:

- exact epoch duration or recurring calendar;
- exact weekly/monthly claim time constants;
- claim-mode selection, switching, cooldown, and maturity anti-gaming rules;
- rounding direction, minimum claim, dust threshold, or gas subsidy;
- vault code, upgrade/migration implementation, administrators, or signers;
- recovery, inheritance, legal-hold, or unclaimed-property operating entity;
- actual epoch rate, HEAVEN factor, task catalog, funding transaction, or commencement timestamp;
- legal, tax, accounting, security, deployment, distribution, or launch approval.

## Effective scope

This decision partially resolves OD-07 and OD-08 by defining Release Year timing, prospective epoch funding, vault accounting states, finalization deadlines, and unused-fund return controls.

It resolves the policy architecture under OD-28 and OD-29 by approving a 24-month standard claim period, 12-month dormant protection period, repeated notice requirements, participant-protective deadline extensions, and lawful post-36-month disposition review.

OD-07, OD-08, OD-09, OD-28, and OD-29 remain open for implementation-specific parameters, legal treatment, technical specification, audit, and activation.
