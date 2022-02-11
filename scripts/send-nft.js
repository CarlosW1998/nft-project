require('dotenv').config();
const API_URL = process.env.API_URL;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json")
const contractAddress = "0x0c3913d75617eCaCBB0c811C5F9D10737764b977"

const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce
