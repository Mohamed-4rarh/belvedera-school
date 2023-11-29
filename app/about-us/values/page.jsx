import CustomHero from '@/components/CustomHero'
import { aboutUsPages, getInnerPage } from '@/sanity/lib/fetcher'
import React from 'react'
import BodyImage from '@/components/BodyImage'
import AboutRightList from '@/components/AboutRightList'
import '@/styles/about-us/valuesPage.css'
import { textSpliter } from '@/constants'
import Image from 'next/image'

export default async function page() {
  const pageData = await getInnerPage('values-and-ethos')
  return (
    <>
      <CustomHero 
        img={pageData.mainImage} 
        title={pageData.title} 
        color={pageData.color} 
      />
      <div className='values__container container'>
        <div className='values__content'>
          <h2>
            <span style={{color: pageData.color}}>{pageData.subHeader}</span> {' '}
            <span style={{color: pageData.secondaryColor}}>{pageData.header}</span>
          </h2>
          {
            textSpliter(pageData.text).map((paragraph, index) => (
              <p className='pages__body__paragraph' key={index}>{paragraph}</p>
            ))
          }
          <div className='values__image'>
            <Image src={'/valuesimage.jpg'} fill unoptimized />
          </div>
          <div className='values__squares'>
            <div className='values-square'>
              Synergy.
            </div>
            <div className='values-square'>
              Integrity.
            </div>
            <div className='values-square'>
              Respect.
            </div>
            <div className='values-square'>
              Growth.
            </div>
          </div>
          <div className='values-beliefs'>
            <h3>{pageData.subject}</h3>
            {
              textSpliter(pageData.subjectText).map((text, index) => (
                <p key={index} className='pages__body__paragraph'>{index + 1}- {text}</p>
              ))
            }
          </div>
          
        </div>
        <div className='values__right-side'>
          <AboutRightList />
               
        </div>
      </div>
      <BodyImage img={pageData.bodyImage} />
    </>
  )
}
