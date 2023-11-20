import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import '@/styles/hero.css'

export default function Hero() {
    return (
        <div className='main__section'>
            <div className='hero__content'>
                <h1>We <span>Prepare</span> For Life.</h1>
                <p> We aspire to develop a harmonious balance of the moral, intellectual, and extracurricular aspects of school life, through an affordable, premium educational system that nurtures and celebrates the authentic identities and diverse cultural heritages of all learners.</p>
                <Link href={'/'}>REGISTER NOW</Link>
            </div>
        </div>        
    )
}
