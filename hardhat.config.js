/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("./scripts/deploy.js");
require("./scripts/mint.js");

const { ALCHEMY_KEY, ACCOUNT_PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
	solidity: "0.8.19",
	defaultNetwork: "goerli",
	networks: {
		hardhat: {},
		goerli: {
			url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_KEY}`,
			accounts: [`0x${ACCOUNT_PRIVATE_KEY}`],
		},
	},
	etherscan: {
		apiKey: ETHERSCAN_API_KEY,
	},
};
