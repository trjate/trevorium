var Trevorium = artifacts.require("./Trevorium.sol");

module.exports = function (deployer) {
  deployer.deploy(Trevorium, 1000000, 'Trevorium', 'TREV');
};
