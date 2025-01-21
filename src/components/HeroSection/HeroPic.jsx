import React from 'react' 
import qasim from '../../assets/images/qasim.png';
import { PiHexagon } from "react-icons/pi";
import {motion} from "framer-motion"
import { fadeIn } from '../../FramerMotion/framer'

const HeroPic = () => {
  return (
    <motion.div 
          variants={fadeIn("left", "0.2")}
          initial= "hidden"
          whileInView="show"
          viewport={{one: false, amount:0}}
      className='h-full flex items-center justify-center mt-[50px]'>
      <img src={qasim} alt=""
      className='max-h-[480px] w-auto rounded-b-full'
      />
      <div className='absolute -z-10 flex items-center justify-center animate-pulse'>
        <PiHexagon
        className='md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate[spin_20s_linear_infinite]'
        />
      </div>
    </motion.div>
  )
}

export default HeroPic