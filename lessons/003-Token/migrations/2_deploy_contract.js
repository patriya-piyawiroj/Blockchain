var BoomieToken = artifacts.require("BoomieToken");

module.exports = function(deployer) {
  deployer.deploy(BoomieToken, "BoomieToken", "BOOM");
};