import React, { createContext, useEffect, useState }  from 'react'
import { useLocation } from 'react-router-dom'

export const NavbarContext = createContext()
export const NavbarColorContext = createContext()

const Navcontext = ({ children }) => {

  const [NavColor, setNavColor] = useState('/images/WhiteLogo.png')
  const [NavOpen, setNavOpen] = useState(false)

  const locate = useLocation().pathname
  useEffect(function () {
    if(locate === '/agency' || locate === '/projects') {
      setNavColor('/images/BlackLogo.png')
    }
    else {
      setNavColor('/images/WhiteLogo.png')
    }
  },[locate])

  return (
    <div>
        <NavbarContext.Provider value={{NavOpen, setNavOpen}}>
          <NavbarColorContext.Provider value={{NavColor, setNavColor}}>
            {children}
          </NavbarColorContext.Provider>
          </NavbarContext.Provider>
    </div>
  )
}

export default Navcontext
