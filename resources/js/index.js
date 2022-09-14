import { ethers } from "./ethers-5.6.esm.min.js"

const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")
connectButton.onclick = connect
fundButton.onclick = fund

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" })
            console.log("Connected....")
            console.log(ethers)
        } catch (error) {
            console.log(error)
        }
        document.getElementById("connectButton").innerHTML = "Connected"
        const accounts = await ethereum.request({ method: "eth_accounts" })
        console.log(accounts)
    } else {
        document.getElementById("connectButton").innerHTML =
            "Please install MetaMask"
    }
}

// Fund function
async function fund(ethAmount) {
    console.log(`Funding with ${ethAmount}...`)
    if (typeof window.ethereum !== "undefined") {
        // provider / connection to the blockchain
        // signer / wallet / someone with some gas
        // contract that we are interacting with
    }
}
// Withdraw function
