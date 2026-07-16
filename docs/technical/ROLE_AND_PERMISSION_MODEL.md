# Role and Permission Model

| Role | Proposed powers | Explicit exclusions |
|---|---|---|
| Token holders/delegates | propose/vote when eligible | direct execution, retroactive changes |
| Governor | queue approved actions | bypass timelock |
| Timelock | execute mature operations | originate arbitrary policy |
| Launch multisig | bounded administration/upgrades | unilateral reward seizure or MIND minting |
| Emergency pauser | pause named functions | transfer funds, alter finalized data |
| Referral qualifier | attest qualification | change parent, set rate, withdraw rewards |
| Pool allocator | publish approved point commitment | change finalized period, custody funds |
| Pool finalizer | finalize verified period | edit weights or allocation after finalization |
| Vault module | reserve approved HEAVEN | exceed available funding |
| Treasury | governed custody/disbursement | spend reserved reward liabilities |

All administrative roles need grant, acceptance, rotation, revocation, and event procedures. Governance should eventually control role administration through the timelock. No externally owned account should be a sole permanent administrator.

