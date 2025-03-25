import Image from 'next/image'
import React from 'react'
import './styles.css'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='header-container d-flex'>
        <Link href={'/'}><Image src={'/Logo.JPG'} alt='logo' width={50} height={50} /></Link>
        <div className='navigation-link d-none d-md-flex'>
          <div>Bedroom</div> &nbsp;
          <div>Kitchen</div> &nbsp;
          <div>Drawing</div> &nbsp;
        </div>
        <div className='contact-header'><Link href={'/contact-us'}><AddIcCallIcon  style={{color:'#FF6699'}}/> Contact Us</Link></div>
    </div>
  )
}

export default Header