import Image from 'next/image'
import React from 'react'
import './styles.css'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Header = () => {
  return (
    <div className='header-container d-flex'>
        <Image src={'/Logo.JPG'} alt='logo' width={50} height={50}/>
        <div className='navigation-link d-none d-md-flex'>
          <div>Bedroom</div> &nbsp;
          <div>Kitchen</div> &nbsp;
          <div>Drawing</div> &nbsp;
        </div>
        <div><AddIcCallIcon  style={{color:'#FF6699'}}/> Contact Us</div>
    </div>
  )
}

export default Header