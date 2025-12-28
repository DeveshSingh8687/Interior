import Image from 'next/image'
import React from 'react'
import Button from '../components/Button'

const BedroomHome = () => {
  return (
    <div className='bedroom-home position-relative'>
        <div className='main-heading'>Bedroom</div>
        <div className='bedroom-banner'>
          <Image src={'/Banners/narsingi-hyderabad-cozy-bedroom-design.jpg'} width={100} height={100} alt='bedroom' />
        </div>
        <div className='bedroom-btn' style={{left:'50%'}}><Button name={"Bedroom"} /></div>
    </div>
  )
}

export default BedroomHome