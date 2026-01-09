import React from 'react';
import './style.css'
import Image from 'next/image';
import { CONTACT_DETAILS } from "../components/constants";
import Link from 'next/link';
import OurTeam from '../ourTeam';

const AboutUs = () => {
    return (
        <div className='aboutUs'>
            <div className='Banner'>
                <div className='bannerTxt'>About <span className='redText'>U</span>s</div>
                <div className='bannerImg'><img src={'/about/AboutUsBanner.png'} /></div>
            </div>
            <div className='aboutContainer flex-md-row flex-column'>
                <div className='logo-img'><Image src={'/about/About.png'} alt='logo' width={280} height={120} /></div>
                <div className='text-container'>
                    <div className='aboutHeading'>AboutUS</div>
                    <div className='aboutContent'>At <b>Fine Finish Interior </b>, we bring spaces to life with thoughtful design, superior craftsmanship, and a commitment to excellence. With over 50 years of experience in the interior design industry, we have built a strong reputation for delivering timeless, functional, and aesthetically pleasing interiors.</div>
                </div>
            </div>
            <div className='aboutContainer flex-md-row flex-column-reverse'>
                <div className='text-container'>
                    <div className='aboutHeading'>How Long we are in market</div>
                    <div className='aboutContent'>With over <b>50+ years of experience in the interior design industry</b>, we have built a strong foundation of trust and excellence. Our long-standing presence in the market reflects our commitment to quality, innovation, and customer satisfaction. Over the decades, we have successfully delivered a wide range of residential and commercial interior projects.</div>
                </div>
                <div ><Image src={'/about/Time.png'} alt='logo' width={330} height={250} className='time-img' /></div>
            </div>
            <div className='aboutContainer flex-md-row flex-column'>
                <div ><Image src={'/about/Work.png'} alt='logo' width={330} height={250} className='time-img' /></div>
                <div className='text-container'>
                    <div className='aboutHeading'>Our Skilled Professionals</div>
                    <div className='aboutContent'>Our team is a perfect blend of <b>innovation, creativity, and hands-on experience</b>. With strong industry knowledge and years of practical expertise, our professionals work collaboratively to deliver smart, functional, and aesthetically pleasing interior solutions. We constantly explore new ideas, materials, and techniques to stay ahead of design trends.</div>
                </div>
            </div>
            <div className='aboutContainer flex-md-row flex-column-reverse'>
                <div className='text-container'>
                    <div className='aboutHeading'>Our Presence Across India</div>
                    <div className='aboutContent'>We proudly serve clients across <b>20+ cities in India</b>, with a strong presence in <b>more than 5 states</b>. Our wide operational network allows us to deliver consistent quality and reliable interior solutions, no matter the location. With an experienced team and streamlined execution process, we manage projects efficiently across regions.</div>
                    <div className='aboutContent mt-2'><b>States:</b> Delhi NCR, Haryana, Chandigarh, Jammu & Kashmir, Rajasthan, Uttar Pradesh, Mumbai</div>
                </div>
                <div ><Image src={'/about/City.png'} alt='logo' width={330} height={250} className='time-img' /></div>
            </div>
            <div className='aboutContainer flex-md-row flex-column'>
                <div ><Image src={'/about/TimeDelivrey.png'} alt='logo' width={330} height={250} className='time-img' /></div>
                <div className='text-container'>
                    <div className='aboutHeading'>Committed to Timely Completion</div>
                    <div className='aboutContent'>We are committed to <b>on-time project delivery</b> without compromising on quality or design. With well-planned processes and an experienced team, we ensure every project is completed within the agreed timeline. Our disciplined workflow and constant coordination help us avoid delays and maintain efficiency. Over the years, we have successfully delivered all projects as promised.</div>
                </div>
            </div>
            <div className='aboutContainer flex-md-row flex-column-reverse'>
                <div className='text-container'>
                    <div className='aboutHeading'>24×7 Customer Support</div>
                    <div className='aboutContent'>We offer <b>24×7 customer support </b> to ensure complete peace of mind throughout your project journey. Our dedicated support team is always available to address your queries, provide updates, and resolve concerns promptly. Whether it’s before, during, or after project completion, we are just a call away. We believe in building long-term relationships through reliable and responsive service. Your satisfaction is our priority, anytime you need us.</div>
                </div>
                <div ><Image src={'/about/Support.png'} alt='logo' width={330} height={250} className='time-img' /></div>
            </div>
            <div className='aboutContainer flex-md-row flex-column'>
                <div ><Image src={'/about/ContactUs.jpg'} alt='logo' width={330} height={250} className='time-img' /></div>
                <div className='text-container'>
                    <div className='aboutHeading'>24x7 Customer Support</div>
                    <Link href={`tel:+91${CONTACT_DETAILS.phone}`} className='contactLink'>
                        <div> <span>📞</span> Phone: {CONTACT_DETAILS.phone}</div>
                    </Link>
                    <Link href={`tel:+91${CONTACT_DETAILS.secondPhone}`} className='contactLink mt-4'>
                        <div><span>📞</span> Secondary Phone: {CONTACT_DETAILS.secondPhone}</div>
                    </Link>
                    <Link href={`mailto:${CONTACT_DETAILS.email}`} className='contactLink'><div><span>📧</span> Email: {CONTACT_DETAILS.email}</div></Link>
                    <Link href="/" className='contactLink'><div><span>📍</span> Office Location: {CONTACT_DETAILS.address}</div></Link>
                    <div className='contact-more mt-4'>
                        <Link href={'/contact-us'} style={{ textDecoration: 'none' }}>
                            <button className='contact-btn' style={{ height: "40px" }}>Know More</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <OurTeam />
            </div>
        </div>
    )
}

export default AboutUs;
