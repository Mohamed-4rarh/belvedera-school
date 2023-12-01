import CustomHero from '@/components/CustomHero'
import LifeAndLearningRightList from '@/components/LifeAndLearningRightList'
import { textSpliter } from '@/constants'
import { getMainPage } from '@/sanity/lib/fetcher'
import React from 'react'
import '@/styles/life & learning/academic.css'
import BodyImage from '@/components/BodyImage'

export default async function page() {
  const pageData = await getMainPage('academic')
  return (
    <>
      <CustomHero 
        img={pageData.mainImage}
        title={pageData.title}
        color={pageData.color}
      />

      <div className='academic__section section__container container'>
        <div>
          <h2 className='page__header'>
            <span style={{color: pageData.secondaryColor}}>{pageData.subHeader}</span>
            <span style={{color: pageData.color}}>{pageData.header}</span>
          </h2>
          {
            textSpliter(pageData.text).map((p, i) => (
              <p className='pages__body__paragraph' key={i}>{p}</p>
            ))
          }
        </div>
        <div>
          <LifeAndLearningRightList />
        </div>
      </div>

      <BodyImage img={pageData.bodyImage} />
    </>
  )
}
