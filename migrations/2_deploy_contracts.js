var FundingMXC = artifacts.require("FundingMXC");

module.exports = async function (deployer) {
  await deployer.deploy(FundingMXC);
};