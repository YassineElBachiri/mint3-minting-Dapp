import ethlogo from '../assets/ethlogo.png'
import { useEffect, useState } from 'react'
import owner from '../assets/owner.jpg'


const Artworks = ({artworks}) => {
  const [end, setEnd] = useState(4)
 const [count] = useState(4)

 const [nfts, setNfts] = useState([])

 const getNfts = () => {
   return artworks.slice(0, end)
 }

 useEffect(() => {
   setNfts(getNfts())
 }, [artworks, end])
  return (
    <div className="gradient-bg-artworks py-10">
      <div className="w-4/5 mx-auto">
        <h4 className="text-gradient uppercase text-2xl">Nfts</h4>

        <div className="flex flex-wrap justify-start items-center mt-4">
          {nfts.map((nft, i) => (
            <a
              key={i}
              href={nft.url}
              target="_blank"
              className={` card relative  mr-5 mb-4
                cursor-pointer `}

            >
              {/* <div
                className="absolute bottom-0 left-0 right-0
                  flex flex-row justify-between items-center
                  label-gradient p-2 w-full text-white text-sm"
              >
                <p>
                  Space Art Collection
                </p>
                <div className="flex justify-center items-center 
                  space-x-2">
                  <img
                    className="w-5 cursor-pointer"
                    src={ethlogo}
                    alt="Adulam Logo"
                  />
                  3.4
                </div>
              </div> */}



              <img
                className="w-14 h-14 cursor-pointer"
                src={ethlogo}
                alt={`Mint 3.0 collection #` + nft.id}
              />
              <div class="textBox">
                <p class="text head">{`Mint 3.0 #${nft.id}`}</p>
                <span>Cryptocurrency</span>
                <p class="text price">{nft.cost}</p>
              </div>
            </a>

          ))}
        </div>



        {artworks.length > 0 && artworks.length > nfts.length ? (
         <div className="flex flex-row justify-center items-center
         mx-auto mt-4">
           <button
             className="btn"
             onClick={() => setEnd(end + count)}
           >
             Load more
           </button>
         </div>
       ) : null}


       
      </div>
    </div>
  )
}

export default Artworks