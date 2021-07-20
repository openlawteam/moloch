
  const signAndSendProposal = ({
    partialProposalData,
    adapterAddress,
    adapterName,
    type,
  }) => {
    try {

      const actionId = adapterAddress
        ? adapterAddress
        : adapterName
        ? getAdapterAddressFromContracts(adapterName, contracts)
        : BURN_ADDRESS;

      const {body, name, metadata, timestamp} = partialProposalData;

      const {data: snapshotSpace} = await getSpace(SNAPSHOT_HUB_API_URL, SPACE);

      const commonData = {
        name,
        body,
        metadata,
        token: snapshotSpace.token,
        space: SPACE,
      };

      // 1. Check proposal type and prepare appropriate message
      const message = (
        type === SnapshotType.draft
          ? await buildDraftMessage(commonData, SNAPSHOT_HUB_API_URL)
          : await buildProposalMessageHelper({
              ...commonData,
              timestamp,
            })
      );

      // 2. Prepare signing data. Snapshot and the contracts will verify this same data against the signature.
      const erc712Message =
        type === SnapshotType.draft
          ? prepareDraftMessage(message)
          : prepareProposalMessage(message as SnapshotProposalData);

      const {domain, types} = getDomainDefinition(
        {...erc712Message, type},
        daoRegistryAddress,
        actionId,
        DEFAULT_CHAIN
      );

      const dataToSign = JSON.stringify({
        types,
        domain,
        primaryType: PRIMARY_TYPE_ERC712,
        message: erc712Message,
      });

      // 3. Sign data
      const signature = await signMessage(provider, account, dataToSign);

      setProposalSignAndSendStatus(Web3TxStatus.PENDING);

      // 3. Send data to snapshot-hub
      const {data} = await submitMessage<SnapshotSubmitProposalReturn>(
        SNAPSHOT_HUB_API_URL,
        account,
        message,
        signature,
        {
          actionId: domain.actionId,
          chainId: domain.chainId,
          verifyingContract: domain.verifyingContract,
          message: erc712Message,
        }
      );

      const dataToReturn = {
        data: message,
        signature,
        uniqueId: data.uniqueId,
        uniqueIdDraft: data.uniqueIdDraft || '',
      };

      setProposalSignAndSendStatus(Web3TxStatus.FULFILLED);
      setProposalData(dataToReturn);

      return dataToReturn;
    } catch (error) {
      setProposalSignAndSendStatus(Web3TxStatus.REJECTED);
      setProposalSignAndSendError(error);

      throw error;
    }
  }