import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import '@/styles/footer.css'

export default function Footer() {
  return (
    <footer className='footer__section'>
      <div className='container'>
        <div className='footer__container'>
          <div className='footer__one'>
            <h3>Quick Links</h3>
            <div className='holder'>
              <ul>
                <li><Link href={'/'}>About Us</Link></li>
                <li><Link href={'/'}>Latest news</Link></li>
                <li><Link href={'/'}>Events</Link></li>
                <li><Link href={'/'}>Careers</Link></li>
              </ul>
              <ul>
                <li><Link href={'/'}>Portals</Link></li>
                <li><Link href={'/'}>Life & learning</Link></li>
                <li><Link href={'/'}>Admissions</Link></li>
                <li><Link href={'/'}>Contact us</Link></li>
              </ul>
            </div>
          </div>

          <div className='footer__two'>
            <h3>Contact Us</h3>
            <p>If you would like to speak to somebody in person about your child’s application, contact us on any of the following:</p>
            <div className='holder holderC'>
              <span>ADMISSION OFFICE:</span>
              <p>SODIC Eastown, Beside the AUC, Road 90, New Cairo - Gate 9 - Building 4, 4th Floor, Office 04-04-10.</p>
            </div>
            <div className='holder holderC'>
              <span>CAMPUS ADDRESS:</span>
              <p>CAIRO-SUEZ ROAD, OPPOSITE TO MADINATY & SARAI, CAIRO, EGYPT.</p>
            </div>
            <div className='holder'>
              <span>ADMISSIONS:</span>
              <p>+20 107 0549 003 - +20 107 0549 004</p>
            </div>
            <div className='holder'>
              <span>FRONTDESK:</span>
              <p>+20 107 0000 353</p>
            </div>
            <div className='holder'>
              <span>EMAIL:</span>
              <p>enquiries@belvedereschoolcairo.com</p>
            </div>
          </div>

          <div className='footer__three'>
            <Image src={'/facebook.svg'} width={24} height={24} />  
            <Image src={'/instagram.svg'} width={24} height={24} />  
            <Image src={'/linkedin.svg'} width={24} height={24} />  
            <Image src={'/youtube.svg'} width={24} height={28} />  
          </div>
        </div>
        
        <div className='footer__foot'>
          <Image src={'/logo.svg'} width={148} height={38} unoptimized />
          <ul>
            <li><Link href={'/'}>Privacy Policy</Link></li>
            <li><Link href={'/'}>Terms & Conditions</Link></li>
            <li><Link href={'/'}>Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
