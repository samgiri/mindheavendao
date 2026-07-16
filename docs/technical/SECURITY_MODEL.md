# Security Model

## Protected assets

MIND principal, HEAVEN funding, reward liabilities, voting integrity, immutable referral relationships, finalized pool periods, role keys, and privacy-sensitive off-chain evidence.

## Controls

- audited standard libraries and minimal custom custody code;
- fixed MIND supply and explicit protected invariants;
- least privilege, separated roles, threshold multisig, signer rotation, hardware wallets;
- timelocked upgrades and treasury actions;
- pull payments, reentrancy protection, safe transfers, checks-effects-interactions;
- funded-liability accounting and on-chain reconciliation views;
- narrow subsystem pauses with public events;
- tests, static analysis, fuzzing, invariant tests, independent audits, bug bounty;
- monitored events and incident response runbooks.

## Emergency model

Emergency responders may pause affected entry points and cancel unsafe queued actions under approved rules. They may not mint MIND, redirect user principal, rewrite referral parents, alter finalized pool periods, or exceed funded HEAVEN. Every emergency action requires an event, rationale, multisig confirmation where feasible, review deadline, and public postmortem.

## Residual trust

Launch depends on multisig signers, off-chain qualifiers/allocators, front-end integrity, and legal operations. These dependencies must be visible and progressively reduced or made contestable.

