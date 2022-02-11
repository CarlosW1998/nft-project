require('dotenv').config();
const pinataSDK = require('@pinata/sdk');
const fs = require('fs');

var rand = function() {
    return Math.random().toString(36).substr(2); // remove `0.`
};
var token = function() {
    return rand() + rand(); // to make it longer
};

const API_PINHATA_KEY = process.env.API_PINHATA_KEY;
const API_PINHATA_SECRET = process.env.API_PINHATA_SECRET;

async function save_ipfs_metadata(ipfs_path){
    const pinata = pinataSDK(API_PINHATA_KEY, API_PINHATA_SECRET);

    hash_name = token();
    
    metadata = {
        "description": "A register from" + hash_name,
        "image": "https://gateway.pinata.cloud/ipfs/" + ipfs_path,
        "name": hash_name
    }
    file_path = ("./storage/" + hash_name + ".json")

    const content = JSON.stringify(metadata)

    fs.writeFileSync(file_path, content, err => {
    if (err) {
        console.error(err)
        return
    }
    })

    const readableStreamForFile = fs.createReadStream(file_path);
    const options = {
        pinataMetadata: {
            name: token(),
        }
    };
    pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
        //handle results here
        console.log(result);
    }).catch((err) => {
        //handle error here
        console.log(err);
    });

}

async function save_ipfs_file(file_path){
    const pinata = pinataSDK(API_PINHATA_KEY, API_PINHATA_SECRET);
    
    const readableStreamForFile = fs.createReadStream(file_path);
    const options = {
        pinataMetadata: {
            name: token(),
        }
    };
    pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
        //handle results here
        console.log(result);
    }).catch((err) => {
        //handle error here
        console.log(err);
    });
}
 
