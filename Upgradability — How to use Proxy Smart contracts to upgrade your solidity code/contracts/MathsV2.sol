//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract MathsV2 {
    function initialize() external {}

    function sub(uint256 _a, uint256 _b) public pure returns (uint256 result) {
        result = _a - _b;
    }
}
