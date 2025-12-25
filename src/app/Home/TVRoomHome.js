import Image from 'next/image'
import React from 'react'
import Button from '../components/Button'

const TVRoomHome = () => {
  return (
    <div className='bedroom-home position-relative'>
        <div className='main-heading'>LED Pannel</div>
        <div className='bedroom-banner' style={{textAlign:'right'}}>
          <Image src={'/Banners/TVRoomBanner.jpg'} width={100} height={100} alt='kitchen' />
        </div>
        <div className='bedroom-btn' style={{left:'20%'}}><Button name={"LED_Pannel"} /></div>
    </div>
  )
}

export default TVRoomHome