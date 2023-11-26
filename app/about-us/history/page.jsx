import CustomHero from '@/components/CustomHero'
import { aboutUsPages } from '@/sanity/lib/fetcher'
import Image from 'next/image'
import React from 'react'
import '@/styles/about-us/history.css'
import Link from 'next/link'
import AboutRightList from '@/components/AboutRightList'
import BodyImage from '@/components/BodyImage'

export default async function page() {
  const historyPage = await aboutUsPages('our-history')
  const text = historyPage.text.split('*').filter(item => item.trim() !== '')
  return (
    <>
      <CustomHero
        img={historyPage.mainImage}
        title={historyPage.title}
        color={historyPage.color}
      />
      <div className='history__container container'>
        <div className='history__content'>
          <h2
            style={{color: historyPage.color}}
          >{historyPage.header}</h2>
          {
            text.map((item, index) => (
              <p key={index} className='pages__body__paragraph'>{item}</p>
            ))
          }
        </div>
        <AboutRightList />
      </div>
      <BodyImage 
        img={historyPage.bodyImage} 
      />
    </>
  )
}
