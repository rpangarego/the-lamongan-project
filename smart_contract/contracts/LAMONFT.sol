// contracts/LAMONFT.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract MyNFT is ERC1155, Ownable {
    uint256 public constant CHICKEN = 0;
    uint256 public constant FISH = 1;
    uint256 public constant CUMI = 2;
    uint256 public constant FRIEDRICE = 3;
    uint256 public constant PLAINRICE = 4;
    uint256 public constant ICEDTEA =5;
    uint256 public constant SOTO = 6;
    uint256 public constant SAMBAL = 7;
    uint256 public constant TAHU = 8;
    address owner;

    mapping(uint256 => string) private _uris;

    constructor() ERC1155("https://brown-gigantic-mouse-255.mypinata.cloud/ipfs/Qmb512rR9eC9SMpWNPFqh8UVvSrcArkBL1XaM1oawB38jA/{id}.json") public {
        owner = msg.sender;

        _mint(msg.sender, CHIKEN, 150, "");
        _mint(msg.sender, FISH, 150, "");
        _mint(msg.sender, CUMI, 150, "");
        _mint(msg.sender, FRIEDRICE, 250, "");
        _mint(msg.sender, PLAINRICE, 200, "");
        _mint(msg.sender, ICEDTEA, 500, "");
        _mint(msg.sender, SOTO, 50, "");
        _mint(msg.sender, SAMBAL, 500, "");
        _mint(msg.sender, TAHU, 250, "");
    }

    function uri(uint tokenId) override public view returns (string memory) {
        return(_uris[tokenId]);
    }

    function setTokenUri(uint256 tokenId, string memory uri) public onlyOwner {
        require(bytes(_uris[tokenId]).length == 0, "Cannot set uri twice");
        _uris[tokenId] = uri;
    }
}