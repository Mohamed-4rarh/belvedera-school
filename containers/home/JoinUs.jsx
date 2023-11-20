import Image from 'next/image'
import React from 'react'
import '@/styles/joinUsHome.css'

export default function JoinUs() {
  return (
    <section className='joinUs__section'>
        <div className='container'>
            <div className='joinUs__image'>
                <Image 
                    src={'/joinHome.jpg'}
                    fill
                    unoptimized
                    className='joinUs-image'
                />
            </div>
            <div className='joinUs__content'>
                <span>Admissions</span>
                <h2><span>Join</span> us at Belvedere <br /> school cairo </h2>
                <p>and embark on a journey of discovery, growth, and achievement. Together, we will empower your child to thrive academically, flourish creatively, and become a confident, compassionate, and well-rounded individual ready to make a positive impact on the world.</p>
                {/* customized buttons */}
            </div>
        </div>
    </section>
  )
}
