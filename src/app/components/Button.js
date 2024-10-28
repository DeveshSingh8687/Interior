'use client'
import React from 'react'
import './style.css'
import { useRouter } from 'next/navigation'

const Button = ({ name }) => {
    const router = useRouter()
    const handleButton = () => {
        router.push(name.toLowerCase())
    }
    return (
        <div className='home-button'>
            <button onClick={() => handleButton()}>Check our {name} Desing Work</button>
        </div>
    )
}

export default Button