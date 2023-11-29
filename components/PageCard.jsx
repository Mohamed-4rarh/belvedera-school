import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PageCard({img, title, text, path, color}) {
  return (
    <div className='page-card'>
        <div className='page-card-image'>
            <Image
                src={img}
                fill
                unoptimized
                className='page-card-image-img'
            />
        </div>
        <div className='page-card-content'>
            <h2
              style={{color: color}}
            >{title}</h2>
            <p>{text}</p>
            <Link href={path || '/'}>Learn More</Link>
        </div>
    </div>
  )
}
