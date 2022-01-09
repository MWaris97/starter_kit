const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

module.exports = async function(deployer) {
  await deployer.deploy(Token);
  const token = await Token.deployed();

  await   deployer.deploy(EthSwap);
  const ethSwap = await EthSwap.deployed();

  // get total supply of Token
  await token.totalSupply().then(async (supply) => {
    // Transfer all the tokens
    await token.transfer(ethSwap.address, supply.toString());
  });

};
