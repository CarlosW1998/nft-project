async function main() {
    const MyNFT = await ethers.getContractFactory("MyNFT")
    
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy()
    console.log("Contract deployed to address:", myNFT.address)
}
main()