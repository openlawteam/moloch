import { Signer } from "@ethersproject/abstract-signer";
import fs from "fs";
// import path from "path";
import { ethers, waffle } from "hardhat";
import { expect } from "chai";
import { ApolloFetch, FetchResult } from "apollo-fetch";

import { config as dotenvConfig } from "dotenv";
import path, { resolve } from "path";
dotenvConfig({ path: resolve(__dirname, "./.env") });

// Contract Artifacts
import DaoRegistryArtifact from "../artifacts/contracts/core/DaoRegistry.sol/DaoRegistry.json";
import DaoFactoryArtifact from "../artifacts/contracts/core/DaoFactory.sol/DaoFactory.json";
import BankFactoryArtifact from "../artifacts/contracts/extensions/BankFactory.sol/BankFactory.json";
import BankExtensionArtifact from "../artifacts/contracts/extensions/Bank.sol/BankExtension.json";

// Contract Types
import { DaoRegistry } from "../typechain/DaoRegistry";
import { DaoFactory } from "../typechain/DaoFactory";
import { BankFactory } from "../typechain/BankFactory";
import { BankExtension } from "../typechain/BankExtension";

// Utils
import {
  waitForSubgraphToBeSynced,
  fetchSubgraph,
  exec,
} from "./helpers/utils";

// Subgraph Types
import { SubgraphResponseType, SubgraphResponseDaoType } from "./helpers/types";

// Queries
import { queryProposalById, queryDaoByName } from "./helpers/queries";

// misc
const { deployContract, deployMockContract } = waffle;
// const srcDir = path.join(__dirname, "..");

// Subgraph Name
const subgraphUser = "openlawteam";
const subgraphName = "moloch-v3";

// Yaml Creator
import { getYAML } from "./helpers/YAML";

// Test
describe("Dao and Bank Creation", function () {
  let daoRegistry: DaoRegistry;
  let daoFactory: DaoFactory;
  let bankFactory: BankFactory;
  let identityBank: BankExtension;

  let subgraph: ApolloFetch;
  let signers: Signer[];

  let syncDelay = 2000;

  before(async function (done) {
    this.timeout(0); // sometimes it takes a long time

    // console.log("Start ganache-cli...");
    // exec(
    //   `ganache-cli --port 7545 --networkId 1337 --blockTime 10 --mnemonic ${mnemonic}`
    // );
    // console.log("ganache-cli started.");

    // console.log("Build and deploy truffle contracts...");
    // // exec(`truffle deploy --network ganache`);
    // const test = run(`truffle deploy --network ganache`);
    // console.log("TEST", test);
    // console.log("Build and deployment complete.");

    signers = await ethers.getSigners();

    console.log("============= signers", await signers[0].getAddress());

    // Deploy contracts
    daoRegistry = (await deployContract(
      signers[0],
      DaoRegistryArtifact,
      []
    )) as DaoRegistry;

    console.log(
      "============= deployed daoRegistry.address",
      daoRegistry.address
    );

    daoFactory = (await deployContract(signers[0], DaoFactoryArtifact, [
      daoRegistry.address,
    ])) as DaoFactory;

    console.log(
      "============= deployed daoFactory.address",
      daoFactory.address
    );

    identityBank = (await deployContract(
      signers[0],
      BankExtensionArtifact,
      []
    )) as BankExtension;

    console.log("============= deployed identityBank", identityBank.address);

    bankFactory = (await deployContract(signers[0], BankFactoryArtifact, [
      identityBank.address,
    ])) as BankFactory;
    // await signers[0].getAddress(),

    console.log(
      "============= deployed bankFactory.address",
      bankFactory.address
    );

    // Write YAML file
    fs.writeFileSync(
      "subgraph.yaml",
      getYAML({
        daoFactoryAddress: daoFactory.address,
        bankFactoryAddress: bankFactory.address,
      })
    );

    // Create Subgraph Connection
    subgraph = fetchSubgraph(subgraphUser, subgraphName);

    // Build and Deploy Subgraph
    console.log("Build and deploy subgraph...");
    exec(`npx hardhat compile`);
    exec(`yarn codegen`);
    exec(`yarn build`);
    exec(`yarn create-local`);
    exec(`yarn deploy-local`);

    await waitForSubgraphToBeSynced(syncDelay);

    done();
  });

  after(async function (done) {
    process.stdout.write("Clean up, removing subgraph....");

    // exec(`yarn remove-local`);

    process.stdout.write("Clean up complete.");

    done();
  });

  it("indexes dao creation", async function (done) {
    const daoName = "test-dao";
    const creator = (await signers[1].getAddress()).toLocaleLowerCase();

    // Create a Dao
    await daoFactory.createDao(daoName, creator);

    await waitForSubgraphToBeSynced(syncDelay); //.catch();

    const query = await queryDaoByName(daoName);
    const response = (await subgraph({ query })) as FetchResult;
    const result = response.data as SubgraphResponseDaoType;

    console.log("======== result", result);
    // expect(result.molochv3S.id).to.be.equal(daoAddress);
    expect(result.molochv3S.name).to.be.equal(daoName.toString());

    done();
  });
});
