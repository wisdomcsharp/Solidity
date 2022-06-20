const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("isContract", function () {
  let paymentDeployed;

  beforeEach(async function () {
    const Payment = await hre.ethers.getContractFactory("Payment");
    const payment = await Payment.deploy();
    paymentDeployed = await payment.deployed();

    console.log("Testing, PaymentDeloyed on Kovan @ ", paymentDeployed.address)
  });

  it("1. Should check if the function called successfully.", async function () {
    let result = await paymentDeployed.fundMe({ value: 1 });
    assert.isOk(result, "FundMe Failed.")

  });


});
