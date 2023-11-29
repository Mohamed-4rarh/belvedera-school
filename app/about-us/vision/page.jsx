import CustomHero from '@/components/CustomHero'
import { getInnerPage } from '@/sanity/lib/fetcher'
import React from 'react'
import '@/styles/about-us/visionAndMissionPage.css'
import AboutRightList from '@/components/AboutRightList'
import BodyImage from '@/components/BodyImage'
import { textSpliter } from '@/constants'

export default async function page() {
  const pageData = await getInnerPage('vision-and-mission')
  return (
    <>
      <CustomHero 
        img={pageData.mainImage} 
        title={pageData.title} 
        color={pageData.color} 
      />
      <div className='vision__container container'>
        <div className='vision__content'>
          <h5 style={{color: pageData.color}}>{pageData.subHeader}</h5>
          <h2 style={{color: pageData.secondaryColor}}>{pageData.header}</h2>
          {
            textSpliter(pageData.text).map((paragraph, index) => (
              <p className='pages__body__paragraph' key={index}
              style={{
                color: index === 0 ? '#FFB842' : index === 2 ? '#65D2DE' : '#0F213F',
                fontSize: index === 0 || index === 2 ? '24px' : '14px',
                fontWeight: index === 0 || index === 2 ? '600' : '400'
              }}
              >{paragraph}</p>
            ))
          }
        </div>
        <AboutRightList />
      </div>
      <BodyImage img={pageData.bodyImage} />
    </>
  )
}
