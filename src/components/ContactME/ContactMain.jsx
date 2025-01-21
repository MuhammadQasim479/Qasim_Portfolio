import React from 'react'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'
import {motion} from "framer-motion"
import { fadeIn } from '../../FramerMotion/framer'

const ContactMain = () => {
  return (
    <div  id="contact" className='max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4'>
        <motion.h2
          variants={fadeIn("up", "0.6")}
          initial= "hidden"
          whileInView="show"
          viewport={{one: false, amount:0}}
        className='text-6xl text-cyan text-center mb-10'>Contact me</motion.h2>
        <div className='bg-brown flex justify-between gap-24 rounded-2xl p-8 lg:flex-row sm:flex-col'>
           <ContactLeft />
          
            <ContactRight />
        </div>
    </div>
  )
}

export default ContactMain