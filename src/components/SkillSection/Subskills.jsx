import React from 'react'
import Subskill from '../../assets/images/subSkills.jpg'

const Subskills = () => {
  return (
    <div className='border-y-2 border-lightGrey relative sm:mt-4'>
        <div className='absolute bg-gradient-to-r from-orange to-cyan 
        opacity-50 w-full h-full'>
        <img className='border-b-[3.5px] border-lightGrey' src={Subskill} alt="" />
        </div>
  
    </div>
  )
}

export default Subskills