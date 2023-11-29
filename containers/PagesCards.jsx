import PageCard from '@/components/PageCard'
import React from 'react'

export default function PagesCards({pages}) {
  return (
    <div className='container pages__cards-container'>
        {
            pages?.map((page) => (
                <PageCard
                    key={page.title} 
                    img={page.mainImage}
                    title={page.title}
                    text={page.text}
                    path={page.path}
                    color={page.color}
                />
            ))
        }
    </div>
  )
}
