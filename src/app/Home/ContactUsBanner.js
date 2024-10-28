import Image from 'next/image'
import React from 'react'

const ContactUsBanner = () => {
    return (
        <div className='contactUs-banner d-md-flex text-center'>
            <div className='text-section h-100 p-1'>
                <h1>Get in Touch with Us</h1>
                <p>Ready to bring your vision to life? Whether you have questions, need a consultation we are just a step away from you, are you ready to start your design journey, we'd love to hear from you.</p>
                <h3 >Contact Details:</h3>
                <div>📞 Phone: [Your Phone Number]</div>
                <div>📧 Email: [Your Email Address]</div>
                <div>📍 Office Location: [Your Address] (if applicable)</div>
            </div>
            <div className='contact-image d-none d-md-block'><Image src={'/Banners/ContactBanner.jpg'} width={250} height={250} alt='contact us'/></div>
        </div>
    )
}

export default ContactUsBanner