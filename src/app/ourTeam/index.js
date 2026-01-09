import React from 'react'
import './style.css'
import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_DETAILS } from "../components/constants";

const OurTeam = () => {
    return (
        <div className='ourTeam'>
            <div className="section-heading">
                <span className="line"></span>
                <div className='knownFaces'>Our Known Faces</div>
                <span className="line"></span>
            </div>

            <div className='ceo-container d-md-flex justify-content-evenly gap-10'>
                <div className='text-center mb-4'>
                    <Image src={'/team/CEO.jpeg'} alt='ing' height={250} width={300} />
                    <div className='ceoName'>Mohd. Rashid Hasan</div>
                    <div className='d-flex align-items-center justify-content-evenly'>
                        <div className='contact-more mt-4'>
                            <Link href={`tel:+91${CONTACT_DETAILS.phone}`} style={{ textDecoration: 'none' }}>
                                <button className='contact-btn' style={{ height: "40px" }}>📞 Call Us</button>
                            </Link>
                        </div>
                        <div className='contact-more mt-4'>
                            <Link href={`mailto:${CONTACT_DETAILS.email}`} style={{ textDecoration: 'none' }}>
                                <button className='contact-btn' style={{ height: "40px" }}>📧 Email Us</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <Image src={'/team/CTO.jpeg'} alt='ing' height={250} width={300} />
                    <div className='ceoName'>Mo. Mujahid</div>
                    <div className='d-flex align-items-center justify-content-evenly'>
                        <div className='contact-more mt-4'>
                            <Link href={`tel:+91${CONTACT_DETAILS.secondPhone}`} style={{ textDecoration: 'none' }}>
                                <button className='contact-btn' style={{ height: "40px" }}>📞 Call Us</button>
                            </Link>
                        </div>
                        <div className='contact-more mt-4'>
                            <Link href={`mailto:${CONTACT_DETAILS.email}`} style={{ textDecoration: 'none' }}>
                                <button className='contact-btn' style={{ height: "40px" }}>📧 Email Us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam;