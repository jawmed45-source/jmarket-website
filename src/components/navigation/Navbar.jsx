import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../../context/Navcontext'
import { NavbarColorContext } from '../../context/Navcontext'
import { useNavigate, useLocation } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  const navGreenRef = useRef(null)
  const navGreenRef2 = useRef(null)
  const navtextRefPro = useRef(null)
  const navtextRefAge = useRef(null)
  const navtextRefMenu = useRef(null)
  const navGreenRef3 = useRef(null)
  const navGreenline1 = useRef(null)
  const navGreenline2 = useRef(null)
  const { NavOpen, setNavOpen } = useContext(NavbarContext)
  const { NavColor, setNavColor } = useContext(NavbarColorContext)
  const location = useLocation().pathname
  const navigate = useNavigate()


  const isSpecialPage = location === '/agency' || location === '/projects'

  const handleNavClick = (path) => {
    setNavOpen(false)
    setTimeout(() => {
      navigate(path)
    }, 800)
  }

  useGSAP(() => {
    gsap.from(".menu-link", {
      y: -400,
      delay: 1.9,
      duration: 0.7,
    })

    gsap.from(".agency-link", {
      y: -400,
      delay: 2.1,
      duration: 0.7,
    })

    gsap.from(".projects-link", {
      y: -400,
      delay: 2.2,
      duration: 0.7,
    })



    // ✅ Kill all previous ScrollTriggers to avoid conflicts on route change
    ScrollTrigger.getAll().forEach(st => st.kill())

    // ✅ Set initial heights via GSAP — not Tailwind
    const isMobile = window.innerWidth < 1024
    if (!isMobile) {
      gsap.set('.menu-link', { height: isSpecialPage ? 140 : 64 })
    }
    else {
      gsap.set('.menu-link', { height: 58 })  // ✅ your mobile height here
    }
    gsap.set('.projects-link', { height: isSpecialPage ? 50 : 0 })   // your value
    gsap.set('.agency-link', { height: isSpecialPage ? 90 : 0 })

    gsap.to(['.projects-link', '.agency-link'], {
      height: 0,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top-=10',
        toggleActions: 'play none none reverse',
      }
    })
    gsap.to('.menu-link', {
      height: 60,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top-=10',
        toggleActions: 'play none none reverse',
      }
    })

    // ✅ Only animate menu text if ref exists (special pages only)
    if (navtextRefMenu.current) {
      gsap.to(navtextRefMenu.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top-=10',
          toggleActions: 'play none none reverse',
        }
      })
    }

    // ✅ Refresh after setup
    ScrollTrigger.refresh()

  }, [location]) // ✅ re-runs on every route change

  return (
    <div className='z-4 flex justify-between items-start top-0 fixed w-full'>
      <div onClick={() => handleNavClick('/')} className='w-22 h-16 lg:m-4 m-2 cursor-pointer'>
        <img src={NavColor} alt="Logo" className='h-full w-full' />
      </div>

      <div className='flex'>

        {/* Projects link */}
        <div className='hidden lg:block'>
          {isSpecialPage && (
            <div
              onClick={() => navigate('/projects')}
              onMouseEnter={() => {
                navGreenRef3.current.style.height = '100%'
                navtextRefPro.current.style.color = 'black'
                navtextRefPro.current.style.zIndex = '90'
              }}
              onMouseLeave={() => {
                navGreenRef3.current.style.height = '0%'
                navtextRefPro.current.style.color = 'white'
                navtextRefPro.current.style.zIndex = '10'
              }}
              className='projects-link cursor-pointer bg-black lg:w-[20vw] w-35 relative flex items-end overflow-hidden'>
              <h1 ref={navtextRefPro} className='font-[font1] text-xl pl-3 uppercase font-bold text-white'>Projects</h1>
              <div ref={navGreenRef3} className='transition-all bg-[#D3FD50] absolute top-0 h-0 w-full'></div>
            </div>
          )}
        </div>

        {/* Agency link */}
        <div className='hidden lg:block'>
          {isSpecialPage && (
            <div
              onClick={() => navigate('/agency')}
              onMouseEnter={() => {
                navGreenRef2.current.style.height = '100%'
                navtextRefAge.current.style.color = 'black'
                navtextRefAge.current.style.zIndex = '90'
              }}
              onMouseLeave={() => {
                navGreenRef2.current.style.height = '0%'
                navtextRefAge.current.style.color = 'white'
                navtextRefAge.current.style.zIndex = '10'
              }}
              className='agency-link cursor-pointer bg-black lg:w-[27.5vw] w-35 relative flex items-end overflow-hidden'>
              <h1 ref={navtextRefAge} className='font-[font1] text-xl pl-3 uppercase font-bold text-white'>Agency</h1>
              <div ref={navGreenRef2} className='transition-all bg-[#D3FD50] absolute top-0 h-0 w-full'></div>
            </div>
          )}
        </div>

        {/* Menu button */}
        <div
          onClick={() => setNavOpen(true)}
          onMouseEnter={() => {
            navGreenRef.current.style.height = '100%'
            navGreenline1.current.style.backgroundColor = 'black'
            navGreenline1.current.style.zIndex = '100'
            navGreenline2.current.style.backgroundColor = 'black'
            navGreenline2.current.style.zIndex = '100'
            if (navtextRefMenu.current) {
              navtextRefMenu.current.style.color = 'black'
              navtextRefMenu.current.style.zIndex = '100'
            }
          }}
          onMouseLeave={() => {
            navGreenRef.current.style.height = '0%'
            navGreenline1.current.style.backgroundColor = 'white'
            navGreenline1.current.style.zIndex = '10'
            navGreenline2.current.style.backgroundColor = 'white'
            navGreenline2.current.style.zIndex = '10'
            if (navtextRefMenu.current) {
              navtextRefMenu.current.style.color = 'white'
              navtextRefMenu.current.style.zIndex = '10'
            }
          }}
          className='menu-link cursor-pointer bg-black lg:w-[17vw] w-35 relative overflow-hidden'>
          <div className='relative mr-6 mt-6 flex flex-col justify-between h-full'>
            <div>
              <div ref={navGreenline1} className='h-[2px] w-8 bg-white my-[6px] right-[0%] absolute'></div>
              <div ref={navGreenline2} className='h-[2px] w-14 bg-white right-[0%] absolute'></div>
            </div>
            <div>
              {/* ✅ Only render menu text on special pages */}
              {isSpecialPage && (
                <h1 ref={navtextRefMenu} className='hidden lg:block relative font-[font1] text-xl pl-3 uppercase font-bold pb-7 text-white'>
                  menu
                </h1>
              )}
            </div>
          </div>
          <div ref={navGreenRef} className='transition-all bg-[#D3FD50] absolute top-0 h-0 w-full'></div>
        </div>

      </div>
    </div>
  )
}

export default Navbar