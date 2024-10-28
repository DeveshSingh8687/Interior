import Image from 'next/image'
import React from 'react'
import Button from '../components/Button'

const DrawingHome = () => {
  return (
    <div className='bedroom-home position-relative'>
        <div className='main-heading'>Drawing Room</div>
        <div className='bedroom-banner'>
          <Image src={'/Banners/DrwaingRoomBanner.jpg'} width={100} height={100} alt='kitchen' />
        </div>
        <div className='bedroom-btn' style={{left:'50%'}}><Button name={"Drwaing"} /></div>
    </div>
  )
}

export default DrawingHome