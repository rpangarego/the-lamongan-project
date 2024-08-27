const hardhat = require("hardhat");

async function main() {
  const [deployer] = await hardhat.ethers.getSigners();

  console.log("Deploying contracts with the account: ", deployer.address);

  const whitelistContract = await hardhat.ethers.getContractFactory(
    "Whitelist"
  );

  // Deploy the contract
  // 150 is the maximum number of whitelisted addresses allowed
  const deployedWhitelistContract = await whitelistContract.deploy(150);

  console.log("Contract deployed at: ", deployedWhitelistContract.target);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
