// SPDX-License-Identifier: MIT

// pragma solidity ^0.8.7;

// import "ntf.sol";

// contract SaleNftToken {
//   MintNftToken public mintNftTokenAddress;

//   constructor (address _mintNftTokenAddress) {
//     mintNftTokenAddress = MintNftToken(_mintNftTokenAddress);
//   }

//   function setForSaleAnimalToken(uint256 _tokenId, uint256 _price) public {
//     address nftTokenOwner = mintNftTokenAddress.ownerOf(_tokenId);

//     mapping(uint256 => uint256) public nftTokenPrices;

//     require(nftTokenOwner === msg.sneder, "Caller is not Token Owner.");
//     require(_price > 0, "Price is zero or lower.");
//     require(nftTokenPrices[_tokenId] == 0, "This Token is already on sale");
//     require(mintNftTokenAddress.isApproveForAll(nftTokenOwner, address(this)),);
//   }
// }