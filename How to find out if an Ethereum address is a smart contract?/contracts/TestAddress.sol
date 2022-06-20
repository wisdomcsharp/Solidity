// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract TestAddress {
    // expect(await chainlink.getPrice()).to.be.an("object");

    function isContract(address account) public view returns (bool) {
        // This method relies on extcodesize/address.code.length, which returns 0
        return account.code.length > 0;
    }
}
