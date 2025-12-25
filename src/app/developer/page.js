import React from 'react'
import './style.css'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
    return (
        <div className='developer'>
            <div className='dev-wrapper p-3 text-center d-md-flex justify-content-evenly align-items-center '>
                <div className='dev-img'><Image src={'/dev/dev.jpeg'} width={200} height={200} alt='developer' /></div>
                <div className='dev-description mt-4 mt-md-0'>
                    <div className='desc-wrapper'>
                        <h3>Gandharve Solutions Pvt. Ltd.</h3>
                        <div className='dev-text'>Designed And Developer by Devesh Gandharve and team</div>
                    </div>
                    <div className='dev-btn-wrapper d-flex justify-content-evenly mt-4'>
                        <Link href={'tel:+917088196864'}><button className='call-btn'><div className='btn-content'>Call Us</div></button> </Link>
                        <Link href={'mailto:deveshgandharve86@gmail.com'}><button className='email-btn'><div className='btn-content'>Email Us</div></button> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page