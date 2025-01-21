import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import {motion} from "framer-motion"
import { fadeIn } from '../../FramerMotion/framer'

const skills = [
    {
        skill: "WORDPRESS",
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


const AllSkillsSm = () => {
  return (
    <motion.div
        variants={fadeIn("down", "0.6")}
        initial= "hidden"
        whileInView="show"
        viewport={{one: false, amount:0.7}}
    className='grid md:grid-cols-4 sm:grid-cols-2 my-2 mt-[-200px] gap-12'>
        {
            skills.map((item,index) =>{
                return <div key={index} className='flex flex-col items-center mx-2'>
                    <item.icon className= "text-[120px] text-orange" />
                    <p className='text-center text-white mt-4'>{item.skill}</p>
                </div>
            })
        }
    </motion.div>
  )
}

export default AllSkillsSm