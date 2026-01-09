import React from 'react'
import './style.css'
import Image from 'next/image'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { CONTACT_DETAILS } from "../components/constants";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content d-block d-md-flex pb-3'>
        <div className='text-center'>
          <Link href={'/'} className='logo-container'>
            <Image src={'/Logos.png'} alt='logo' width={60} height={50} />
            <div className='logo-text-container'>
              <div className='logo-boldTxt'>FINE FINISH </div>
              <div className='logo-lightTxt'>INTERIORS & DESIGN</div>
            </div>
          </Link>
          <div className='mt-2'><FacebookIcon />&nbsp;<XIcon />&nbsp;<YouTubeIcon />&nbsp;<InstagramIcon /></div>
        </div>
        <div>Privacy and Policy</div>
      </div>
      <div className='vertical-line'></div>
      <div className='copyright-container d-block d-md-flex'>
        <div>Copyright © Fine Finish Interior Private Limited. All rights reserved.</div>
        <Link href={`mailto:${CONTACT_DETAILS.email}`} className='contactLink'><div><MailOutlineIcon /> {CONTACT_DETAILS.email}</div></Link>
        <Link href={`tel:+91${CONTACT_DETAILS.phone}`} className='contactLink'><div><LocalPhoneOutlinedIcon /> {CONTACT_DETAILS.phone}</div></Link>
      </div>
      <div className='vertical-line'></div>
      <div className='footer-description'>
        At FineFinish, we bring together functionality and aesthetics to provide homeowners with customised and efficient home designs. Our designers specialise in home interior designs and home décor, and help you create a personalized home to suit your lifestyle. From sophisticated living room designs to space-saving and clutter-free interior designs, we are here to help you find the best home decor and home design to match your needs and style. All our products come with up to 10-year warranty along with unwavering support and maintenance services. Explore thousands of inspiring interior designs or get a free estimate – it's all here on HomeLane.com, your one stop for complete home interiors.
      </div>
    </div>
  )
}

export default Footer