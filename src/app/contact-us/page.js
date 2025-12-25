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
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { CONTACT_DETAILS } from "../components/constants";
import PersonIcon from '@mui/icons-material/Person';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';

const ContactUs = () => {
    const message = "Hi, I want to know about your interior design";
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
                    <div className='mt-2'>NCR</div>
                    <div>{CONTACT_DETAILS.address}</div>
                </div>
                <div className='contact-us-card'>
                    <PhoneOutlinedIcon />
                    <Link href={`mailto:${CONTACT_DETAILS.email}`} className='contactlink'><div className='mt-2'><EmailOutlinedIcon />{CONTACT_DETAILS.email}</div></Link>
                    <Link href={`tel:+91${CONTACT_DETAILS.phone}`} className='contactlink'><div className='mt-1'> <PhoneOutlinedIcon /> {CONTACT_DETAILS.phone}</div></Link>
                    <a
                        href={`https://wa.me/${CONTACT_DETAILS.whatsapp}?text=${encodeURIComponent(
                            message
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='contactlink'
                    >
                    <div className='mt-1'><WhatsAppIcon /> {CONTACT_DETAILS.whatsapp}</div>
                    </a>
                    <Link href={`tel:+91${CONTACT_DETAILS.secondPhone}`} className='contactlink'><div className='mt-1'> <PhoneOutlinedIcon /> {CONTACT_DETAILS.secondPhone}</div></Link>
                </div>
                {/* This is social media card uncomment in future */}
                {/* <div className='contact-us-card'>
                    <AccountBalanceOutlinedIcon />
                    <div className='mt-2' style={{ cursor: 'pointer' }}><FacebookIcon />sc@email.com</div>
                    <div style={{ cursor: 'pointer' }}><XIcon />sc@email.com</div>
                    <div style={{ cursor: 'pointer' }}><InstagramIcon />sc@email.com</div>
                    <div style={{ cursor: 'pointer' }}><YouTubeIcon />sc@email.com</div>
                </div> */}

                <div className='contact-us-card'>
                    <PersonIcon />
                    <Link href='developer' className='contactlink'>
                    <div className='mt-2'>Know more about the people Behind</div>
                    <div className='mt-2'><ArrowRightAltIcon /></div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ContactUs