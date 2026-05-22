import { useGSAP } from '@gsap/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { NavbarContext } from '../../context/Navcontext'
import { useNavigate } from 'react-router-dom'

const FullScreenNav = () => {
  const fullNavLinkRef = useRef(null)
  const fullScreenRef = useRef(null)

  const { NavOpen, setNavOpen } = useContext(NavbarContext)
  const navigate = useNavigate()

  const handleNavClick = (path) => {
    setNavOpen(false)
    setTimeout(() => {
      navigate(path)
    }, 800)
  }

  // useGSAP(function () {
  //   const tl = gsap.timeline()

  //   tl.from('.stairing', {
  //     height: 0,
  //     stagger: {
  //       amount: -0.2
  //     }
  //   })
  //   tl.from(fullNavLinkRef.current, {
  //     opacity: 0,
  //   })
  //   tl.from('.link', {
  //     opacity: 0,
  //     rotateX: 90,
  //     stagger: {
  //       amount: 0.2
  //     }
  //   })

  //   tl.pause()
  //   if (NavOpen) {
  //     gsap.to('.fullscreenRef', {
  //       display: 'block'
  //     })
  //     gsapAnimation()
  //   }
  //   else {
  //     gsap.to('.fullscreenRef', {
  //       display: 'none'
  //     })
  //   }
  // },[NavOpen])

  function gsapAnimation() {
    const tl = gsap.timeline()
    tl.to('.fullscreennav', {
      display: 'block'
    })
    tl.to('.stairing', {
      delay: 0.2,
      height: '100%',
      stagger: {
        amount: -0.3
      }
    })
    tl.to('.link', {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3
      }
    })
    tl.to('.navlink', {
      opacity: 1
    })
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline()
    tl.to('.link', {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1
      }
    })
    tl.to('.stairing', {
      height: 0,
      stagger: {
        amount: 0.1
      }
    })
    tl.to('.navlink', {
      opacity: 0
    })
    tl.to('.fullscreennav', {
      display: 'none',
    })
  }

  useGSAP(function () {
    if (NavOpen) {

      gsapAnimation()
    } else {

      gsapAnimationReverse()

    }
  }, [NavOpen])


  useEffect(() => {
    if (NavOpen) {
      document.body.style.overflow = 'hidden'  // lock scroll when nav opens
    } else {
      document.body.style.overflow = 'auto'    // restore when nav closes
    }

    return () => {
      document.body.style.overflow = 'auto'    // cleanup on unmount
    }
  }, [NavOpen])



  return (
    <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav hidden  z-200 h-screen w-full overflow-hidden text-white  absolute'>
      <div className='h-screen w-full fixed'>
        <div className='h-full w-full flex'>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
        </div>
      </div>
      <div ref={fullNavLinkRef} className='relative '>
        <div className='navlink flex w-full justify-between lg:p-5 py-2 items-start'>
          <div className='w-15 h-10 m-4'>
            <img src="/images/logo.png" alt="Logo" className=' h-full w-full' />
          </div>
          <div onClick={() => {
            setNavOpen(false)
          }} className='relative lg:h-32 lg:w-32 h-10 w-10 lg:mr-0 mr-2  cursor-pointer '>
            <div className='lg:h-44 lg:w-1 h-14 w-[2px] -rotate-45 origin-top absolute bg-[#D3FD50]'></div>
            <div className='lg:h-44 lg:w-1 h-14 w-[2px] right-0 rotate-45 origin-top absolute bg-[#D3FD50]'></div>
          </div>
        </div>

        <div className=''>
          
          <div id='Projects' className='h-full origin-top link relative border-t-1 border-white lg:mt-0 mt-30'> 
            <h1  className='font-[font2] lg:text-[6vw] text-[12vw] text-center uppercase font-semibold   ' >projects</h1>
            <div onClick={() => handleNavClick('/projects')} className=' moveLink absolute flex top-0 bg-[#D3FD50] text-black'>
              <div className='moveX flex items-center cursor-pointer' >
                <h2 className='whitespace-nowrap font-[font2] text-[6vw] text-center uppercase font-semibold '>to See Everything ★</h2>
                <h2 className='whitespace-nowrap  font-[font2] text-[6vw] text-center uppercase font-semibold '>to See Everything ★</h2>
                

              </div>
              <div className='moveX flex items-center cursor-pointer'>
                <h2 className='whitespace-nowrap font-[font2] text-[6vw] text-center uppercase font-semibold '>to See Everything ★</h2>
                <h2 className='whitespace-nowrap  font-[font2] text-[6vw] text-center uppercase font-semibold '>to See Everything ★</h2>

              </div>
            </div>
          </div>

          
          <div id='Agency' className='origin-top link relative border-t-1 border-white'>
            <h1 className='font-[font2] lg:text-[6vw] text-[12vw] text-center uppercase font-semibold '>Agency</h1>
            <div onClick={() => handleNavClick('/agency')} className=' moveLink absolute flex top-0 bg-[#D3FD50] text-black'>
              <div className='moveX flex items-center cursor-pointer'>
                <h2 className='whitespace-nowrap font-[font2] text-[6vw] text-center uppercase font-semibold '>to know Everything</h2>
                <img className='h-17 w-60 object-cover rounded-full shrink-0' src="/images/jawad1.png" alt="" />
                <h2 className='whitespace-nowrap  font-[font2] text-[6vw] text-center uppercase font-semibold '>to know Everything</h2>
                <img className='h-17 w-60 object-cover rounded-full shrink-0' src="/images/mannan.png" alt="" />

              </div>
              <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[6vw] text-center uppercase font-semibold '>to know Everything</h2>
                <img className='h-17 w-60 object-cover rounded-full shrink-0' src="/images/jawad1.png" alt="" />
                <h2 className='whitespace-nowrap  font-[font2] text-[6vw] text-center uppercase font-semibold '>to know Everything</h2>
                <img className='h-17 w-60 object-cover rounded-full shrink-0' src="/images/mannan.png" alt="" />

              </div>
            </div>
          </div>



          <div id='Contact' className=' origin-top link relative border-t-1 border-white'>
            <h1 className='font-[font2] lg:text-[6vw] text-[12vw] text-center uppercase font-semibold '>contact</h1>
            <div onClick={() => handleNavClick('/contact')} className=' moveLink absolute flex top-0 bg-[#D3FD50] text-black'>
              <div className='moveX flex items-center cursor-pointer'>
                <h2 className='whitespace-nowrap font-[font2] text-[6vw] text-center uppercase font-semibold '>to contact us ☎</h2>
                <h2 className='whitespace-nowrap  font-[font2] text-[6vw] text-center uppercase font-semibold '>to contact us ☎</h2>

              </div>
              <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[6vw] text-center uppercase font-semibold '>to contact us ☎</h2>
                <h2 className='whitespace-nowrap  font-[font2] text-[6vw] text-center uppercase font-semibold '>to contact us☎</h2>

              </div>
            </div>
          </div>


          <div id='Blog' className='origin-top link relative border-y-1 border-white'>
            <h1 className='font-[font2] lg:text-[6vw] text-[12vw] text-center uppercase font-semibold '>blog</h1>
            <div onClick={() => handleNavClick('/blog')} className=' moveLink absolute flex top-0 bg-[#D3FD50] text-black'>
              <div className='moveX flex items-center cursor-pointer'>
                <h2 className='whitespace-nowrap font-[font2] text-[6vw] text-center uppercase font-semibold '>to learn anything</h2>
                <img className='h-17 w-60 object-cover rounded-full shrink-0' src="/images/jawad1.png" alt="" />
                <h2 className='whitespace-nowrap  font-[font2] text-[6vw] text-center uppercase font-semibold '>to learn anything</h2>
                <img className='h-17 w-60 object-cover rounded-full shrink-0' src="/images/mannan.png" alt="" />

              </div>
              <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[6vw] text-center uppercase font-semibold '>to learn anything</h2>
                <img className='h-17 w-60 object-cover rounded-full shrink-0' src="/images/jawad1.png" alt="" />
                <h2 className='whitespace-nowrap  font-[font2] text-[6vw] text-center uppercase font-semibold '>to learn anything</h2>
                <img className='h-17 w-60 object-cover rounded-full shrink-0' src="/images/mannan.png" alt="" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullScreenNav
