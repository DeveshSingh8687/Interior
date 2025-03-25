import Image from 'next/image'
import React from 'react'
import './style.css'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactUs = () => {
    return (
        <div className='contact-us-container'>
            <div className='contact-us-img  position-relative'>
                <Image src={'/Banners/ConatctUsBanner.jpg'} alt='img not found' height={50} width={500} />
                <div className='banner-text position-absolute'>
                    <div className='banner-text-touch'>Get In Touch</div>
                    <h2>Get Helps & Friendly Support</h2>
                    <div>Looking for help or any support? We's available 24 hour a day.</div>
                </div>
            </div>
            <div className='contact-us-card-container'>
                <div className='contact-us-card'>
                    <FmdGoodOutlinedIcon />
                    <div className='mt-2'>Noida</div>
                    <div>Office: Our Office is at noida sector 70</div>
                </div>
                <div className='contact-us-card'>
                    <PhoneOutlinedIcon />
                    <div className='mt-2' style={{cursor:'pointer'}}><EmailOutlinedIcon />Dummy@email.com</div>
                    <div className='mt-1' style={{cursor:'pointer'}}> <PhoneOutlinedIcon /> 913673</div>
                </div>
                <div className='contact-us-card'>
                    <AccountBalanceOutlinedIcon />
                    <div className='mt-2' style={{cursor:'pointer'}}><FacebookIcon />sc@email.com</div>
                    <div style={{cursor:'pointer'}}><XIcon />sc@email.com</div>
                    <div style={{cursor:'pointer'}}><InstagramIcon />sc@email.com</div>
                    <div style={{cursor:'pointer'}}><YouTubeIcon />sc@email.com</div>
                </div>

            </div>
        </div>
    )
}

export default ContactUs