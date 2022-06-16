//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Random is ReentrancyGuard {
    function randomNumber(string memory seed)
        external
        nonReentrant
        returns (uint256 random)
    {
        random =
            uint256(
                keccak256(
                    abi.encode(
                        block.number,
                        block.timestamp,
                        block.difficulty,
                        msg.sender,
                        block.gaslimit,
                        seed
                    )
                )
            ) %
            1000;

        uint256 maxSupply = type(uint160).max;

        console.log("maxSupply: ", maxSupply);
        console.log("Our random Number: ", random);
    }
}
