import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CONTACT_DETAILS } from "../components/constants";

const ContactUsBanner = () => {
    return (
        <div className='contactUs-banner d-md-flex text-center'>
            <div className='contact-image d-none d-md-block'>
                <img src={'/Banners/contact-us-image.jpg'} width={100} height={100} alt='contact us' />
            </div>
            <div className='text-section h-100 p-1'>
                <h1>Get in Touch with Us</h1>
                <p>Ready to bring your vision to life? Whether you have questions, need a consultation we are just a step away from you, are you ready to start your design journey, we'd love to hear from you.</p>
                <h3 >Contact Details:</h3>
                <Link href={`tel:+91${CONTACT_DETAILS.phone}`} className='contactLink'>
                    <div> <span>📞</span> Phone: {CONTACT_DETAILS.phone}</div>
                </Link>
                <Link href={`tel:+91${CONTACT_DETAILS.secondPhone}`} className='contactLink'>
                    <div><span>📞</span> Secondary Phone: {CONTACT_DETAILS.secondPhone}</div>
                </Link>
                <Link href={`mailto:${CONTACT_DETAILS.email}`} className='contactLink'><div><span>📧</span> Email: {CONTACT_DETAILS.email}</div></Link>
                <Link href="/" className='contactLink'><span>📍</span> Office Location: {CONTACT_DETAILS.address}</Link>
                <div className='contact-more'>
                    <Link href={'/contact-us'} style={{ textDecoration: 'none' }}>
                        <button className='contact-btn' style={{ height: "40px" }}>Know More</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ContactUsBanner