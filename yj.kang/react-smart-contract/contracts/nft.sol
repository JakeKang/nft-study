
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MintNftToken is ERC721Enumerable {
  using Counters for Counters.Counter; // openzeppelin 에서 제공 하는 카운터 (Id 발행 수 자동 입력)

  Counters.Counter private _tokenIds;

  // constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {} // contract가 배포 될때 실행 (name, symbol 변수 값으로 지정)
  constructor() ERC721('zipida', 'zipida_symbol') {}

  mapping(uint => string) public tokenURIs; // uint -> string return

  function tokenURI(uint _tokenId) override public view returns (string memory) { // ERC721 스펙에 있는 함수 override 필수
    return tokenURIs[_tokenId]; // 토큰 ID를 넣으면 IPFS에서 전달받은 URL을 return
  }

  // minting
  function mintNFT(string memory _tokenURI) public returns (uint256) {
    _tokenIds.increment();
    // id 순차 증가
    uint256 tokenId = _tokenIds.current();
    tokenURIs[tokenId] = _tokenURI; // IPFS에서 발행한 URL을 넣으면 토큰 고유 ID를 반환

    _mint(msg.sender, tokenId); // metamask 같은 지갑의 sender address

    return tokenId;
  }
}

struct NftTokenData {
  uint256 nftTokenId;
  string nftTokenURI;
}

// Nft Token Get
function getNftTokens(address _nftTokenOwner) view public returns (NftTokenData[] memory) {
  uint256 balanceLength = balanceOf(_nftTokenOwner);

  NftTokenData[] memory nftTokenData = new NftTokenData[](balanceLength);

  for(uint256 i = 0; i < balanceLength; i++) {
    uint256 nftTokenId = tokenOfOwnerByIndex(_nftTokenOwner, i);
    string memory nftTokenURI = tokenURI(nftTokenId);
    nftTokenData[i] = NftToKenData(nftTokenId, nftTokenURI);
  }
}