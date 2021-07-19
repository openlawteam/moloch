#!/usr/bin/env node

require("dotenv").config({ path: "../.env" });
const fs = require("fs");
const { ethers } = require("ethers");
const { Command } = require("commander");
const { sha3 } = require("../utils/ContractUtil");
const program = new Command();
program.version("0.0.1");

const supportedContracts = ["ManagingContract"];

const openWallet = (provider) => {
  const mnemonic = process.env.TRUFFLE_MNEMONIC;
  if (!mnemonic) throw Error("Missing env var: TRUFFLE_MNEMONIC");

  // The Wallet class inherits Signer and can sign transactions
  // and messages using a private key as a standard Externally Owned Account (EOA).
  const wallet = ethers.Wallet.fromMnemonic(mnemonic);
  return wallet.connect(provider);
};

const getProvider = (network) => {
  return ethers.getDefaultProvider(network, {
    infura: process.env.INFURA_KEY,
    alchemy: process.env.ALCHEMY_KEY,
  });
};

const getABI = (contractName) => {
  const contract = JSON.parse(
    fs.readFileSync(`../build/contracts/${contractName}.json`, "utf8")
  );
  return contract.abi;
};

const attachContract = (address, abi, wallet) => {
  const contract = new ethers.Contract(address, abi, wallet);
  return contract.connect(wallet);
};

const getContract = (name, network, address) => {
  return attachContract(
    address,
    getABI(name),
    openWallet(getProvider(network))
  );
};

const main = () => {
  program.option(
    "-N, --network <mainnet|rinkeby|ropsten|ganache>",
    "The Ethereum Network which CLI should interact with."
  );
  program.option(
    "-D, --dao <0x...>",
    "The DAO address which CLI should interact with."
  );
  program.option(
    "-C, --contract <contract>",
    "The 42 digits startign with 0x contract address which CLI should interact with."
  );

  program
    .command("list")
    .description("List all available contracts which CLI can interact with.")
    .action(() => supportedContracts.map((c) => console.log(c)));

  program
    .command(
      "adapter-add <proposalId> <adapterId> <adapterAddress> <keys> <values> [data]"
    )
    .description("Submit a new managing proposal...")
    .action(
      async (proposalId, adapterName, adapterAddress, keys, values, data) => {
        const opts = program.opts();
        console.log(`::: New managing proposal :::`);
        console.log(
          `\tNetwork:\t\t${opts.network}\n\tDAO:\t\t${opts.dao}`
        );
        console.log(`\tManagingContract:\t${opts.contract}`);
        console.log(
          `\tProposalId: ${proposalId},\tAdapter: ${adapterName}@${adapterAddress}`
        );
        console.log(`\tKeys: ${keys},\tValues: ${values},\tData: ${data}`);
        
        const managing = getContract(
          "ManagingContract",
          opts.network,
          opts.contract
        );
        const { flags } = entryDao(
          adapterName,
          { address: adapterAddress },
          {
            SUBMIT_PROPOSAL: true,
            REPLACE_ADAPTER: true,
          }
        );
        await managing.submitProposal(
          daoAddress,
          toHex(proposalId),
          {
            adapterId: sha3(adapterName),
            adapterAddress: adapterAddress,
            flags,
          },
          [], // 3 keys
          [], // 0 values
          []
        );
      }
    );

  program
    .parseAsync(process.argv)
    .then(() => process.exit(0))
    .catch((e) => {
      console.log("Error:", e);
      process.exit(1);
    });
};

main();
