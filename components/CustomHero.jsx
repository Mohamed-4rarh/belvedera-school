import Image from 'next/image'
import React from 'react'

export default function CustomHero({img, title, color}) {
  return (
    <main className='custom-hero'>
      <div className='container custom-hero-container'>
        <div className="custom-hero-image">
          <Image
            src={img}
            fill
            className='custom-hero-img'
            unoptimized
          />
        </div>
        <h2 className='custom-hero-title'
          style={{backgroundColor: color}}
        >{title}</h2>
      </div>
    </main>
  )
}
