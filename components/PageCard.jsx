import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PageCard({pageData}) {
  return (
    <div className='page-card'>
        <div className='page-card-image'>
            <Image
                src={pageData.mainImage}
                fill
                unoptimized
                className='page-card-image-img'
            />
        </div>
        <div className='page-card-content'>
            <h2
              style={{color: pageData.color}}
            >{pageData.title}</h2>
            <p>{pageData.text}</p>
            <Link href={pageData.path}>Learn More</Link>
        </div>
    </div>
  )
}
