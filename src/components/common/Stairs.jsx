import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {

  const currentPath = useLocation().pathname



  const stairParentRef = useRef(null)
  const pageRef = useRef(null)

  useGSAP(() => {

    const tl = gsap.timeline()
    tl.to(stairParentRef.current, {
      display: 'block',
    })
    tl.from('.stair', {
      height: 0,
      duration: 1,
      ease: 'power4.inOut',
      stagger: {
        amount: -0.25
      }
    })

    tl.to('.stair', {
      y: '100%',
      stagger: {
        amount: -0.25
      }
    })

    tl.to(stairParentRef.current, {
      display: 'none',
    })

    tl.to('.stair', {
      y: '0%',
    })

    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.3,
      // scale: 1.02,
    })
  }, [currentPath])

  return (
    <div>
      <div ref={stairParentRef} className='h-screen w-screen fixed z-20 top-0 '>
        <div className='h-full w-full fixed flex'>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
        </div>
      </div>
      <div ref={pageRef}>
        {props.children}
      </div>
    </div>
  )
}

export default Stairs
