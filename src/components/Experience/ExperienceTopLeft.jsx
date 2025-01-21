import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col w-[300px] gap-6'>
        <p className='text-3xl text-orange font-bold uppercase font-special text-center'>Since 2024</p>
        <div className='flex items-center justify-center gap-4'>
            <ExperienceInfo number='1' text='Years'/>
            <p className='text-6xl font-bold text-lightGrey '>-</p>
            <ExperienceInfo number='6' text='Websites'/>
        </div>
        <p className='text-center text-white'>
            with 1 year of Experience of building dynamic and user-friendly web 
            applications...
        </p>
        <ExperienceInfo  number="$1000" text="Max-Budget"/>
    </div>
  )
}

export default ExperienceTopLeft