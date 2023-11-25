import CustomHero from '@/components/CustomHero'
import { aboutUsPages } from '@/sanity/lib/fetcher'
import React from 'react'

export default async function page() {
  const primaryPage = await aboutUsPages('aboutUs__primary')
  return (
    <>
      <CustomHero 
        img={primaryPage.mainImage} 
        title={primaryPage.title} 
        color={primaryPage.color} 
      />
    </>
  )
}
