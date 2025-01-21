import React from 'react'
import aboutme from '../.././assets/images/about-me.jpg'
import {motion} from "framer-motion"
import { fadeIn } from '../../FramerMotion/framer'

const Aboutimg = () => {
  return (
    <motion.div
     className='h-[500px] w-[300px] relative'>
        <div className='h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden'>
            <img src={aboutme} alt="" 
            className="h-full w-auto object-cover"
            />
        </div>
        <div className='h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px]
        rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10'></div>
    </motion.div>
  )
}

export default Aboutimg