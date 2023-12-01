import CustomHero from '@/components/CustomHero'
import LifeAndLearningRightList from '@/components/LifeAndLearningRightList'
import { textSpliter } from '@/constants'
import { getInnerPage } from '@/sanity/lib/fetcher'
import React from 'react'
import '@/styles/life & learning/earlyFoundation.css'

export default async function page() {
  const pageData = await getInnerPage('early-years-foundation-stage')
  return (
    <>
      <CustomHero
        img={pageData.mainImage}
        title={pageData.title}
        color={pageData.color}
      />

      <div className='early__foundation section__container container'>
        <div>
          {
            textSpliter(pageData.text).map((paragraph, index) => (
              <p className='pages__body__paragraph' key={index}>{paragraph}</p>
            ))
          }
          <h2 className='page__header'>
            <span style={{color: pageData.color}}>{pageData.subHeader}</span>
            <span style={{color: pageData.secondaryColor}}>{pageData.header}</span>
          </h2>
          <p className='pages__body__paragraph'>{pageData.subjectText}</p>
        </div>
        <div>
          <LifeAndLearningRightList />
        </div>
      </div>
    </>
  )
}
