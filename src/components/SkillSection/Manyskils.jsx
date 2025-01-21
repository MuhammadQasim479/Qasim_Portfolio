import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import SingleSkill from './SingleSkill';
import {motion} from "framer-motion"
import { fadeIn } from '../../FramerMotion/framer'
import { div } from 'motion/react-client';

// Now Create a Array to Store all Skills
const skills = [
    {
        skill: "WORDPRES",
        icon:  FaWordpress,
    },
    {
        skill: "HTML",
        icon: FaHtml5,
    },
    {
        skill: "CSS",
        icon: FaCss3Alt,
    },
    {
        skill: "TAILWIND",
        icon: RiTailwindCssFill,
    },
    {
        skill: "JAVASCRIPT",
        icon: TbBrandJavascript,
    },
    {
        skill: "REACT JS",
        icon:RiReactjsFill,
    }
    
]

const Manyskils = () => {
  return (
    <div>
        <div className='flex items-center justify-center gap-2 max-w-[1200px] mx-auto '>
            {
                skills.map((item, index)=>{
                    return (
                        <motion.div
                        variants={fadeIn("up", `0.${index}`)}
                        initial= "hidden"
                        whileInView="show"
                        viewport={{one: false, amount:0}}
                        >
                           <SingleSkill key={index} text= {item.skill} imgSvg={<item.icon />} />
                        </motion.div>
                
                )})
            }
        </div>
    </div>
  )
}

export default Manyskils