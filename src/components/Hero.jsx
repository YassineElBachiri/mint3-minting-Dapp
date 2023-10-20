import avatar from '../assets/owner.jpg'
import github from '../assets/github_icon.png'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import linkedIn from '../assets/linkedIn_icon.png'
import medium from '../assets/medium_icon.png'
import { setAlert, setGlobalState, useGlobalState } from '../store'
import { payToMint } from '../services/Mint'


const Hero = () => {
  const [nfts] = useGlobalState('nfts')

  const onMintNFT = async () => {
    setGlobalState('loading', {
      show: true,
      msg: 'Minting new NFT to your account'
    })

    await payToMint()
    .then(() => setAlert('Minting Successful...','green'))
    .catch(() => setGlobalState('loading', {show:false, msg: ''}))
  }
  return (
    <div className=" bg-no-repeat bg-cover">
        <div className='flex flex-col justify-center items-center mx-auto py-10'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className="text-white text-5xl font-bold text-center">Arts <br/>
                <span className="text-gradient">NFTs</span> Collection</h1>
                <p className="text-white font-semibold text-sm mt-3">
            Mint and collect the hottest NFTs around.
          </p>
          <br/>
          <button
            className="btn"
            onClick={onMintNFT}
          >
            Mint Now
          </button>
         
           
          


          <p className="text-white text-sm font-medium text-center pt-11">
            Gospel Darlington kick-started his journey as a 
            software engineer in 2016. <br />
            Over the years, he has grown full-blown skills in
            JavaScript stacks such as <br /> React, ReactNative, VueJs, 
            and now blockchain.
          </p>


                <ul 
            className="flex flex-row justify-center space-x-2 
            items-center my-4">
            <a
              className="bg-white hover:scale-50 transition-all 
              duration-75 delay-75 rounded-full mx-2"
              href="https://github.com/Daltonic"
            >
              <img className="w-7 h-7" src={github} alt="Github" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all 
              duration-75 delay-75 rounded-full mx-2"
             href="https://www.linkedin.com/in/darlington-gospel-aa626b125"
            >
              <img className="w-7 h-7" src={linkedIn} alt="linkedIn" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all 
              duration-75 delay-75 rounded-full mx-2"
              href="https://fb.com/darlington.gospel01"
            >
              <img className="w-7 h-7" src={facebook} alt="facebook" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all 
              duration-75 delay-75 rounded-full mx-2"
              href="https://twitter.com/idaltonic"
            >
              <img className="w-7 h-7" src={twitter} alt="twitter" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all 
              duration-75 delay-75 rounded-full mx-2"
              href="https://darlingtongospel.medium.com/"
            >
              <img className="w-7 h-7" src={medium} alt="medium" />
            </a>
          </ul>
          <div className="shadow-xl shadow-black flex flex-row
            justify-center items-center w-10 h-10 rounded-full
            bg-white cursor-pointer p-3 ml-4 text-black 
            hover:bg-[#bd255f] hover:text-white transition-all
            duration-75 delay-100">
            <span className="text-xs font-bold">{nfts.length}/99</span>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Hero