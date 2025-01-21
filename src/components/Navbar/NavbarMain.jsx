import React, { useState } from 'react'
import Navlogo from './Navlogo'
import Navlinks from './Navlinks'
import Navbtn from './Navbtn'
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuopen , setMenuopen] = useState(false);
  const toggleMenu=() =>{
    setMenuopen(!menuopen);
  }
  
  return (
    <nav id="section" className='max-w-[1300px] w-full mx-auto px-4 fixed left-[50%] 
     -translate-x-[50%] z-20 mt-2 flex gap-4'>
      <div className='flex items-center justify-between max-w-[1200px] 
      w-full p-6 mx-auto bg-black rounded-l-full rounded-r-full border-[0.5px] border-orange'>
      <Navlogo />
      <div className={`${menuopen? "sm:block" :"sm:hidden"} lg:block`}>
      <Navlinks />
      </div>
      
      <Navbtn />
      </div>
      <div className='flex p-6 lg:hidden sm:block text-white cursor-pointer items-center 
      justify-center border-[1px] border-orange rounded-full'>
        <button className='text-white text-2xl rounded-full border border-orange p-3' onClick={toggleMenu}>
        <GiHamburgerMenu />
        </button>
      </div>
        
    </nav>
  )
}

export default NavbarMain