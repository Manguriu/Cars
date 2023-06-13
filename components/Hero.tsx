"use client"
import React from 'react'

import {CustomButton} from '@/components/Export'
import Image from 'next/image'

const Hero = () => {
    const hadleScroll= () => {}
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                    Find, Rent Or Book Something Quick---fast
            </h1>
            <p className='hero__subtitle'>
                Book a car of your own liking on our website.

            </p>

            <CustomButton 
            title="Explore Services" containerStyles="bg-primary-blue text-white rounded-full mt-10" handleClick={hadleScroll}/>
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="/hero.png" alt='hero' fill className='object-contain'/>
            </div>
            <div className='hero__image-overlay'/>
            
        </div>
    </div>
  )
}

export default Hero