import Link from 'next/link'
import React from 'react'

export default function AboutRightList() {
  return (
    <div className='explore__list'>
        <div className='explore__list-container'>
            <p>Explore this section</p>
            <p>About Us</p>
            <ul>
                <li><Link href={'/about-us/primary'}>Primary Head’s Welcome</Link></li>
                <li><Link href={'/about-us/history'}>Our History</Link></li>
                <li><Link href={'/about-us/vision'}>Vision & Mission</Link></li>
                <li><Link href={'/about-us/values'}>Values and Ethos</Link></li>
            </ul>
        </div>
    </div>
  )
}
