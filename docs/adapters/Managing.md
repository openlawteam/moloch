## Adapter description and scope
The Managing adapter manages proposal creation, sponsorship and processing of a new adapter including it's initial configuration.

Open questions:
Currently this adapter only supports adding and replacing adapters, but cannot delete.  Is this intended?

## Adapter workflow

Create module change request
- check that caller is valid member
- check that keys and values are equal length
- check that module address is valid
- check that flags don't overflow
- check that the module address is not reserved

- submit proposal
- store module data

Sponsor module change request
- check that caller is valid member

- sponsor proposal
- initiate vote

Process module change proposal
- check that caller is valid member
- check that proposal has not been processed
- check that proposal has been sponsored
- check that proposal has passed

- remove existing module
- for each key and value, set it in the configuration for this DAO
- add the adapter to the DAO
- process proposal

## Adapter state

### ProposalDetails
For each proposal created through the adapter, we keep track of the following information

#### applicant
The member who is initiating the module proposal.

#### moduleId
The ID of the module to add or replace.

### moduleAddress
The address of the new module contract.

### keys
The configuration keys for the module.

### values
The values to set for the module configuraition.

### flags
The ACL for the new module.

## Dependencies and interactions (internal / external)

## Functions description and assumptions / checks

### function createModuleChangeRequest(DaoRegistry dao, bytes32 proposalId, bytes32 moduleId, address moduleAddress, bytes32[] calldata keys, uint256[] calldata values, uint256 _flags)

Creates a proposal to add/replace the given module with a new version including configuration and flags.

### function sponsorProposal(DaoRegistry dao, bytes32 proposalId, bytes calldata data)

Sponsors a proposal to add/replace a module.

### function processProposal(DaoRegistry dao, bytes32 proposalId)

Processes a proposal to add/replace a module.