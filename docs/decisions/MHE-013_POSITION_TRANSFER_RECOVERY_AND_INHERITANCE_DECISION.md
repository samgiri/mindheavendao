# Founder Node Transfer, Wallet Recovery, and Inheritance Decision

**Document ID:** MHE-013  
**Version:** 1.0  
**Status:** Approved continuity architecture; inactive pending implementation, audit, and legal approval  
**Classification:** Position non-transferability, wallet migration, recovery, succession, privacy, and due-process decision  
**Maintainer:** MindHeavenDAO Foundation  
**Approval authority:** Founder (pre-governance phase)  
**Approval date:** 2026-07-30  
**Last updated:** 2026-07-30  
**Related records:** MHE-001 and MHE-003 through MHE-012  
**Related open decisions:** OD-13, OD-14, OD-18, OD-22, and OD-30

## Approved objective

An active Founder Node position will be non-transferable and cannot become a secondary-market instrument. Position continuity is permitted only through narrow owner-authorized wallet migration, pre-authorized recovery, incapacity handling, or lawful succession.

Every permitted continuity event must preserve the position's complete economic, governance, participation, claim, fee, exit, and maturity history. It cannot reset a timestamp, create a second position, avoid a fee, restore lost bonus eligibility, duplicate voting power, or transfer more MIND or HEAVEN than the original position owns.

This decision approves continuity architecture. It does not appoint a recovery operator, validate a will or beneficiary, determine inheritance or tax law, deploy a contract, or constitute legal approval.

## Active-position non-transferability

An active Founder Node position cannot be:

- sold, assigned, gifted, auctioned, delegated as property, or transferred by ordinary token transaction;
- approved for transfer through an allowance or permit;
- wrapped, bridged, fractionalized, tokenized, or represented by a transferable NFT;
- pledged, mortgaged, rehypothecated, or used as collateral;
- deposited into a liquidity pool, marketplace, lending protocol, or custody yield program;
- split or merged to create marketable units;
- transferred to obtain a different tier, duration, claim fee, reward rate, participation score, maturity bonus, referral relationship, or governance weight; or
- moved by an administrator for convenience, inactivity, policy disagreement, or treasury purposes.

MIND itself remains transferable when unlocked under MHE-001. Non-transferability applies to the active Founder Node position and its locked principal/status bundle, not to unlocked MIND after a valid exit.

## Position continuity events

Only the following position-continuity events may be supported:

| Event | Purpose | Economic owner changes? |
|---|---|---|
| Owner-authorized wallet migration | Move control from an accessible source wallet to a new wallet | No |
| Pre-authorized guardian recovery | Recover from lost or compromised access under an existing recovery configuration | No |
| Smart-wallet implementation migration | Move to a compatible replacement wallet without changing beneficial ownership | No |
| Incapacity administration | Permit a lawful authorized person to act for the owner | Only as applicable law provides |
| Death/succession transfer | Transfer control or settle principal/claims under lawful succession | Yes, only by law or valid estate process |
| Protocol contract migration | Move position state to an audited successor contract | No |

No other position transfer is approved.

## State-preservation invariant

Every approved continuity event must preserve exactly:

- position identifier or immutable predecessor link;
- original beneficial owner history;
- MIND principal amount and tier;
- activation and maturity timestamps;
- service and reward interval history;
- participation points, scores, evidence references, and appeals;
- reward-lot amounts, annual/epoch provenance, mode, fees, finalization, claim, dormancy, and expiry;
- claim-mode and switch history;
- early-exit requests, cancellation, reward cutoff, and cooldowns;
- maturity-bonus eligibility or permanent disqualification;
- governance snapshots, votes, delegation, and suspension status;
- finalized and dormant HEAVEN claims;
- legal holds and recovery disputes; and
- all public events and reconciliation references.

A migration cannot restart a lock, shorten maturity, extend a reward ceiling, regenerate a claim interval, erase a 2% weekly fee, restore a forfeited bonus, or enable double withdrawal.

## Owner-authorized wallet migration

Where the original wallet remains accessible, wallet migration requires:

1. a signed request from the current controlling wallet;
2. acceptance signed by the destination wallet;
3. an on-chain 7-day security delay;
4. public non-sensitive notice of the pending migration;
5. the ability for the source wallet to cancel before execution;
6. validation that the destination is not already controlling an incompatible or duplicate position;
7. sanctions, jurisdiction, smart-wallet compatibility, and security checks required by the approved implementation;
8. atomic transfer of control or an atomic disable-then-enable state transition; and
9. an event recording source, destination, position, request, execution, and policy version.

There is no protocol migration fee at launch; network gas remains payable.

A source-wallet signature is the primary path and must not require discretionary Foundation approval unless a specific legal or security condition applies.

## Pre-authorized guardian recovery

A participant may configure a recovery arrangement before loss of access.

The approved baseline is:

- three independently selected guardian addresses or approved recovery credentials;
- at least two of three guardians required to initiate recovery;
- destination-wallet acceptance;
- a 14-day public challenge delay;
- notice to the original wallet and registered privacy-safe contact channels;
- cancellation by the original wallet before execution;
- no guardian may unilaterally control the position;
- guardians cannot change the destination after approval without restarting the process;
- guardians cannot claim rewards, vote, request exit, or change mode during the recovery delay; and
- guardian configuration or replacement uses a separate 7-day delay.

A participant may decline guardian recovery. The interface must explain the risk of permanent access loss and alternative lawful succession options without forcing disclosure of private relationships on-chain.

Guardian identities beyond wallet addresses or commitments must remain private unless disclosure is legally required.

## Compromised-wallet fast protection

Where the current owner still has limited access and credibly suspects compromise, the owner may request an immediate protective freeze of position-management actions while using the owner-authorized migration path.

A protective freeze:

- blocks mode changes, claims, exits, delegation changes, guardian replacement, and migration execution except the approved recovery transaction;
- does not transfer principal or claims;
- cannot exceed the 7-day owner-authorized migration period without a documented dispute or legal hold;
- must not disable a safety action needed to prevent imminent theft; and
- requires audited transaction-ordering and front-running protections.

Exact smart-wallet and account-abstraction handling remains subject to technical design.

## Recovery without prior guardian configuration

Recovery without an accessible source wallet or pre-authorized guardian arrangement is exceptional and cannot be controlled by one administrator.

It requires at minimum:

1. a formal claim identifying the position and proposed destination;
2. strong evidence of beneficial ownership under a published rubric;
3. destination-wallet acceptance;
4. review by at least two independent authorized reviewers;
5. conflict declarations;
6. a legal and sanctions review where required;
7. notice through available privacy-safe channels;
8. a minimum 30-day challenge period;
9. a reasoned recorded outcome and appeal opportunity;
10. a timelocked or multi-party execution; and
11. protection against duplicate recovery, identity theft, bribery, and forged documents.

The original position remains frozen during a substantiated recovery dispute, but principal and finalized claims do not become treasury property.

No reviewer, Founder, Foundation officer, SatoshiLab.ai adviser, guardian, or governance delegate may unilaterally reassign a position.

## Beneficiary nomination

A participant may nominate one primary beneficiary and optional alternate beneficiary for continuity planning.

Nomination must:

- be voluntary and revocable while the participant retains capacity and access;
- use a signed on-chain commitment or privacy-preserving reference rather than publishing sensitive identity documents;
- identify whether the intent is position continuation, principal settlement, claim settlement, or a legally permitted combination;
- include beneficiary acceptance where practical;
- not override a valid will, court order, marital/property right, tax obligation, creditor right, sanctions rule, or applicable succession law;
- become effective only through the approved incapacity or death process; and
- never give the beneficiary present voting, claim, exit, or transfer power.

Changing a nomination uses a 7-day delay and notice to the participant. Beneficiary data follows MHE-008 and MHE-010 privacy and retention controls.

## Death and succession process

A claimed death/succession event requires:

1. evidence under the applicable jurisdiction and published evidence standard;
2. verification of executor, administrator, beneficiary, trustee, or other lawful authority;
3. at least two independent reviewers and conflict declarations;
4. sanctions, tax, succession, privacy, and jurisdiction review;
5. notice to recorded contacts and relevant claimants where lawful;
6. a minimum 30-day challenge period unless a binding legal order requires otherwise;
7. a reasoned decision and appeal route;
8. destination-wallet security and eligibility verification;
9. prevention of duplicate estate payment or position continuation; and
10. a complete public non-sensitive audit event.

No position or claim transfers merely because a person presents a private key, nomination screenshot, informal message, or unsupported family assertion.

## Succession outcomes

After review, the lawful outcome may be:

### Eligible position continuation

If the successor is legally and operationally eligible:

- the position may continue through a narrow succession migration;
- all original timestamps, tier, principal, reward lots, fee classes, claim history, exit history, and maturity eligibility state remain unchanged;
- finalized HEAVEN transfers or remains claimable as law and the approved estate instruction require;
- future participation scoring belongs only to the eligible successor after the effective succession timestamp;
- no rewards are created for the succession review period unless the task rules independently permit them; and
- governance rights resume prospectively only after eligibility and snapshot rules are satisfied.

### Principal and claim settlement

If continuation is not permitted or requested:

- 100% of the locked MIND units must be returned to the lawful estate or approved beneficiary destination through the authorized process;
- finalized HEAVEN claims must be preserved and settled according to law;
- unfinalized or incomplete reward intervals do not become guaranteed estate property;
- no maturity bonus is accelerated merely because of death or incapacity;
- a position already past maturity retains validly completed eligibility; and
- the position closes permanently after settlement.

### Ineligible or prohibited recipient

If a recipient cannot lawfully receive or control the position or tokens:

- the system must not bypass the restriction;
- assets remain segregated under the legally required custody, trust, remittance, or other process;
- the DAO cannot confiscate or redirect them for ordinary treasury use;
- lawful alternatives and appeal rights must be documented; and
- dormant/unclaimed treatment follows MHE-010 and applicable law.

## Incapacity process

A participant may pre-authorize an attorney, guardian, trustee, or other representative, subject to applicable law.

Incapacity handling requires evidence of authority and scope. An authorized representative may exercise only the powers legally granted and technically enabled. Appointment does not automatically transfer beneficial ownership.

A representative cannot self-deal, change a beneficiary for their own benefit, waive an appeal, restore maturity eligibility, erase claim fees, or redirect principal without lawful authority and conflict review.

Periodic review is required while an incapacity arrangement remains active.

## Governance and voting during continuity events

To prevent duplicate or disputed voting:

- a pending owner-authorized migration suspends new delegation changes but does not rewrite finalized snapshots;
- a contested recovery, incapacity, or succession claim suspends new position-based voting and delegation until resolved;
- the source and destination cannot both vote from the same position;
- governance eligibility resumes only prospectively after execution and any approved cooldown;
- prior valid votes remain part of finalized proposals;
- protocol addresses, recovery escrows, and dispute wallets receive no independent voting power; and
- unlocked MIND treatment follows the separately approved MIND governance mechanics.

Exact snapshot cooldown requires the governance implementation decision.

## Reward and claim handling during continuity events

- Finalized and dormant HEAVEN remains fully reserved.
- A routine owner-authorized migration does not change claimability or fee class.
- During a contested recovery or succession process, claims may be temporarily held to prevent theft or duplicate payment.
- A hold pauses the affected MHE-010 deadline for at least the duration of unavailability.
- Completed service intervals before the effective owner change may finalize for the proper prior owner or estate under published rules.
- Future participation belongs only to the successor after effective eligibility.
- No continuity event creates prorated rewards, accelerates maturity, or restores an excluded bonus.
- Claim destination changes must be explicit, auditable, and protected against replay.

## Anti-market and anti-collateral controls

The continuity system must not become a disguised transfer market.

Prohibited indicators include:

- repeated migrations between unrelated wallets without credible ownership continuity;
- consideration, sale contracts, marketplace listings, escrowed purchases, or advertised position prices;
- recovery guardians acting as brokers;
- beneficiary designations used for immediate commercial assignment;
- loans secured by control of the position;
- wrappers or NFTs representing economic ownership; and
- third-party custody arrangements designed to defeat non-transferability.

Suspected abuse follows published evidence, notice, suspension, and appeal rules. Abuse controls cannot seize principal without lawful authority.

## Privacy and recordkeeping

Sensitive recovery, incapacity, identity, family, medical, will, estate, and legal documents remain off-chain, encrypted, access-controlled, logged, and retained only as necessary.

Public records should contain only:

- position identifier;
- source/destination wallet or privacy-preserving reference where lawful;
- event type;
- request, challenge, and execution timestamps;
- policy version;
- outcome/reason code; and
- cryptographic commitment to restricted evidence where appropriate.

Before activation, publish controller/processor roles, legal basis, cross-border transfer safeguards, retention, deletion, breach response, data-subject rights, and complaint channels.

## Fees and costs

No DAO protocol fee is approved for:

- owner-authorized wallet migration;
- guardian recovery;
- incapacity administration;
- succession migration; or
- estate principal settlement.

Network gas, independent legal, probate, identity, notarization, translation, tax, or government costs may exist and must be disclosed before the relevant process. The DAO cannot secretly deduct such costs from MIND principal or finalized HEAVEN.

Any future service fee requires a separate prospective decision, cost justification, legal review, disclosure, and a hardship/accessibility process.

## Emergency and legal-order boundary

A binding lawful order may require a different outcome or timeline. The responsible operator must verify scope and jurisdiction, preserve records, minimize affected assets and rights, and provide notice or appeal where lawful.

Emergency authority may freeze a disputed operation temporarily but cannot:

- assign beneficial ownership;
- choose an heir;
- amend a will;
- seize assets for treasury;
- bypass a valid challenge;
- erase a finalized claim;
- mint or create compensation; or
- turn recovery into general administrator transferability.

## Required interface disclosures

Before nomination, guardian setup, migration, recovery, or succession action, show:

- purpose and whether beneficial ownership changes;
- source and proposed destination;
- security/challenge delay;
- guardian or reviewer threshold;
- actions temporarily suspended;
- state and rights preserved;
- privacy treatment;
- available cancellation or appeal;
- network and external costs;
- warnings against sale, collateralization, and sharing private keys;
- statement that nomination does not necessarily override succession law; and
- legal-review requirements.

No interface may call a beneficiary nomination an automatic inheritance guarantee.

## Security and audit requirements

Before activation, independently test and audit:

- source/destination authorization and typed-data domain separation;
- 7-, 14-, and 30-day delays;
- guardian setup, replacement, threshold, cancellation, and collusion cases;
- compromised-wallet front-running and transaction-order attacks;
- duplicate migration, recovery, inheritance, claim, vote, or principal withdrawal;
- preservation of every MHE-011 and MHE-012 state field;
- contested-event freezes and deadline extensions;
- smart-wallet signatures and account-abstraction compatibility;
- role separation and inability of one administrator to reassign a position;
- migration failure, rollback, pause, upgrade, and successor-contract reconciliation; and
- privacy, logging, retention, and access controls for restricted evidence.

Formal invariants should prove single position control, principal conservation, no duplicated voting/reward state, and no state reset through migration.

## Legal and communications boundary

Position non-transferability, recovery, beneficiary nomination, and inheritance procedures do not determine property, probate, trust, tax, securities, custody, insolvency, consumer, privacy, sanctions, family, or succession law.

The applicable legal wrapper and operating entity must obtain market-specific advice before offering any continuity service. Terms must identify governing law, responsible parties, evidence standards, delays, costs, rights, disputes, and limits.

Public materials must not claim guaranteed inheritance, automatic probate avoidance, anonymous legal ownership, tax-free transfer, creditor protection, or immunity from court orders.

## Matters still open

This decision does not approve:

- legal wrapper, governing law, estate/recovery operator, or reviewers;
- final evidence rubrics, identity provider, data processors, or retention periods;
- exact governance snapshot cooldown;
- smart-wallet and account-abstraction support;
- legal-order, sanctions, tax, probate, trust, or incapacity procedures by jurisdiction;
- contract code, storage, upgrade/migration method, roles, multisig, timelock, or deployment;
- position sale, ordinary assignment, wrapping, NFT issuance, collateralization, or marketplace;
- token issuance, position activation, distribution, or launch;
- legal, tax, privacy, consumer, succession, insolvency, or security approval.

## Effective scope

This decision resolves the policy architecture of OD-13 by approving active-position non-transferability and narrow continuity-only migration.

It resolves the policy architecture of OD-14 by approving voluntary beneficiary nomination, guardian recovery, lawful incapacity/succession review, eligible continuation or estate settlement, state preservation, and due process.

OD-13 and OD-14 remain open for implementation, operator appointments, governing law, jurisdiction-specific legal treatment, privacy review, security audit, and activation. OD-18, OD-22, OD-30, and governance snapshot mechanics remain open.
