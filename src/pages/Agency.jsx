import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from 'react'

const Agency = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)


  const imageArray = [
    '/images/mannan.png',
    '/images/jawad2.png',
    '/images/moiz1.png',
    '/images/mannan2.png',
    '/images/jawad1.png',
    '/images/moiz2.png',
    '/images/mannan.png',
    '/images/jawad2.png',
    '/images/moiz2.png',
    '/images/mannan.png',
    '/images/jawad1.png',
    '/images/moiz2.png',
    '/images/jawad2.png',
    '/images/mannan.png',
    '/images/moiz2.png',
  ]

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 27.3%",
        end: "top -70%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          const imageIndex = Math.floor(elem.progress * 12)
          imageRef.current.src = imageArray[imageIndex]
        }
      }

    })
  })

  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.to(sectionRef.current, {
      backgroundColor: '#000000',
      color: '#ffffff',
      scrollTrigger: {
        trigger: ".section-2",
        start: 'top center',   // when top of section hits center of viewport
        end: 'bottom center',  // when bottom of section hits center of viewport
        scrub: true,           // ties animation to scroll position smoothly
        // markers: true,       // uncomment to see start/end markers while debugging
      }
    })
  }, [])





  return (
    <div ref={sectionRef} className='h-full' >
      <div className='section-1 p-1' >
        <div ref={imageDivRef} className='lg:rounded-3xl rounded-xl absolute overflow-hidden lg:top-65 -top-0 lg:left-[31vw] left-[22vw] lg:h-[19vw] h-[25vw] lg:w-[15vw] w-[20vw]'>
          <img ref={imageRef} className='h-full w-full object-cover' src="/images/mannan.png" alt="" />
        </div>
        <div className=' relative font-[font1] text-black'>
          <div className=' lg:mt-[55vh] mt-[30vh]'>
            <h1 className='text-[20vw] uppercase leading-[16vw] text-center'>Minds Behind It</h1>
          </div>
          <div className='lg:pl-[45%] lg:mt-20 py-7 px-4 '>
            <p className='lg:text-[3vw] text-xl lg:leading-[3vw] leading-tight font-semibold'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our curiosity fuels our creativity. We stay grounded, leave ego behind, and focus on what truly matters. A brand is more than just visuals or marketing — it carries values, character, and a story of its own. Ignoring that may bring temporary success, but it weakens the brand over time. That’s why we focus on creating meaningful perspectives and building brands that leave a lasting impact.</p>
          </div>
        </div>
      </div>

      <div className=' section-2 font-semibold tracking-wide lg:mt-20 mt-35 h-full lg:px-50 px-10 lg:text-[1vw] font-[font1] '>
        <div className='flex lg:gap-116 gap-30 lg:pb-50 pb-20 sm:pt-5'>
          <h1>Expertise</h1>
          <ul>
            <li>Strategy</li>
            <li>Advertisement</li>
            <li>Branding</li>
            <li>Design</li>
            <li>Development</li>
            <li>Content</li>
          </ul>
        </div>
        <div className='lg:flex lg:mb-100'>
          <p className='lg:w-320  lg:pr-7 pb-5'>Our projects are born in humility, grow in curiosity and live thanks to creativity in all its forms.</p>
          <p className='pr-7 pb-5'>Our creative process thrives in an environment where talent is encouraged to explode. Where we feel free to be the best version of ourselves.</p>
          <p className='pb-5'>Our culture is openness to others. Period. The entire crew participates in building an agency we are proud of.</p>
        </div>
      </div>



      <div className='h-[60vh] lg:h-screen overflow-hidden relative flex items-center justify-center '>

        {/* BEHIND image — Jawad */}
        <div className='marqueeBack  absolute lg:text-9xl text-2xl font-semibold w-full flex lg:z-0 z-20 lg:top-80 top-40 '>
          {[...Array(6)].map((_, i) => (
              <h1 key={i} className='whitespace-nowrap shrink-0 text-[#D3FD50] font-[font1]'>
              Jawad&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </h1>
            
          ))}
        </div>

        {/* IMAGE — middle layer */}
        <div className='flex h-full  justify-center items-center relative z-10'>
          <img className='object-cover lg:h-[80vh] lg:w-[25vw] h-[40vh] w-[40vw] rounded-3xl' src="/images/jawad2.png" alt="" />
        </div>

        {/* IN FRONT of image — Ahmed + Creative Director */}
        <div className='marqueeFront absolute w-full font-semibold flex items-center z-20 lg:bottom-80 bottom-40  '>
          {[...Array(6)].map((_, i) => (
            
            <div key={i} className='flex items-center shrink-0 gap-6'>
              
              <h1 className='whitespace-nowrap lg:text-9xl text-2xl text-[#D3FD50] font-[font1]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ahmed</h1>
              <p className='whitespace-nowrap text-white lg:text-4xl'>Project Manager </p>
              
            </div>
          ))}
        </div>

      </div>






      <div className='h-[60vh] lg:h-screen overflow-hidden relative flex items-center justify-center'>

        {/* BEHIND image — Abdul*/}
        <div className='marqueeBack  absolute lg:text-9xl text-2xl font-semibold w-full flex lg:z-0 z-20 lg:top-80 top-40 '>
          {[...Array(6)].map((_, i) => (
              <h1 key={i} className='whitespace-nowrap shrink-0 text-[#D3FD50] font-[font1]'>
              Abdul&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </h1>
            
          ))}
        </div>

        {/* IMAGE — middle layer */}
        <div className='flex h-full   justify-center items-center relative z-10'>
          <img className='object-cover lg:h-[80vh] lg:w-[25vw] h-[40vh] w-[40vw] rounded-3xl' src="/images/mannan.png" alt="" />
        </div>

        {/* IN FRONT of image — Abdul + Strategic Planner */}
        <div className='marqueeFront absolute w-full font-semibold flex items-center z-20 lg:bottom-80 bottom-40 '>
          {[...Array(6)].map((_, i) => (
            
            <div key={i} className='flex items-center shrink-0 gap-6'>
              
              <h1 className='whitespace-nowrap lg:text-9xl text-2xl text-[#D3FD50] font-[font1]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mannan</h1>
              <p className='whitespace-nowrap text-white lg:text-4xl'>Relationship Manager </p>
              
            </div>
          ))}
        </div>

      </div>





      <div className='h-[60vh] lg:h-screen overflow-hidden relative flex items-center justify-center'>

        {/* BEHIND image — Abdul */}
        <div className='marqueeBack  absolute lg:text-9xl text-2xl font-semibold w-full flex lg:z-0 z-20 lg:top-80 top-40 '>
          {[...Array(6)].map((_, i) => (
              <h1 key={i} className='whitespace-nowrap shrink-0 text-[#D3FD50] font-[font1]'>
              Abdul&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </h1>
            
          ))}
        </div>

        {/* IMAGE — middle layer */}
        <div className='flex h-full  justify-center items-center relative z-10'>
          <img className='object-cover lg:h-[80vh] lg:w-[25vw] h-[40vh] w-[40vw] rounded-3xl' src="/images/moiz2.png" alt="" />
        </div>

        {/* IN FRONT of image — Ahmed + Creative Director */}
        <div className='marqueeFront absolute w-full font-semibold flex items-center z-20 lg:bottom-80 bottom-40  '>
          {[...Array(6)].map((_, i) => (
            
            <div key={i} className='flex items-center shrink-0 gap-6'>
              
              <h1 className='whitespace-nowrap lg:text-9xl text-2xl text-[#D3FD50] font-[font1]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Moiz</h1>
              <p className='whitespace-nowrap text-white lg:text-4xl'>Creative Design </p>
              
            </div>
          ))}
        </div>

      </div>

      {/* <div className='h-screen overflow-hidden relative '>
        <div className=' flex h-full  justify-center items-center'>
          <img className='object-cover h-[80vh] overflow-hidden rounded-3xl' src="/images/jawad1.png" alt="" />
        </div>
        <div className='absolute'>
          <h1 className='first text-[#D3FD50] z-100 font-[font1]'>Jawad </h1>
          <h1 className='second text-[#D3FD50] z-100 font-[font1]'>Ahmed </h1>
          <p className='text-white'>Creative Director</p>
        </div>
      </div> */}
    </div>
  )
}


export default Agency
