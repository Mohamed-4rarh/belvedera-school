import Image from 'next/image'
import React from 'react'
import '@/styles/life.css'

export default function Life() {
  return (
    <section className='life__section'>
        <div className='container'>
            <div className='life__content'>
                <span>Life & learning</span>
                <h2>Academic and Extra <br /> Curriculum</h2>
                <p>
                    At Belvedere School, Cairo pupils take ownership of what they learn by focusing on how the new knowledge solves a problem or adds value, instead of simply being given information and waiting for the correct answer. This preps them for their ever-changing future. Many of the jobs which our young people will be applying for in years to come have not even been invented yet.
                    <br />
                    We believe the ability to develop critical thinking skills and thinking flexibility, is vital.
                </p>
                {/* customized button */}
            </div>
            <div className='life__image'>
                <Image 
                    src={'/lifeHome.jpg'}
                    fill
                    unoptimized
                />
            </div>
        </div>
    </section>
  )
}
