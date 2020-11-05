// Whole-script strict mode syntax
"use strict";

/**
MIT License

Copyright (c) 2020 Openlaw

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
const {
  sha3,
  toBN,
	fromUtf8,
  advanceTime,
  createDao,
  GUILD,
  TOTAL,
  ETH_TOKEN,
  ManagingContract,
  VotingContract,
  OnboardingContract,
	ConfigurationContract
} = require("../../utils/DaoFactory.js");

contract("LAOLAND - Configuration Adapter", async (accounts) => {
  it("should be possible to set a single configuration parameter", async () => {
    const myAccount = accounts[1];

    //Create the new DAO
    let dao = await createDao(myAccount);
		let key = sha3("key")

    //Submit a new configuration proposal
    let configurationContract = await dao.getAdapterAddress(sha3("configuration"));
    let configuration = await ConfigurationContract.at(configurationContract);
		await configuration.submitConfigurationProposal(
			dao.address,
			[key],
			[toBN("10")],
      fromUtf8(""),
			{from: myAccount, gasPrice: toBN("0")}
		);

		let value = await dao.getConfiguration(key);
		assert.equal(value.toString, toBN("0").toString);

    //Sponsor the new proposal, vote and process it
    await configuration.sponsorProposal(dao.address, 0, [], {
      from: myAccount,
      gasPrice: toBN("0"),
    });

    let votingContract = await dao.getAdapterAddress(sha3("voting"));
    let voting = await VotingContract.at(votingContract);

		value = await dao.getConfiguration(key);
		assert.equal(value.toString, toBN("0").toString);
    await voting.submitVote(dao.address, 0, 1, {
      from: myAccount,
      gasPrice: toBN("0"),
    });

    await advanceTime(10000);
    await configuration.processProposal(dao.address, 0, {
      from: myAccount,
      gasPrice: toBN("0"),
    });

		value = await dao.getConfiguration(key);
		assert.equal(value.toString, toBN("10").toString);
  });
});
