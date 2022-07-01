//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract MathsV1 {
    function initialize() external {}

    function add(uint256 _a, uint256 _b) public pure returns (uint256 result) {
        result = _a + _b;
    }
}
