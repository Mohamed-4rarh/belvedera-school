import CustomHero from '@/components/CustomHero'
import { getMainPage } from '@/sanity/lib/fetcher'
import React from 'react'

export default async function page() {
  const pageData = await getMainPage('life-and-learning')
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
