import React from 'react'
import Video from './Video'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


gsap.registerPlugin(ScrollTrigger)
const HomeHeroText = () => {
    useGSAP(() => {
        gsap.from(".first1", {
            y: -400,
            delay: 2.1
        })
        gsap.from(".first2", {
            y: -400,
            delay: 2.2
        })
        gsap.from(".first3", {
            y: -400,
            delay: 2.3
        })
        gsap.from(".first4", {
            y: -400,
            delay: 2.3
        })
    })

    return (
        <div className='font-[font2] text-center font-semibold  lg:mt-5 mt-80 hover:text-[#D3FD50] relative'>
                <div className='  lg:text-[10vw] text-[17vw] uppercase lg:leading-[8vw] leading-[15vw] tracking-wider flex items-center justify-center  w-full text-center overflow-y-hidden'> <div className='first1 pt-2'> Build  </div></div>
                <div className='  lg:text-[10vw] text-[17vw] uppercase lg:leading-[8vw] leading-[15vw] tracking-wider flex items-center justify-center  w-full text-center overflow-y-hidden'> <div className='first2 pt-2' >  engine  </div></div>
                <div className='  lg:text-[10vw] text-[17vw] uppercase lg:leading-[8vw] leading-[15vw] tracking-wider flex items-center justify-center  w-full text-center overflow-y-hidden'><div className='first3  pt-2'>  fuel  </div> <br /> </div>
                <div className='  lg:text-[10vw] text-[17vw] uppercase lg:leading-[8vw] leading-[15vw] tracking-wider flex items-start justify-center  w-full text-center overflow-y-hidden'> <div className='first4 flex pt-2'> Gr <div className='lg:h-[7vw] lg:w-[7vw] h-[14vw] w-[14vw] rounded-full overflow-hidden' > <Video /> </div> wth. </div></div>
        </div>
    )
}

export default HomeHeroText
