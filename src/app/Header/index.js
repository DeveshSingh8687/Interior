import Image from 'next/image'
import React from 'react'
import './styles.css'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import Link from 'next/link';
import { Button } from '@mui/material';

const Header = () => {
  return (
    <div className='header-container d-flex'>
      <Link href={'/'}><Image src={'/Logo.png'} alt='logo' width={120} height={50} /></Link>
      <div style={{display: "flex", gap: "43px"}}>
        <div className='navigation-link d-none d-md-flex'>
          <div>Bedroom</div>
          <div>Kitchen</div>
          <div>Drawing</div>
          <div>Blog</div>
          <div>About Us</div>
          <div>FAQs</div>
        </div>
        <button className='contact-btn'>
          <AddIcCallIcon style={{ color: '#981f1f', fontSize: "18px" }} />
          Contact Us
        </button>
      </div>


    </div>
  )
}

export default Header