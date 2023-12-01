import CustomHero from '@/components/CustomHero'
import LifeAndLearningRightList from '@/components/LifeAndLearningRightList'
import { getMainPage } from '@/sanity/lib/fetcher'
import React from 'react'
import '@/styles/life & learning/teachingMethodology.css'
import BodyImage from '@/components/BodyImage'

export default async function page() {
  const pageData = await getMainPage('teaching-methodology')
  return (
    <>
      <CustomHero
        img={pageData.mainImage}
        title={pageData.title}
        color={pageData.color}
      />

      <div className='teaching-methodology__section section__container container'>
        <div>
          <h2 className='page__header'>
            <span style={{color: pageData.color}}>{pageData.subHeader}</span>
            <span style={{color: pageData.secondaryColor}}>{pageData.header}</span>
          </h2>
          <p className='pages__body__paragraph'>{pageData.text}</p>
          <h2 className='page__header'>
            <span>STEAM</span>
            <span>EDUCATION</span>
          </h2>
        </div>
        <div>
          <LifeAndLearningRightList />
        </div>
      </div>

      <BodyImage img={pageData.bodyImage} />
    </>
  )
}
