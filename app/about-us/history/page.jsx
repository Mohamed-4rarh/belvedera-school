import CustomHero from '@/components/CustomHero'
import { aboutUsPages, getInnerPage } from '@/sanity/lib/fetcher'
import Image from 'next/image'
import React from 'react'
import '@/styles/about-us/history.css'
import Link from 'next/link'
import AboutRightList from '@/components/AboutRightList'
import BodyImage from '@/components/BodyImage'
import { textSpliter } from '@/constants'

export default async function page() {
  const pageData = await getInnerPage('our-history')
  return (
    <>
      <CustomHero
        img={pageData.mainImage}
        title={pageData.title}
        color={pageData.color}
      />
      <div className='history__container container'>
        <div className='history__content'>
          <h2
            style={{color: pageData.secondaryColor}}
          >{pageData.header}</h2>
          {
            textSpliter(pageData.text).map((item, index) => (
              <p key={index} className='pages__body__paragraph'>{item}</p>
            ))
          }
        </div>
        <AboutRightList />
      </div>
      <BodyImage 
        img={pageData.bodyImage} 
      />
    </>
  )
}
