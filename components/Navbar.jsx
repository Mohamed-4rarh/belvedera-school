import { NavbarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import '@/styles/navbar.css'

export default function Navbar() {
  return (
    <header>
        <div className='container header__container'>
            <nav className='nav'>
                <Link href={'/'} style={{zIndex: 1}}>
                    <Image src={'/logo.svg'} width={205} height={50} unoptimized/>
                </Link>

                <ul className='nav__list'>
                    {
                        NavbarLinks.map((link) => (
                            <li key={link.id} className='nav__list-item'>
                                <Link href={link.path}>{link.title}</Link>
                                <div className='sublists__container'>
                                    <ul className='nav__list-item__subList'>
                                        {
                                            link.subList.slice(0, 6).map((subLink) => (
                                                <li key={subLink.id} className='subList-item'><Link href={subLink.path}>{subLink.title}</Link></li>
                                            ))
                                        }
                                    </ul>
                                    <ul className='nav__list-item__subList'>
                                        {
                                            link.subList.slice(6, 12).map((subLink) => (
                                                <li key={subLink.id} className='subList-item'><Link href={subLink.path}>{subLink.title}</Link></li>
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
