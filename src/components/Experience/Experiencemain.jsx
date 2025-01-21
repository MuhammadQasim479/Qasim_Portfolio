import React from 'react'
import ExperienceText from './ExperienceText'
import ExperienceTop from './ExperienceTop'
import AllExperiences from './AllExperiences'
import {motion} from "framer-motion"
import { fadeIn } from '../../FramerMotion/framer'

const Experiencemain = () => {
  return (
    <div id="experience"  className='max-w-[1200px] mx-auto px-4 mt-40'>
        <motion.div
          variants={fadeIn("down", "0.6")}
          initial= "hidden"
          whileInView="show"
          viewport={{one: false, amount:0}}
        >
        <ExperienceText />
        </motion.div>
        <motion.div
        variants={fadeIn("down", "0.8")}
        initial= "hidden"
        whileInView="show"
        viewport={{one: false, amount:0}}
        >
        <ExperienceTop />
        </motion.div>
            
        <div className='w-full h-1 bg-lightBrown lg:block sm:hidden'></div>
        <motion.div
        variants={fadeIn("up", "0.9")}
        initial= "hidden"
        whileInView="show"
        viewport={{one: false, amount:0}}
        >
        <AllExperiences />
        </motion.div>

    </div>
  )
}

export default Experiencemain