import ethlogo from '../assets/ethlogo.png'
import { connectWallet } from '../services/Mint'
import { truncate, useGlobalState } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  return (
    <nav className='w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto'>
        <div className='flex flex-row justify-start items-center md:flex-[0.5] flex-initial'>
            <img 
                className='w-8 cursor-pointer'
                src={ethlogo}
                alt='mint 3.0 Logo'/>
            
        </div>

        <ul className='md:flex-[0.5] text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
            <li className='mx-4 cursor-pointer'>Explore</li>
            <li className='mx-4 cursor-pointer'>Features</li>
            <li className='mx-4 cursor-pointer'>Community</li>
        </ul>

        {connectedAccount ? (
          <button className='btn'>{truncate(connectedAccount,4,4,11)}</button>
        ):(
          <button  className='btn'
          onClick={connectWallet}>Connect Wallet</button>
        )}
        
    </nav>
  )
}

export default Header