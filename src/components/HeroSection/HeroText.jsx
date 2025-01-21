import React from 'react'
import {motion} from "framer-motion"
import { fadeIn } from '../../FramerMotion/framer'

const HeroText = () => {
  return (
    <div className='flex p-2 flex-col h-full justify-center gap-4 md:text-left sm:text-center'>
      <motion.h2
      variants={fadeIn("down", "0.3")}
      initial= "hidden"
      whileInView="show"
      viewport={{one: false, amount:0}}

      className='md:text-2xl sm:text-xl uppercase text-cyan'>FRONT-END WEB DEVELOPER</motion.h2>
      <motion.h1
      variants={fadeIn("right", "0.5")}
      initial= "hidden"
      whileInView="show"
      viewport={{one: false, amount:0}}
      
      className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-body text-orange'>Muhammad Qasim</motion.h1>
      <motion.p
      variants={fadeIn("up", "0.7")}
      initial= "hidden"
      whileInView="show"
      viewport={{one: false, amount:0}}
       className='text-white text-lg mt-4'>
      
An Exceptionally Talented, Highly Skilled, Creative, <br /> and Passionate Web Developer With 1 Year of <br /> Front-End Development Experience...
      </motion.p>
    </div>
  )
}

export default HeroText