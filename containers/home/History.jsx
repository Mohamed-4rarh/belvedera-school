import Image from 'next/image'
import React from 'react'
import '@/styles/history.css'

export default function History() {
  return (
    <section className='history__section'>
        <div className='container'>
            <div className='history__content'>
                <span>Our History</span>
                <h2>143 Years of Premium <br /> British Education.</h2>
                <p>Belvedere School, Cairo is part of the leading UK-based Belvedere School. Established in 1880, the Belvedere School is an independent co-educational school that has been part of Liverpool’s educational landscape for more than 140 years.</p>
                <p>We share their legacy of quality and core beliefs, and we are proud of our close ties to Belvedere. We look forward to using their pedagogical know- how and incorporating the best of independent premium British education into our school.</p>
                <p>Belvedere School, Cairo is directly overseen by Belvedere School in the UK to ensure the school reflects the policies, academic excellence, and teaching quality that represent Belvedere UK. Teacher training will be conducted under the guidance of Belvedere School UK to maintain the same level of teaching and learning.</p>
                {/* customized button */}
            </div>
            <div className='history__image'>
                <Image
                    src={'/history.jpg'}
                    fill
                    unoptimized
                    className='history-image'
                />
            </div>
        </div>
    </section>
  )
}
