import React from 'react'
import SingleProjects from './SingleProjects'
import PRojectsText from './PRojectsText'
import cryptoImage from '../../assets/images/crypto.png';
import RealEstate from '../../assets/images/realestate.png';
import Ecommerce from '../../assets/images/ecommerce.png';
import VirtualAssis from '../../assets/images/Virtual-assistent.png'
import {motion} from "framer-motion"
import { fadeIn } from '../../FramerMotion/framer'

// now we will add projects data 

const projects = [
  {
    name:"Crypto Currency Changer",
    year: "April 2024",
    align: "right",
    image: cryptoImage,
    link: "#"
  },
  {
    name:"Real Estate",
    year:"June 2024",
    align: "left",
    image: RealEstate,
    link: "#"
  },
  {
    name:"Ecommerce",
    year:" September 2024",
    align:"right",
    image: Ecommerce,
    link: "#"
  },
  {
    name:"Virtual Assistent",
    year:" December 2024",
    align: "left",
    image:VirtualAssis,
    link:"#",
  }
]


const ProjectMain = () => {
  return (
    <div id="projects" className='max-w-[1200px] mx-auto px-4'>
      <motion.div
        variants={fadeIn("down", "0.3")}
        initial= "hidden"
        whileInView="show"
        viewport={{one: false, amount:0}}
      >
        <PRojectsText />
      </motion.div>

      <div className='max-w-[1100px] flex flex-col gap-20 mx-auto mt-12 sm:py-6'>
        {
          projects.map((item, index) =>{
            return(
              <SingleProjects key={index} name={item.name} year={item.year} align={item.align} image={item.image} />
            ) 
          })
        }
      </div>
    </div>
  )
}

export default ProjectMain