import BodyImage from '@/components/BodyImage'
import CustomHero from '@/components/CustomHero'
import PagesCards from '@/containers/PagesCards'
import { getInnerPagesCards, getMainPage } from '@/sanity/lib/fetcher'
import React from 'react'
import '@/styles/life & learning/lifeAndLearning.css'
import LifeAndLearningRightList from '@/components/LifeAndLearningRightList'

export default async function page() {
  const pageData = await getMainPage('extra-curricula-activities')
  const nestedPages = await getInnerPagesCards('innerPages', 'extra_curricular')
  return (
    <>
      <CustomHero
        img={pageData.mainImage}
        title={pageData.title}
        color={pageData.color}
      />

      <div className='section__container container'>
        <div>
          <h2 className='page__header'>
            <span style={{color: pageData.secondaryColor, display: 'block'}}>{pageData.subHeader}</span>
            <span style={{color: pageData.color}}>{pageData.header}</span>
          </h2>
          <p className='pages__body__paragraph'>{pageData.text}</p>
        </div>
        <LifeAndLearningRightList />
      </div>
      <PagesCards pages={nestedPages} />
      <BodyImage
        img={pageData.bodyImage}
      />
    </>
  )
}
