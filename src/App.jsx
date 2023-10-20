import { useEffect } from "react"
import { useGlobalState } from "./store"
import { isWalletConnected, loadNfts } from "./services/Mint"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Artworks from "./components/Artworks"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
// import Alert from "./components/Alert"
import Loading from "./components/Loading"



const App = () => {
  const [nfts] = useGlobalState('nfts')
  useEffect(async ()=>{
    await isWalletConnected().then(() => console.log('Blockchain Loaded'))
    await loadNfts()

  },[])
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header/>
        <Hero/>
      </div>
      <Artworks artworks={nfts} />
      <Contact />
      <Footer />
      <Loading />
      {/* <Alert /> */}
    </div>
  )
}

export default App
