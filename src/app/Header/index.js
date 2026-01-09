import Image from 'next/image'
import React from 'react'
import './styles.css'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import Link from 'next/link';
import Sidebar from './Drawer';

const Header = () => {
  return (
    <div className='header-container d-flex'>
      <div className='d-flex align-items-center gap-1'>
        <Sidebar />
        <Link href={'/'} className='logo-container'>
          <Image src={'/Logos.png'} alt='logo' width={60} height={50} />
          <div className='logo-text-container'>
            <div className='logo-boldTxt'>FINE FINISH </div>
            <div className='logo-lightTxt'>INTERIORS & DESIGN</div>
          </div>
        </Link>
      </div>
      <div style={{ display: "flex", gap: "43px" }}>
        <div className='navigation-link d-none d-md-flex'>
          {/* <div>Bedroom</div>
          <div>Kitchen</div>
          <div>Drawing</div>
          <div>Blog</div> */}
          <Link href='aboutus' className='link'>About Us</Link>
          <Link href='team' className='link'>Our Team</Link>
          <div>FAQs</div>
        </div>
        <Link href={'/contact-us'} style={{ textDecoration: 'none' }}>
          <button className='contact-btn'>
            <AddIcCallIcon style={{ color: '#981f1f', fontSize: "18px" }} />
            Contact Us
          </button>
        </Link>
      </div>


    </div>
  )
}

export default Header