import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

const Navbtn = () => {
  return (
    <button className='flex items-center gap-1 px-4 py-2 border-cyan border-[0.5px] 
     text-white rounded-full text-xl font-bold bg-gradient-to-r from-cyan to-orange
      hover:scale-110 transition-all duration-500 hover:border-orange hover:shadow-cyanShadow'>
      <h1>Hire me</h1>
      <div className='sm:hidden md:block'>
      < LuArrowDownRight />
      </div>

    </button>
  )
}

export default Navbtn