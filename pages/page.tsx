import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NFTMainImg from '../static/NFT-Img.png'
import ArrowsIcons from '../static/nft-arrows-icons.png'
import PloyGoneImg from '../static/polygon logo.png'
import MinusSign from '../static/minus-sign.png'
import PlusSign from '../static/plus-sign.png'
// import HeadingImg from '../static/head-img.png'
import pagestyles from '../styles/page.module.css'
import NFT from '../components/NFT'

const page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Omini Verse | NFT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={pagestyles.pagebackground}>
        <div className={pagestyles.mintHero}> 
          <Navbar/>
          <div className={pagestyles.container}>
            <div className={pagestyles.mintImgWrap}>
                <div className={pagestyles.nftmainImgtxt}>
                  <h3>Omniverse</h3>
                  <Image src={ArrowsIcons} width={40} height={40} alt="ikon"></Image>
                </div>
              <div className={pagestyles.nftmainImgT}>
                <Image src={NFTMainImg} alt="mint main" layout='responsive' />
              </div>
            </div>
            <div className={pagestyles.mintDesc}>
              <h1>&#40;greg, greg&#41;</h1>
              <div className={pagestyles.mintDataGrid}>
                <div className={pagestyles.mintDataWrap}>
                  <h5>MINTED</h5>
                  <span>0/750</span>
                </div>
                <span className={pagestyles.line}></span>
                <div className={pagestyles.mintDataWrap}>
                  <h5>PRICE</h5>
                  <span>250 <Image src={PloyGoneImg} width={29.84} height={25.46} alt="ikon"></Image></span>
                </div>
                <span className={pagestyles.line}></span>
                <div className={pagestyles.mintDataWrap}>
                  <h5>QUANTITY</h5>
                  <div className={pagestyles.counterWrap}>
                    <button><Image src={MinusSign} alt="minus"></Image></button>
                    <span>1</span>
                    <button><Image src={PlusSign} alt="plus"></Image></button>
                  </div>
                </div>
              </div>
              <div className={pagestyles.mintBtnWrap}>
                <button type='button'>MINT NOW</button>
              </div>
              <div className={pagestyles.nftDescSec}>
                  <div className={pagestyles.nftdeschead}>
                      <span></span>
                      <h3>Description</h3>
                      <span></span>
                  </div>
                <p>Welcome to the omniverse</p>
                <p>greg is our genesis collection that represents our community and technological breakthroughs</p>
                <p>mint greg below from any chain you wish and transfer him to any other chain using the “Transfer” box below</p>
                <p>5 mints per wallet</p>
              </div>
            </div>
          </div>
        </div>
        <div className={pagestyles.mintSecBg}>
          <div className={pagestyles.nfthead}>
            <h1>YOUR NFTS</h1>
          </div>
          <NFT/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default page
