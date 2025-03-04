import abi from '../abis/src/contracts/Mint.sol/Mint.json'
import address from '../abis/contractAddress.json'
import { ethers } from 'ethers'
import { getGlobalState, setGlobalState } from '../store'



const { ethereum } = window
const contractAddress = address.address
const contractAbi = abi.abi
const opensea_uri = `https://testnets.opensea.io/assets/goerli/${contractAddress}/`

const reportError = (error) => {
    console.log(error.message)
    throw new Error('No ethereum object.')
}


const getEthereumContract = () => {
    const connectedAccount = getGlobalState('connectedAccount')
    if (connectedAccount) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, contractAbi, signer)
        return contract
    } else {
        getGlobalState('contract')
    }
}


const isWalletConnected = async () => {
    try {
        if (!ethereum) return alert('Please install Metamask')
        const accounts = await ethereum.request({ method: 'eth_accounts' })

        window.ethereum.on('chainChanged', (chainId) => {
            window.location.reload()
        })

        window.ethereum.on('accountsChanged', async () => {
            setGlobalState('connectedAccount', accounts[0])
            await isWallectConnected()
        })

        if (accounts.length) {
            setGlobalState('connectedAccount', accounts[0])
        } else {
            alert('Please connect wallet.')
            console.log('No accounts found.')
        }

    } catch (error) {
        reportError(error)
    }
}


const connectWallet = async () => {
    try {
        if (!ethereum) return alert('Please install Metamask')
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
        setGlobalState('connectedAccount', accounts[0])
    } catch (error) {
        reportError(error)
    }
}


const payToMint = async () => {
    try {
        if (!ethereum) return alert("Please Install Metamask")
        const connectedAccount = getGlobalState('connectedAccount')
        const contract = getEthereumContract()
        const amount = ethers.utils.parseEther('0.001')

        await contract.payToMint({
            from: connectedAccount,
            value: amount._hex,
        })
        await loadNfts()
    } catch (error) {
        reportError(error)
    }
}

const loadNfts = async () => {
    try {
        if (!ethereum) return alert('Please install Metamask')

        const contract = getEthereumContract()
        const nfts = await contract.getAllNFTs()

        setGlobalState('nfts', structuredNfts(nfts))
    } catch (error) {
        reportError(error)
    }
}

const structuredNfts = (nfts) =>
    nfts
        .map((nft) => ({
            id: Number(nft.id),
            url: opensea_uri + nft.id,
            buyer: nft.buyer,
            imageURL: nft.imageURL,
            cost: parseInt(nft.cost._hex) / 10 ** 18,
            timestamp: new Date(nft.timestamp.toNumber()).getTime(),
        }))
        .reverse()


export {
    isWalletConnected,
    connectWallet,
    payToMint,
    loadNfts
}

