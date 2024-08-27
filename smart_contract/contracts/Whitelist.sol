// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Whitelist {
    // Max total number of whitelisted addresses allowed
    uint8 public maxWhitelistAddresses;

    // Create a mapping of whitelistedAddresses
    mapping(address => bool) public whitelistAddresses; // by default addresses is set to false

    // to track how many addresses in whitelist
    uint8 public numAddressesWhitelisted;

    constructor(uint8 _maxAddresses) {
        maxWhitelistAddresses = _maxAddresses;
    }

    function addAddressToWhitelist() public {
        // check if the user is in whitelisted
        require(!whitelistAddresses[msg.sender], "User is already in whitelist!");
        // check if the total whitelist is not reached the max yet.
        require(numAddressesWhitelisted < maxWhitelistAddresses, "Max number of whitelisted is reached!");
        
        // set the user address to whitelist (set to true)
        whitelistAddresses[msg.sender] = true;

        // increase the number of numAddressesWhitelisted
        numAddressesWhitelisted++;
    }
}