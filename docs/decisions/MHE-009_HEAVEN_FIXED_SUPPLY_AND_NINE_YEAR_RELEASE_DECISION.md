# HEAVEN Fixed Supply, Allocation, and Nine-Year Release Decision

**Document ID:** MHE-009  
**Version:** 1.0  
**Status:** Approved economic architecture; inactive pending implementation, audit, and legal approval  
**Classification:** HEAVEN supply, allocation, release, and vault-control decision  
**Maintainer:** MindHeavenDAO Foundation  
**Approval authority:** Founder (pre-governance phase)  
**Approval date:** 2026-07-30  
**Last updated:** 2026-07-30  
**Related records:** MHE-004, MHE-005, MHE-006, MHE-007, and MHE-008  
**Related open decisions:** OD-06, OD-07, OD-08, OD-09, OD-23, and OD-29

## Approved objective

HEAVEN will use a fixed lifetime supply of 177,000,000 tokens and a nine-year slow-release architecture. The entire fixed supply will be created once at genesis into named, segregated, transparent, and appropriately locked vaults. The token contract will have no post-genesis mint function or discretionary inflation authority.

This decision approves supply, allocation, and maximum reward-reserve release ceilings. It does not activate a token, vault, reward epoch, public distribution, sale, liquidity program, or market.

## Fixed token properties

| Property | Approved rule |
|---|---|
| Token | HEAVEN |
| Primary purpose | Ecosystem utility and variable, pre-funded participation rewards |
| Network target | BNB Smart Chain initially, with practical EVM portability |
| Maximum and total genesis supply | 177,000,000 HEAVEN |
| Decimals | 18 |
| Minting | One genesis mint only; no future mint function |
| Inflation | None |
| Transfer tax | None |
| Automatic burn | None at launch |
| Re-mint after burn | Prohibited |
| Redemption or peg | None |
| Guaranteed market value, liquidity, or return | None |

No administrator, governance proposal, emergency role, upgrade, bridge, wrapper, vault, or migration may increase the 177,000,000 lifetime maximum.

## Approved genesis allocation

| Allocation | Share of total supply | HEAVEN amount | Initial control |
|---|---:|---:|---|
| Founder Node and verified service reward reserve | 60% | 106,200,000 | Nine-year locked release vault |
| Ecosystem and user programs | 12% | 21,240,000 | Locked program vault |
| DAO treasury | 10% | 17,700,000 | Timelocked treasury vault |
| Development and operations | 8% | 14,160,000 | Locked vesting/milestone vault |
| Partners and practitioners | 5% | 8,850,000 | Locked milestone/vesting vault |
| Emergency and community reserve | 5% | 8,850,000 | Restricted timelocked reserve |
| **Total** | **100%** | **177,000,000** | **Fully reconciled at genesis** |

There is no approved public-sale, market-making, exchange-listing, or protocol-owned liquidity allocation.

Allocation labels do not authorize immediate circulation. Each non-reward vault requires a separate prospective release, beneficiary, vesting, milestone, reporting, tax, conflict, and legal specification before any transfer.

SatoshiLab.ai remains MindHeavenDAO's technology advisory company. This role does not create an automatic HEAVEN entitlement. Any grant or service allocation to SatoshiLab.ai or another adviser must be transparently approved from the applicable development/operations or partner allocation under disclosed terms, conflicts, milestones, vesting, and legal review.

## Approved nine-year reward-reserve ceilings

The following percentages are portions of the full 177,000,000 lifetime supply, not percentages of the remaining reserve.

| Release year | Maximum share of total supply | Maximum HEAVEN release | Cumulative reward-reserve ceiling |
|---|---:|---:|---:|
| Year 1 | 12% | 21,240,000 | 21,240,000 |
| Year 2 | 10% | 17,700,000 | 38,940,000 |
| Year 3 | 8% | 14,160,000 | 53,100,000 |
| Year 4 | 7% | 12,390,000 | 65,490,000 |
| Year 5 | 6% | 10,620,000 | 76,110,000 |
| Year 6 | 5% | 8,850,000 | 84,960,000 |
| Year 7 | 4% | 7,080,000 | 92,040,000 |
| Year 8 | 4% | 7,080,000 | 99,120,000 |
| Year 9 | 4% | 7,080,000 | 106,200,000 |
| **Total** | **60%** | **106,200,000** | **106,200,000** |

Each annual amount is an absolute maximum release ceiling, not a target, entitlement, emission promise, guaranteed reward, APY, or obligation to distribute.

## Annual and epoch controls

- HEAVEN remains locked until transferred into a separately approved and pre-funded epoch vault.
- Every epoch must comply with MHE-004 through MHE-008.
- Governance may approve less than the available annual ceiling or zero.
- Total transfers from the reward reserve for a release year cannot exceed that year's ceiling.
- Epoch allocations within a year cannot collectively exceed the available annual ceiling or the amount actually deposited into epoch vaults.
- An active epoch cannot borrow from a future year's ceiling.
- Unused annual capacity remains locked and does not roll forward automatically.
- A separate prospective governance decision may authorize later use of previously unused reserve only if the lifetime 60% cap, then-current release controls, legal approval, funding evidence, and participant disclosures remain satisfied.
- The reward reserve cannot fund guaranteed liabilities, passive MIND-holding rewards, price support, liquidity support, redemption, loans, or unrelated treasury expenditure.
- Final payable rewards cannot exceed both the MHE-007 participant calculation and the HEAVEN actually available in the applicable epoch pool.

## Genesis and vault architecture

The approved architecture is:

1. deploy an immutable or narrowly controlled HEAVEN token with a hard-coded 177,000,000 genesis supply and no subsequent mint path;
2. atomically or verifiably allocate the entire supply to named vault contracts;
3. configure the nine-year reward reserve with immutable lifetime and annual maximums;
4. configure separate vaults for every 40% non-reward allocation;
5. place release authority behind approved multisig, timelock, role separation, per-period limits, and public events;
6. ensure an emergency pause cannot mint, accelerate vesting, redirect participant claims, seize user balances, or increase a ceiling; and
7. publish and independently verify token address, bytecode, vault addresses, balances, roles, schedules, and total reconciliation before activation.

The final technical specification must define the release-year start event, time standard, leap-year handling, rounding, dust, unused capacity, migration, emergency recovery, and permanent lock/burn treatment.

## Non-reward allocation boundaries

### Ecosystem and user programs — 12%

May fund approved product utility, education, community, access, grants, user programs, and genuine ecosystem services. It cannot be represented as guaranteed promotional yield or released without a program budget and eligibility rules.

### DAO treasury — 10%

Remains timelocked and non-circulating until a valid budget or proposal authorizes use. Treasury balances provide no basis for market-support, redemption, or reserve-value claims.

### Development and operations — 8%

Requires named work, milestones, deliverables, conflicts, IP terms, tax treatment, termination rules, and vesting or milestone release. No recipient is approved by this decision.

### Partners and practitioners — 5%

Requires documented ecosystem utility or services, due diligence, sanctions screening, measurable milestones, vesting, conflicts, and clawback/termination terms where lawful. No recipient is approved by this decision.

### Emergency and community reserve — 5%

May be used only under separately approved emergency or community-program rules. “Emergency” authority cannot bypass legal restrictions, fund price support, accelerate insider allocations, or rewrite finalized participant rewards.

## Circulating-supply standard

HEAVEN is circulating only when it is unlocked, transferable, and no longer held by a protocol-controlled locked vault, unactivated epoch vault, vesting contract, timelocked reserve, or other restricted allocation contract.

Reports must reconcile at least:

- fixed total supply;
- allocation by vault;
- locked and vested amounts;
- annual reward ceiling and unused capacity;
- epoch-funded, reserved, accrued, claimed, returned, and unclaimed amounts;
- treasury-controlled and program-controlled balances;
- circulating supply under the published definition; and
- permanently burned supply.

Reports must not imply that locked allocations are market demand, treasury backing, redemption reserves, or guaranteed future distributions.

## Burn boundary

No automatic transaction tax or automatic burn launches with HEAVEN. Governance may later approve a transparent permanent burn of eligible DAO-controlled HEAVEN through a separate timelocked decision.

Burned HEAVEN:

- cannot be re-minted;
- does not reopen lifetime minting capacity;
- does not increase any allocation or release ceiling;
- cannot include user balances or finalized participant claims; and
- cannot be marketed as guaranteeing scarcity-driven appreciation.

## Reconciliation of historical drafts

The MindHeavenDAO MIND Master Compensation Plan recorded a fixed 177,000,000 HEAVEN supply with a nine-year slow release. The earlier HEAVEN Buyback & Burn review draft contained a conflicting ten-year 60% schedule.

This decision resolves that conflict prospectively:

- the fixed maximum remains 177,000,000;
- the slow-release period is nine years;
- the 60% reward reserve uses the 12% / 10% / 8% / 7% / 6% / 5% / 4% / 4% / 4% schedule; and
- the earlier 12% / 10% / 8% / 7% / 6% / 5% / 4% / 3% / 3% / 2% ten-year schedule is superseded and must not be implemented.

Historical documents remain preserved for auditability and must be marked or interpreted as superseded where they conflict with MHE-009.

## Legal and communications boundary

A fixed cap and slow release do not establish that HEAVEN is legally compliant or outside securities, financial-promotion, consumer, payments, custody, money-transmission, tax, AML, sanctions, privacy, or other regulation.

Public materials must not describe:

- annual ceilings as promised emissions or guaranteed rewards;
- the fixed cap as assurance of appreciation;
- locked vaults as price support or asset backing;
- HEAVEN as redeemable for USD, MIND, treasury assets, revenue, equity, or debt; or
- future liquidity, listing, market value, income, profit, or return as assured.

MHE-006 jurisdiction-specific legal-readiness gates remain mandatory before any affected activation or distribution.

## Matters still open

This decision does not approve:

- release-year commencement or calendar definition;
- exact epoch budgets, actual rates, allocation factors, or service catalogs;
- vault code, administrators, multisig signers, or timelock delays;
- non-reward beneficiary lists, grant budgets, vesting, or milestones;
- unused annual capacity or unclaimed-reward destination;
- utility pricing, accepted payment assets, refunds, custody, or accounting;
- liquidity, exchange listing, bridging, wrapping, or market support;
- deployment, distribution, offering, jurisdiction, or launch.

## Effective scope

This decision resolves OD-06 by approving the 177,000,000 lifetime supply and genesis allocation. It partially resolves OD-07 and OD-08 by approving the nine-year maximum release schedule, genesis-locked reserve architecture, and pre-funded epoch boundary.

OD-07 and OD-08 remain open for implementation parameters, vault code, epoch budgets, administrators, security review, legal approval, and activation. OD-09 remains open for exact epoch parameters. OD-23 and OD-29 remain open.
