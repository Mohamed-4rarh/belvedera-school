import BodyImage from '@/components/BodyImage'
import CustomHero from '@/components/CustomHero'
import LifeAndLearningRightList from '@/components/LifeAndLearningRightList'
import PagesCards from '@/containers/PagesCards'
import { getInnerPagesCards, getMainPage } from '@/sanity/lib/fetcher'
import React from 'react'

export default async function page() {
  const pageData = await getMainPage('a-broad-curriculum')
  const nestedPages = await getInnerPagesCards('innerPages', 'broad-curricular')
  return (
    <>
      <CustomHero
        img={pageData.mainImage}
        title={pageData.title}
        color={pageData.color}
      />
      <div className='section__container container'>
        <div>
          <p className='pages__body__paragraph'>{pageData.text}</p>
          <PagesCards pages={nestedPages} />
        </div>
        <LifeAndLearningRightList />
      </div>
      
      <BodyImage
        img={pageData.bodyImage}
      />
    </>
  )
}
