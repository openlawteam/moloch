import {
  NFTExtension,
  CollectedNFT,
  RegisteredNFT,
  ReturnedNFT,
  TransferredNFT,
} from "../generated/templates/NFTExtension/NFTExtension";
import { NFTExtension } from "../generated/templates/NFTExtension/NFTExtension";
import { ERC721 } from "../generated/templates/NFTExtension/ERC721";
import { NFT, NFTCollection, NFTTransfer } from "../generated/schema";
// import { NFT_EXTENSION_ID } from "./helpers/constants";
import { Address, BigInt, log } from "@graphprotocol/graph-ts";

function loadOrCreateNFT(extensionAddress: Address, nftAddress: Address): NFT {
  // get nft extension bindings
  let registry = NFTExtension.bind(extensionAddress);
  let daoAddress = registry.dao();

  let nftId = daoAddress.toHex().concat("-nft-").concat(nftAddress.toHex());

  let nft = NFT.load(nftId);

  if (nft == null) {
    nft = new NFT(nftId);
  }

  return nft as NFT;
}

export function handleCollectedNFT(event: CollectedNFT): void {
  log.info(
    "================ CollectedNFT event fired. nftAddr: {}, nftTokenId: {}",
    [event.params.nftAddr.toHexString(), event.params.nftTokenId.toString()]
  );
}

export function handleRegisteredNFT(event: RegisteredNFT): void {
  log.info("================ RegisteredNFT event fired. nftAddr: {}", [
    event.params.nftAddr.toHexString(),
  ]);
}

export function handleReturnedNFT(event: ReturnedNFT): void {
  log.info(
    "================ ReturnedNFT event fired. newOwner: {}, nftAddr: {}, nftTokenId: {}",
    [
      event.params.newOwner.toHexString(),
      event.params.nftAddr.toHexString(),
      event.params.nftTokenId.toString(),
    ]
  );
}

export function handleTransferredNFT(event: TransferredNFT): void {
  log.info(
    "================ TransferredNFT event fired. nftAddr: {}, nftTokenId: {}",
    [event.params.nftAddr.toHexString(), event.params.nftTokenId.toString()]
  );

  let nft = loadOrCreateNFT(event.address, event.params.nftAddr);

  nft.nftAddress = event.params.nftAddr;
  nft.owner = event.transaction.from;

  // get additional ERC721 info
  let erc721Registry = ERC721.bind(event.params.nftAddr);

  nft.name = erc721Registry.name();
  nft.symbol = erc721Registry.symbol();
  nft.tokenId = event.params.nftTokenId;

  let nftRegistry = NFTExtension.bind(event.address);
  let daoAddress = nftRegistry.dao();

  // add to the daos nft collection
  let nftCollectionId = daoAddress
    .toHex()
    .concat("-nftcollection-")
    .concat(event.address.toHex());

  let nftCollection = NFTCollection.load(nftCollectionId);

  if (nftCollection != null) {
    // add to collection
    nft.nftCollection = nftCollectionId;
  }

  nft.save();

  let nftTransferId = event.params.nftAddr
    .toHex()
    .concat("-nfttransfer-")
    .concat(event.params.nftTokenId.toString());

  let nftTransfer = NFTTransfer.load(nftTransferId);
  if (nftTransfer == null) {
    nftTransfer = new NFTTransfer(nftTransferId);
  }

  nftTransfer.from = event.transaction.from;
  // nftTransfer.to = event.transaction.to;
  nftTransfer.transferAt = event.block.timestamp;
  nftTransfer.transaction = event.transaction.hash;
  nftTransfer.nft = nft.id;

  nftTransfer.save();
}
