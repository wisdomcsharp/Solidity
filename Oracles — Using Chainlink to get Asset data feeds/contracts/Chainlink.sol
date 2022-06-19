// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./Interfaces/AggregatorV3Interface.sol";

contract Chainlink {
    AggregatorV3Interface ETHUSD =
        AggregatorV3Interface(0x9326BFA02ADD2366b30bacB125260Af641031331);

    function getPrice() public view returns (int256) {
        (, int256 answer, , , ) = ETHUSD.latestRoundData();

        return answer;
    }
}
