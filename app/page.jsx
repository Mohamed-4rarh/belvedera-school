import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Hero from '@/containers/home/Hero'
import History from '@/containers/home/History'
import Life from '@/containers/home/Life'
import JoinUs from '@/containers/home/JoinUs'

export default function Home() {
  return(
    <>
      <Hero />
      <History />
      <Life />
      <JoinUs />
    </>
  )
}
