import React from 'react'
import SkillsText from './SkillsText'
import Manyskils from './Manyskils'
import AllSkillsSm from './AllSkillsSm'
import Subskills from './Subskills'
import {motion} from "framer-motion"
import { fadeIn } from '../../FramerMotion/framer'

const Skilsmain = () => {
  return (
    <div id="skills" className='id relative'>
      <div 
      className='max-w-[1200px] relative px-4 mx-auto min-h-[600px] overflow-hidden'>
        <motion.div
        variants={fadeIn("right", "0.6")}
        initial= "hidden"
        whileInView="show"
        viewport={{one: false, amount:0}}
        >
        <SkillsText />
        </motion.div>
      
      </div>
        <div className='bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden'>
        <Manyskils /> 
        </div>
        <div className='lg:hidden sm:block'>
          <AllSkillsSm />
        </div>
        <div>
          <Subskills />
        </div>
    </div>
  )
}

export default Skilsmain