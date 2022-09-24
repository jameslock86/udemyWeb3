
import '../styles/globals.css';
import './app.css';
import Link from 'next/link';


function KyrptoBirdMarketPLace ({Component, pageProps}){
  return (
  <div>
    <nav className='border-b p-6' style={{backgroundColor:'purple'}}>
      <p className='logo text-4x-1 font-bold text-white'>Jimmys Spot</p>
      <div className=' mt-4 '>
        
        <Link href='/'>
          <a className="mr-4 font-bold">
            Main MarketPlace
            </a>
        </Link>
        <Link href='/mint-item'>
          <a className="mr-6 font-bold">
            Mint Tokens
            </a>
        </Link>
        <Link href='/my-nfts'>
          <a className="mr-6">
            My NFT's
            </a>
        </Link>
        <Link href='/accout-dashboard'>
          <a className="mr-6 font-bold">
            Account Dashboard
            </a>
        </Link> 
        
      </div>
    </nav>
    <Component {...pageProps} />
  </div>
  )
}

export default KyrptoBirdMarketPLace;