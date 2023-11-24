import Image from 'next/image'
import React from 'react'

export default function CardsSection() {
  return (
    <section className='about__cards__section'>
        <div className='about__cards-container container'>
            <div className='about-card'>
                <div className='about-card-image'>
                    <Image
                        src={'/aboutcard.jpg'}
                        fill
                        unoptimized
                        className='about-card-img'
                        style={{left: '15px', top: '-15px'}}
                    />
                </div>
                <div className='about-card-content'>
                    <h2>A Broad Curriculum</h2>
                    <p>At Belvedere School, Cairo, we are eager to create an environment that produces well-rounded learners prepared for the challenges of today’s fast-paced world. Our school community is made up of and belongs to our pupils and...</p>
                    {/* link button to open page */}
                </div>
            </div>
        </div>
    </section>
  )
}
