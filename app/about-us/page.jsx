import React from 'react'
import CustomHero from '@/components/CustomHero'
import PageCard from '@/components/PageCard'
import { getMainPage } from '@/sanity/lib/fetcher'
import '@/styles/about-us/aboutUs.css'
import AboutRightList from '@/components/AboutRightList'
import { textSpliter } from '@/constants'

export default async function page() {
  const pageData = await getMainPage('about-us')
  return (
    <>
      <CustomHero 
        img={pageData.mainImage} 
        title={pageData.title} 
        color={pageData.color} 
      />
      <div className='container about__content'>
        <div className='about__content-content'>
          <h4>{pageData.subHeader}</h4>
          <h3>{pageData.header}</h3>
          {
            textSpliter(pageData.text).map((paragraph, index) => (
              <p key={index} className='pages__body__paragraph'>{paragraph}</p>
            ))
          }
        </div>
        <AboutRightList />
      </div>
      {/* <div className='about__cards__section container'>
        {
          aboutPages?.map((pageData) => (
            <PageCard pageData={pageData} key={pageData.slug.current} />
          ))
        }
      </div> */}
    </>
  )
}
