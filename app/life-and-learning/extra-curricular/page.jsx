import CustomHero from '@/components/CustomHero'
import { getMainPage } from '@/sanity/lib/fetcher'
import React from 'react'

export default async function page() {
  const pageData = await getMainPage('extra-curricula-activities')
  return (
    <>
      <CustomHero
        img={pageData.mainImage}
        title={pageData.title}
        color={pageData.color}
      />
    </>
  )
}
