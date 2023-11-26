import CustomHero from '@/components/CustomHero'
import { aboutUsPages } from '@/sanity/lib/fetcher'
import React from 'react'
import '@/styles/about-us/primaryPage.css'
import AboutRightList from '@/components/AboutRightList'
import BodyImage from '@/components/BodyImage'

export default async function page() {
  const primaryPage = await aboutUsPages('aboutUs__primary')
  const text = primaryPage.text.split('*').filter(item => item.trim() !== '')
  return (
    <>
      <CustomHero 
        img={primaryPage.mainImage} 
        title={primaryPage.title} 
        color={primaryPage.color} 
      />
      <div className='primary__container container'>
        <div className='primary__content'>
          <h2
            style={{color: primaryPage.color}}
          >{primaryPage.header}</h2>
          {
            text.map((item, index) => (
              <p key={index} className='pages__body__paragraph'>{item}</p>
            ))
          }
        </div>
        <AboutRightList />
      </div>
      <BodyImage img={primaryPage.bodyImage} />
    </>
  )
}
