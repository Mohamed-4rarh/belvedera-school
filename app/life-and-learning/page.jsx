import CustomHero from '@/components/CustomHero'
import PagesCards from '@/containers/PagesCards'
import { getInnerPagesCards, getMainPage } from '@/sanity/lib/fetcher'
import React from 'react'
import '@/styles/life & learning/lifeAndLearning.css'
import LifeAndLearningRightList from '@/components/LifeAndLearningRightList'

export default async function page() {
  const pageData = await getMainPage('life-and-learning')
  const nestedPages = await getInnerPagesCards('mainPages', 'life_and_learning')
  return (
    <>
      <CustomHero
        img={pageData.mainImage}
        title={pageData.title}
        color={pageData.color}
      />
      <div className='section__container container'>
        <div className="container">
          <p className='pages__body__paragraph'>{pageData.text}</p>
        </div>
        <LifeAndLearningRightList />
      </div>
      <PagesCards pages={nestedPages} />
    </>
  )
}
