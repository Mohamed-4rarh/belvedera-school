import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <main className='about__page'>
        <div className='container about__hero'>
            <div className="about__image">
                <Image 
                src={'/aboutushero.jpg'}
                fill
                className='about-img'
                unoptimized
                />
            </div>
          <h2 className='about__title'>About Us</h2>
        </div>
    </main>
  )
}
