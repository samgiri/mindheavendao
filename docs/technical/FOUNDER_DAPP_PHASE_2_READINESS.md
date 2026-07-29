# Founder dApp Phase 2 — Deployment Readiness

**Document ID:** MHO-001  
**Version:** 0.1  
**Status:** Implementation draft  
**Last updated:** 2026-07-30  
**Application route:** `/system`  
**Technology advisory:** SatoshiLab.ai

## Purpose

This record separates the completed Founder dApp product interface from blockchain functions that cannot be activated until governance, legal, economic, and security requirements are satisfied.

## Phase 2 interface scope

The interface includes:

- responsive Dashboard and launch-readiness board;
- privacy-first wallet or local demo identity;
- BNB Smart Chain Testnet detection and network-switch flow;
- five-tier Founder Node comparison and safe activation path;
- ordinary-governance baseline and three-choice voting simulation;
- contribution ledger and submission preview;
- reward-readiness and funded-liability safeguards;
- treasury policy and deployment-control register;
- GitHub-backed document center;
- explicit demo, testnet, and non-financial status language; and
- desktop, tablet, and mobile layouts.

## Current operating state

| Capability | State | Effect |
| --- | --- | --- |
| Product UI | Implemented | Full interface available at `/system` |
| Wallet connection | Preview | Reads address and chain only; requests no signature or transaction |
| Demo identity | Implemented | Browser-local identity for walkthroughs |
| Network switching | Implemented | BNB Smart Chain Testnet request only |
| Governance voting | Simulation | Browser-local and has no on-chain or legal effect |
| Contribution submission | Simulation | No server upload or personal evidence storage |
| Founder Node opening | Disabled | Requires approved terms and audited contracts |
| Reward claims | Disabled | Requires approved HEAVEN economics and funded vault |
| Treasury operations | Disabled | No treasury wallet or member funds connected |
| Mainnet | Disabled | Requires a separate recorded activation decision |

## Required decisions before contract integration

- exact MIND required for each Founder Node tier;
- payment and reference-price methodology;
- MIND transferability and allocation controls;
- Founder Node transfer, inheritance, early-withdrawal, and emergency-withdrawal rules;
- HEAVEN total supply, emissions, funding, and utility;
- staking-reward formula and funded-liability limits;
- referral eligible base and qualification definition;
- MindGlobal contribution verification and point rules;
- voting mechanics, materiality thresholds, emergency authority, and founder transition;
- foundation jurisdiction and DAO legal wrapper;
- data privacy model; and
- upgrade, audit, incident, and signer policies.

## Contract integration gates

No executable contract action should be enabled until:

1. the controlling specification is approved and versioned;
2. legal and tax review covers intended launch markets;
3. economic liabilities are modeled and bounded;
4. contracts pass unit, integration, fuzz, and invariant tests;
5. independent audit findings are remediated;
6. testnet addresses and ABIs are recorded;
7. multisig, timelock, and emergency roles are verified;
8. the interface displays the correct chain, addresses, and transaction simulation;
9. incident response and pause drills are completed; and
10. governance records a separate activation decision.

## Security boundaries

The interface must never:

- request a seed phrase or private key;
- silently request token approval or payment;
- present demo balances as real;
- imply guaranteed yield, rewards, appreciation, or liquidity;
- expose sensitive personal or health information on-chain;
- enable a contract whose address and audit status are not displayed;
- treat SatoshiLab.ai advisory review as a substitute for independent audit or governance approval; or
- activate mainnet from a documentation or UI-only approval.

## Verification

Phase 2 should pass:

- TypeScript and production build;
- application regression tests;
- responsive visual review;
- keyboard and focus review;
- wallet connection cancellation handling;
- wrong-network and network-switch handling;
- no-provider demo-mode handling; and
- final Vercel preview inspection.

## Change history

- **0.1 — 2026-07-30:** Initial Phase 2 interface and integration-readiness record.
