import CustomHero from '@/components/CustomHero'
import PagesCards from '@/containers/PagesCards'
import { getInnerPagesCards, getMainPage } from '@/sanity/lib/fetcher'
import React from 'react'

export default async function page() {
  const pageData = await getMainPage('life-and-learning')
  const nestedPages = await getInnerPagesCards('mainPages', 'life_and_learning')
  console.log(pageData)
  return (
    <>
      <CustomHero
        img={pageData.mainImage}
        title={pageData.title}
        color={pageData.color}
      />
      <div>
        <div className="container">
          <p className='pages__body__paragraph'>{pageData.text}</p>
        </div>
      </div>
      <PagesCards pages={nestedPages} />
    </>
  )
}
