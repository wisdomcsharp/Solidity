pragma solidity ^0.8.0;

interface ISimpleStore {
    function setUsingStorage(uint256 _itemIdx, uint256 _val) external;
}
