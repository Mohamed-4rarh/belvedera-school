import Image from 'next/image'
import React from 'react'
import '@/styles/about-us/aboutUs.css'
import HeroSection from '@/containers/about-us/heroSection'
import BodySection from '@/containers/about-us/BodySection'
import CardsSection from '@/containers/about-us/CardsSection'

export default function page() {
  return (
    <>
      <HeroSection />
      <BodySection />
      <CardsSection />
    </>
  )
}
