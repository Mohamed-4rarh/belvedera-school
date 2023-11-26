import CustomHero from '@/components/CustomHero'
import { aboutUsPages } from '@/sanity/lib/fetcher'
import React from 'react'
import '@/styles/about-us/visionAndMissionPage.css'
import AboutRightList from '@/components/AboutRightList'
import BodyImage from '@/components/BodyImage'

export default async function page() {
  const visionPage = await aboutUsPages('vision-and-mission')
  return (
    <>
      <CustomHero 
        img={visionPage.mainImage} 
        title={visionPage.title} 
        color={visionPage.color} 
      />
      <div className='vision__container container'>
        <div className='vision__content'>
          <h5>{visionPage.subHeader}</h5>
          <h2>{visionPage.header}</h2>
          <p className='pages__body__paragraph'>{visionPage.text}</p>
          <h3>Our Vision</h3>
          <p>{visionPage.vision}</p>
          <h3>Our Mission</h3>
          <p className='pages__body__paragraph'>{visionPage.mission}</p>
        </div>
        <AboutRightList />
      </div>
      <BodyImage img={visionPage.bodyImage} />
    </>
  )
}
