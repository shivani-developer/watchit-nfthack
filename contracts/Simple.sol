// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Simple {
    string public name = "ETHGlobal";

    function setName(string memory _name) public {
        name = _name;
    }
}