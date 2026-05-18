import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../../context/Navcontext'
import { NavbarColorContext } from '../../context/Navcontext'

const Navbar = () => {
  const navGreenRef = useRef(null)
  const navGreenline1 = useRef(null)
  const navGreenline2 = useRef(null)
  const { NavOpen, setNavOpen } = useContext(NavbarContext)
  const { NavColor, setNavColor } = useContext(NavbarColorContext)

  

  return (
    <div className='z-4  flex justify-between items-start top-0 fixed w-full'>
      <div className='w-15 h-10 lg:m-4 m-2'>
        <img src={NavColor} alt="Logo" className=' h-full w-full' />
      </div>
      <div onClick={()=>{
        setNavOpen(true)
      }} onMouseEnter={() => {
        navGreenRef.current.style.height = '100%'
        navGreenline1.current.style.backgroundColor = 'black'
        navGreenline1.current.style.zIndex = '90'
        navGreenline2.current.style.backgroundColor = 'black'
        navGreenline2.current.style.zIndex = '90'
      }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = '0%'
          navGreenline1.current.style.backgroundColor = 'white'
          navGreenline1.current.style.zIndex = '90'
          navGreenline2.current.style.backgroundColor = 'white'
          navGreenline2.current.style.zIndex = '90'
        }}
        className='lg:h-16 cursor-pointer bg-black h-13 lg:w-[17vw] w-35 relative flex items-end justify-center flex-col'>
          <div className='relative mx-6 mb-3'>
            <div ref={navGreenline1} className='h-[2px] w-8 bg-white my-[6px] right-[0%] absolute'>
          </div>
          <div  ref={navGreenline2} className='h-[2px] w-14 bg-white right-[0%] absolute '>
          </div>
          </div>
        <div ref={navGreenRef} className='transition-all bg-[#D3FD50] absolute top-0 h-0 w-full '>
          
        </div>
        <div className='relative'></div>
      </div>
    </div>
  )
}

export default Navbar
