const { contracts } = require("./contracts.config");

const disabled = [
  // "ERC20Minter",
];

const ganacheContracts = contracts.map((c) => {
  if (disabled.find((e) => e === c.name)) {
    return { ...c, enabled: false };
  }
  return c;
});

module.exports = { contracts: ganacheContracts };
