const hre = require("hardhat");
async function main() {
  const MyToken = await hre.ethers.getContractFactory("VibraniumToken");
  const myToken = await MyToken.deploy(100000000, 50);
  await myToken.deployed();

  console.log("Vibranium token deployed: ", myToken.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});