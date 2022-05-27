import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import footerstyles from '../styles/Footer.module.css'
import FooterLogo from '../static/Footer_Logo.png'
import Github from '../static/Github.png'
import Book from '../static/book-icon.png'
import Discord from '../static/Discord.png'
import Twitter from '../static/Twitter.png'

const Footer : React.FC = () => {
  return (
    <footer className={footerstyles.footerBg}>
        <div className={footerstyles.container}>
            <div className={footerstyles.footerLogo}>
                <Image src={FooterLogo} alt="footer logo"></Image>
            </div>
            <ul className={footerstyles.socialWrapper}>
                <li><Link href="https://github.com"><a><Image src={Github} alt="github"></Image></a></Link></li>
                <li><Link href="/page"><a><Image src={Book} alt="book"></Image></a></Link></li>
                <li><Link href="https://discord.com"><a><Image src={Discord} alt="discord"></Image></a></Link></li>
                <li><Link href="https://twitter.com"><a><Image src={Twitter} alt="twitter"></Image></a></Link></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer