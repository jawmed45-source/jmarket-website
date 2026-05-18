import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font2] text-center font-semibold  lg:mt-5 mt-80 hover:text-[#D3FD50]'>
                <div className='lg:text-[10vw] text-[17vw] uppercase lg:leading-[8vw] leading-[15vw] tracking-wider flex items-center justify-center'> Build <br />Engine</div>
                <div className='lg:text-[10vw] text-[17vw] uppercase lg:leading-[8vw] leading-[15vw] tracking-wider flex items-center justify-center'>Fuel  <br /> </div>
                <div className='lg:text-[10vw] text-[17vw] uppercase lg:leading-[8vw] leading-[15vw] tracking-wider flex items-start justify-center'>Gr <div className='lg:h-[7vw] lg:w-[7vw] h-[14vw] w-[14vw] rounded-full overflow-hidden' > <Video /> </div> wth.</div>
        </div>
    )
}

export default HomeHeroText
