import Image from 'next/image'
import React from 'react'
import { NavbarLinks } from '@/constants'
import Link from 'next/link'
import '@/styles/navbar.css'

export default function Navbar() {
  return (
    <header className='header'>
        <div className='navbar__container'>
            <nav className='navbar'>
                <Image 
                    src={'/logo.svg'}
                    width={208}
                    height={53}
                    className='navbar__logo'
                />
                <ul className='navbar__list'>
                    {
                        NavbarLinks.map((link) => (
                            <li key={link.id} className='navbar__list-item'>
                                <Link href={link.path}>{link.title}</Link>
                                <div className='navbar__list-item__container'>
                                    <ul className='navbar__list-item__container-subtitle'>
                                        {
                                            link.subList?.slice(0, 6).map((item) => (
                                                <li key={item.id} className='subtitle__item'><Link href={item.path}>{item.title}</Link></li>
                                            ))
                                        }
                                    </ul>
                                    <ul className='navbar__list-item__container-subtitle'>
                                        {
                                            link.subList?.slice(6, 12).map((item) => (
                                                <li key={item.id} className='subtitle__item'><Link href={item.path}>{item.title}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    </header>
  )
}
