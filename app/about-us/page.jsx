import React from 'react'
import CustomHero from '@/components/CustomHero'
import PageCard from '@/components/PageCard'
import { aboutUs, aboutUsPages } from '@/sanity/lib/fetcher'
import '@/styles/about-us/aboutUs.css'
import Link from 'next/link'

export default async function page() {
  const pageData = await aboutUs()
  const aboutPages = await aboutUsPages()
  return (
    <>
      <CustomHero img={pageData.mainImage} title={pageData.title} color={pageData.color} />
      <section className='container about__content'>
        <div className='about__content-content'>
          <h4 className='about__content-header'>{pageData.subHeader}</h4>
          <h3 className='about__content-header'>{pageData.header}</h3>
          <span>{pageData.writer}</span>
          <p>{pageData.text}</p>
        </div>
        <div className='about__content-explore'>
          <div>
            <p>Explore this section</p>
            <p>About Us</p>
            <ul>
              <li><Link href={'/about-us/primary'}>Primary Head’s Welcome</Link></li>
              <li><Link href={'/about-us/history'}>Our History</Link></li>
              <li><Link href={'/about-us/vision'}>Vision & Mission</Link></li>
              <li><Link href={'/about-us/values'}>Values and Ethos</Link></li>
            </ul>
          </div>
        </div>
      </section>
      <section className='about__cards__section'>
        <div className='about__cards-container container'>
          {
            aboutPages?.map((pageData) => (
              <PageCard pageData={pageData} key={pageData.slug.current} />
            ))
          }
        </div>
      </section>
    </>
  )
}
