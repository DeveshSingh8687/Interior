import Image from 'next/image'
import React from 'react'
import Button from '../components/Button'

const KitchenHome = () => {
  return (
    <div className='bedroom-home position-relative'>
        <div className='main-heading'>Kitchen</div>
        <div className='bedroom-banner' style={{textAlign:'right'}}>
          <Image src={'/Banners/KitchenBanner.jpg'} width={100} height={100} alt='kitchen' />
        </div>
        <div className='bedroom-btn' style={{left:'20%'}}><Button name={"Kitchen"} /></div>
    </div>
  )
}

export default KitchenHome