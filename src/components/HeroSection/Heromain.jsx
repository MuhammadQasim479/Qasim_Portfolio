import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'
import Herobggradient from './Herobggradient'

const Heromain = () => {
  return (
    <div id='section' className='pt-40 pb-16'>
      <div className='md:flex-row sm:flex-col flex items-center justify-between px-4 mx-auto max-w-[1200px] relative'>
      <HeroText /> 
      <HeroPic />
      </div>

    </div>
  )
}

export default Heromain