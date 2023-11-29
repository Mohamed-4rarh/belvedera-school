import CustomHero from '@/components/CustomHero'
import { aboutUsPages, getInnerPage } from '@/sanity/lib/fetcher'
import React from 'react'
import '@/styles/about-us/primaryPage.css'
import AboutRightList from '@/components/AboutRightList'
import BodyImage from '@/components/BodyImage'
import { textSpliter } from '@/constants'

export default async function page() {
  const pageData = await getInnerPage('primary-head-welcome')
  return (
    <>
      <CustomHero 
        img={pageData.mainImage} 
        title={pageData.title} 
        color={pageData.color} 
      />
      <div className='primary__container container'>
        <div className='primary__content'>
          <h3 style={{color : pageData.color}}>{pageData.subHeader}</h3>
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
      <BodyImage img={pageData.bodyImage} />
    </>
  )
}
