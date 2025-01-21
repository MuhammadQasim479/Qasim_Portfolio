import React from 'react'
import Aboutimg from './Aboutimg'
import Aboutmetext from './Aboutmetext'
import {motion} from "framer-motion"
import { fadeIn } from '../../FramerMotion/framer'

const Aboutmemain = () => {
  return (
    <div id="about" 
    className='flex flex-1 md:flex-row sm:flex-col gap-12 px-4 items-center 
    justify-center max-w-[1200px] mx-auto mt-[100px]'>
      <motion.div
            variants={fadeIn("right", "0.6")}
            initial= "hidden"
            whileInView="show"
            viewport={{one: false, amount:0}}
      >
      <Aboutmetext />
      </motion.div>
      <motion.div
      variants={fadeIn("left", "0.3")}
      initial= "hidden"
      whileInView="show"
      viewport={{one: false, amount:0}}
      >
      <Aboutimg />
      </motion.div>     
    </div>
  )
}

export default Aboutmemain