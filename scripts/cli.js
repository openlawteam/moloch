#!/usr/bin/env node

require("dotenv").config({ path: "../.env" });
const fs = require("fs");
const { ethers } = require("ethers");
const { program } = require("commander");
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

const main = async () => {
  program.option(
    "-N, --network <rinkeby|mainnet|ropsten>",
    "The Ethereum Network which CLI should interact with"
  );

  program
    .command("list-contracts")
    .description("List all available contracts which CLI can interact with")
    .action(() => console.log(supportedContracts));

  program
    .command("managing proposal <proposalId> <address>")
    .description(
      "Submit a deposit of specified currency and amount from default eth account and return the resulting note. The currency is one of (ETH|DAI|cDAI|USDC|cUSDC|USDT). The amount depends on currency, see config.js file or visit https://tornado.cash."
    )
    .action(async (proposalId, address) => {
      const c = getContract(
        "ManagingContract",
        program.network,
        "0x636c63878c6ea0C44747644CB21205896939fa8c"
      );
      console.log(c);
    });

  try {
    await program.parseAsync(process.argv);
    process.exit(0);
  } catch (e) {
    console.log("Error:", e);
    process.exit(1);
  }
};

main();
