import CustomHero from '@/components/CustomHero'
import LifeAndLearningRightList from '@/components/LifeAndLearningRightList'
import { getInnerPage } from '@/sanity/lib/fetcher'
import React from 'react'
import '@/styles/life & learning/secondarySchool.css'

export default async function page() {
  const pageData = await getInnerPage('secondary-school')
  return (
    <>
      <CustomHero
        img={pageData.mainImage}
        title={pageData.title}
        color={pageData.color}
      />

      <div className='scondary__section section__container container'>
        <div>
          <p className='pages__body__paragraph'>{pageData.text}</p>
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
