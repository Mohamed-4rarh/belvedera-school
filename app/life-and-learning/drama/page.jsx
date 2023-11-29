import BodyImage from '@/components/BodyImage'
import CustomHero from '@/components/CustomHero'
import LifeAndLearningRightList from '@/components/LifeAndLearningRightList'
import { textSpliter } from '@/constants'
import { getInnerPage } from '@/sanity/lib/fetcher'
import React from 'react'

export default async function page() {
  const pageData = await getInnerPage('drama')
  return (
    <>
      <CustomHero 
        img={pageData.mainImage}
        title={pageData.title}
        color={pageData.color}
      />

      <div className='section__container container'>
        <div>
          <h2 className='page__header' style={{color: pageData.color}}>
            <span style={{color: pageData.secondaryColor, display: 'block'}}>{pageData.subHeader}</span>
            {pageData.header}
          </h2>
          {
            textSpliter(pageData.text).map((item, index) => (
              <p className="pages__body__paragraph" key={index}>{item}</p>
            ))
          }
        </div>
        <LifeAndLearningRightList />
      </div>

      <BodyImage img={pageData.bodyImage} />
    </>
  )
}
