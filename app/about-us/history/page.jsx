import CustomHero from '@/components/CustomHero'
import { aboutUsPages } from '@/sanity/lib/fetcher'
import React from 'react'

export default async function page() {
  const historyPage = await aboutUsPages('our-history')
  return (
    <>
      <CustomHero
        img={historyPage.mainImage}
        title={historyPage.title}
        color={historyPage.color}
      />
    </>
  )
}
