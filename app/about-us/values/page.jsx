import CustomHero from '@/components/CustomHero'
import { aboutUsPages } from '@/sanity/lib/fetcher'
import React from 'react'

export default async function page() {
  const valuesPage = await aboutUsPages('values-and-ethos')
  return (
    <>
      <CustomHero 
        img={valuesPage.mainImage} 
        title={valuesPage.title} 
        color={valuesPage.color} 
      />
    </>
  )
}
