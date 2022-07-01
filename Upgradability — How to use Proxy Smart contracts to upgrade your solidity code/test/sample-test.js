const { expect, assert } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("isContract", function () {

  let MathsV1, MathsV2;


  it("1. It should deploy MathsV1", async function () {
    const _MathsV1 = await hre.ethers.getContractFactory("MathsV1");

    MathsV1 = await upgrades.deployProxy(_MathsV1);
    MathsV1 = await MathsV1.deployed();
    assert.ok(MathsV1);
    console.log("MathsV1 Proxy Deployed at ", MathsV1.address);
    console.log("MathsV1 Implementation Deployed at ", await upgrades.erc1967.getImplementationAddress(MathsV1.address));
  });

  it("2. Output should be equal to 4", async function () {
    let mathsV1Result = await MathsV1.add(2, 2);
    expect(mathsV1Result).to.be.equal(4);
  });

  it("3. It should upgrade MathsV1 to MathsV2", async function () {
    const _MathsV2 = await ethers.getContractFactory("MathsV2");
    MathsV2 = await upgrades.upgradeProxy(MathsV1.address, _MathsV2);
    await MathsV2.deployed();
    assert.ok(MathsV2)
    console.log("MathsV2 Proxy Deployed at ", MathsV2.address);
    console.log("MathsV2 Implementation Deployed at ", await upgrades.erc1967.getImplementationAddress(MathsV2.address));
  });

  it("4. Output should be equal to 0", async function () {
    let mathsV2Result = await MathsV2.sub(2, 2);
    expect(mathsV2Result).to.be.equal(0);
  });

  it("5. Function should fail when making requests to V1 functions", async function () {
    try {
      let mathsV1Result = await MathsV1.add(2, 2);
    } catch (error) {
      expect(error).to.be.an("error");
    }

  });
});
