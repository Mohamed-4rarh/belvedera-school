import React from 'react'
import CustomHero from '@/components/CustomHero'
import PageCard from '@/components/PageCard'
import { aboutUs, aboutUsPages } from '@/sanity/lib/fetcher'
import '@/styles/about-us/aboutUs.css'
import Link from 'next/link'
import AboutRightList from '@/components/AboutRightList'

export default async function page() {
  const pageData = await aboutUs()
  const aboutPages = await aboutUsPages()
  return (
    <>
      <CustomHero img={pageData.mainImage} title={pageData.title} color={pageData.color} />
      <div className='container about__content'>
        <div className='about__content-content'>
          <h4>{pageData.subHeader}</h4>
          <h3>{pageData.header}</h3>
          <span>{pageData.writer}</span>
          <p>{pageData.text}</p>
        </div>
        <AboutRightList />
      </div>
      <div className='about__cards__section container'>
        {
          aboutPages?.map((pageData) => (
            <PageCard pageData={pageData} key={pageData.slug.current} />
          ))
        }
      </div>
    </>
  )
}
