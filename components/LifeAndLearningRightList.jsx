import Link from 'next/link'
import React from 'react'

export default function LifeAndLearningRightList() {
  return (
    <div className='explore__list'>
        <div className='explore__list-container'>
            <p>Explore this section</p>
            <p><Link href={'/life-and-learning'}>Life And Learning</Link></p>
            <ul>
                <li><Link href={'/life-and-learning/academic'}>Academic</Link></li>
                <li><Link href={'/life-and-learning/broad-curriculum'}>A Broad Curriculum</Link></li>
                <li>
                    <ul>
                        <li><Link href={'/life-and-learning/early-foundation'}>Early Years Foundation Stage</Link></li>
                        <li><Link href={'/life-and-learning/primary-stage'}>Primary Stage</Link></li>
                        <li><Link href={'/life-and-learning/secondary-school'}>Secondary School</Link></li>
                    </ul>
                </li>
                <li><Link href={'/life-and-learning/teaching-methodology'}>Teaching Methodology</Link></li>
                <li><Link href={'/life-and-learning/extra-curricular'}>Extra-curricular Activities</Link></li>
                <li>
                    <ul>
                        <li><Link href={'/life-and-learning/sports'}>Sports</Link></li>
                        <li><Link href={'/life-and-learning/music'}>Music</Link></li>
                        <li><Link href={'/life-and-learning/drama'}>Drama</Link></li>
                        <li><Link href={'/life-and-learning/art-and-design'}>Art & Design</Link></li>
                        <li><Link href={'/life-and-learning/trips'}>Trips</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
  )
}
