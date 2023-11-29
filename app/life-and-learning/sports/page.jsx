import BodyImage from '@/components/BodyImage'
import CustomHero from '@/components/CustomHero'
import LifeAndLearningRightList from '@/components/LifeAndLearningRightList'
import { getInnerPage } from '@/sanity/lib/fetcher'
import React from 'react'

export default async function page() {
  const pageData = await getInnerPage('sport')
  return (
    <>
      <CustomHero 
        img={pageData.mainImage}
        title={pageData.title}
        color={pageData.color}
      />

      <div className='section__container container'>
        <div>
          <p className="pages__body__paragraph">{pageData.text}</p>
        </div>
        <LifeAndLearningRightList />
      </div>

      <BodyImage img={pageData.bodyImage} />
    </>
  )
}
