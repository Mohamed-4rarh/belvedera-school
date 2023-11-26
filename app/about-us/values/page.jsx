import CustomHero from '@/components/CustomHero'
import { aboutUsPages } from '@/sanity/lib/fetcher'
import React from 'react'
import BodyImage from '@/components/BodyImage'
import AboutRightList from '@/components/AboutRightList'
import '@/styles/about-us/valuesPage.css'

export default async function page() {
  const valuesPage = await aboutUsPages('values-and-ethos')
  const splited = valuesPage.beliefs.split(/\d+\./)
  return (
    <>
      <CustomHero 
        img={valuesPage.mainImage} 
        title={valuesPage.title} 
        color={valuesPage.color} 
      />
      <div className='values__container container'>
        <div className='values__content'>
          <h2>
            <span style={{color: valuesPage.color}}>{valuesPage.subHeader}</span> 
            <span style={{color: '#FFB842'}}>{valuesPage.header}</span>
          </h2>
          <p className='pages__body__paragraph'>{valuesPage.text}</p>
          <div className='values-beliefs'>
            Our Beliefs:
            {
              splited.filter(item => item.trim() !== '').map((item, index) => (
                <p key={index} className='pages__body__paragraph'>{index +1}- {item}</p>
              ))
            }
          </div>
          
        </div>
        <div className='values__right-side'>
          <AboutRightList />
               
        </div>
      </div>
      <BodyImage img={valuesPage.bodyImage} />
    </>
  )
}
