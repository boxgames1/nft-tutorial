### NFT Tutorial

This is a tutorial for creating NFTs on the Ethereum blockchain. It is based on the [ERC721](https://eips.ethereum.org/EIPS/eip-721) standard. The tutorial is written in JS and solidity.

### Setup

- Install deps: `yarn` or `npm install`
- Add `.env` file with `NETWORK`, `NFT_CONTRACT_ADDRESS`, `ALCHEMY_KEY` and `ACCOUNT_PRIVATE_KEY`
  - Get your Alchemy API key [here](https://docs.alchemy.com/alchemy/introduction/getting-started)
  - Get your account private key from your MetaMask wallet by following the instructions [here](https://metamask.zendesk.com/hc/en-us/articles/360015289632)
  - Get `NFT_CONTRACT_ADDRESS` by deploying the contract. Get hash from the results.
- Compile contract: `yarn compile` or `npm run compile`
- Deploy contract: `yarn deploy` or `npm run deploy`
- Check account balance: `yarn balance` or `npm run balance`
- Mint token: `yarn mint` or `npm run mint`

