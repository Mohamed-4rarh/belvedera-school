import CustomHero from '@/components/CustomHero'
import { aboutUsPages } from '@/sanity/lib/fetcher'
import React from 'react'

export default async function page() {
  const visionPage = await aboutUsPages('vision-and-mission')
  return (
    <>
      <CustomHero 
        img={visionPage.mainImage} 
        title={visionPage.title} 
        color={visionPage.color} 
      />
    </>
  )
}
