import Image from 'next/image'
import React from 'react'

export default function BodyImage({img}) {
  return (
    <div className='body__image'>
        <Image 
            src={img}
            fill
            className='body__image-img'
            unoptimized
        />
    </div>
  )
}
