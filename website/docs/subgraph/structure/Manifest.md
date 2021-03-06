---
id: manifest
title: The Subgraph Manifest
---

Here is an example of the TributeDAO subgraph manifest. For more details on how to define a subgraph manifest check out **[The Graph](https://thegraph.com/docs/define-a-subgraph#the-subgraph-manifest)** documentation:

```
specVersion: 0.0.2
description: Tribute DAO Framework Subgraph
repository: https://github.com/openlawteam/tribute-contracts
schema:
  file: ./schema.graphql
dataSources:
  # ====================================== DaoFactory ====================================
  - kind: ethereum/contract
    name: DaoFactory
    network: mainnet
    source:
      address: "0x7f51bAf0159De2951aA0C48b55169aE4Deba89d6"
      abi: DaoFactory
      startBlock: 13
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.4
      language: wasm/assemblyscript
      entities:
        - TributeDao
      abis:
        - name: DaoFactory
          file: ../build/contracts/DaoFactory.json
      eventHandlers:
        - event: DAOCreated(address,string)
          handler: handleDaoCreated
      file: ./mappings/core/dao-factory-mapping.ts

templates:
  # ====================================== DaoRegistry ====================================
  - kind: ethereum/contract
    name: DaoRegistry
    network: mainnet
    source:
      abi: DaoRegistry
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.4
      language: wasm/assemblyscript
      entities:
        - Adapter
        - Extension
        - Proposal
        - Member
        - Vote
      abis:
        - name: DaoRegistry
          file: ../build/contracts/DaoRegistry.json
        - name: OnboardingContract
          file: ../build/contracts/OnboardingContract.json
        - name: DistributeContract
          file: ../build/contracts/DistributeContract.json
        - name: TributeContract
          file: ../build/contracts/TributeContract.json
        - name: TributeNFTContract
          file: ../build/contracts/TributeNFTContract.json
        - name: ManagingContract
          file: ../build/contracts/ManagingContract.json
        - name: GuildKickContract
          file: ../build/contracts/GuildKickContract.json
        - name: FinancingContract
          file: ../build/contracts/FinancingContract.json
        - name: OffchainVotingContract
          file: ../build/contracts/OffchainVotingContract.json
        - name: VotingContract
          file: ../build/contracts/VotingContract.json
        - name: IVoting
          file: ../build/contracts/IVoting.json
        - name: ERC20Extension
          file: ../build/contracts/ERC20Extension.json
      eventHandlers:
        - event: SubmittedProposal(bytes32,uint256)
          handler: handleSubmittedProposal
        - event: SponsoredProposal(bytes32,uint256,address)
          handler: handleSponsoredProposal
        - event: ProcessedProposal(bytes32,uint256)
          handler: handleProcessedProposal
        - event: AdapterAdded(bytes32,address,uint256)
          handler: handleAdapterAdded
        - event: AdapterRemoved(bytes32)
          handler: handleAdapterRemoved
        - event: ExtensionAdded(bytes32,address)
          handler: handleExtensionAdded
        - event: ExtensionRemoved(bytes32)
          handler: handleExtensionRemoved
        - event: UpdateDelegateKey(address,address)
          handler: handleUpdateDelegateKey
        - event: ConfigurationUpdated(bytes32,uint256)
          handler: handleConfigurationUpdated
        - event: AddressConfigurationUpdated(bytes32,address)
          handler: handleAddressConfigurationUpdated
      file: ./mappings/core/dao-registry-mapping.ts
  # ====================================== BankExtension ====================================
  - kind: ethereum/contract
    name: BankExtension
    network: mainnet
    source:
      abi: BankExtension
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.4
      language: wasm/assemblyscript
      entities:
        - TokenHolder
        - Token
        - Member
      abis:
        - name: BankExtension
          file: ../build/contracts/BankExtension.json
        - name: ERC20
          file: ../build/contracts/ERC20.json
        - name: ERC20Extension
          file: ../build/contracts/ERC20Extension.json
      eventHandlers:
        - event: NewBalance(address,address,uint160)
          handler: handleNewBalance
        - event: Withdraw(address,address,uint160)
          handler: handleWithdraw
      file: ./mappings/extensions/bank-extension-mapping.ts
  # ====================================== NFTExtension ====================================
  - kind: ethereum/contract
    name: NFTExtension
    network: mainnet
    source:
      abi: NFTExtension
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.4
      language: wasm/assemblyscript
      entities:
        - NFTCollection
        - NFT
      abis:
        - name: NFTExtension
          file: ../build/contracts/NFTExtension.json
      eventHandlers:
        - event: CollectedNFT(address,uint256)
          handler: handleCollectedNFT
        - event: TransferredNFT(address,uint256,address,address)
          handler: handleTransferredNFT
        - event: WithdrawnNFT(address,uint256,address)
          handler: handleWithdrawnNFT
      file: ./mappings/extensions/nft-extension-mapping.ts
```
