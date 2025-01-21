import React from 'react'
import {Link} from 'react-scroll'

const Navlinks = () => {
  const links = [
    {link: "About me", section:"about"},
    {link:"Skills", section:"skills"},
    {link:"Experience", section:"experience"},
    {link:"Projects", section:"projects"},
    {link:"Contact", section:"contact"}
  ]
  return (
    <ul className='flex gap-6 text-white text-center py-4 font-bold lg:flex-row sm:flex-col
    lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl
     sm:bg-cyan/30 backdrop-blur-lg sm:w-full lg:bg-black'>
      {
        links.map((link,index)=>(
          <li key={index} className='group'>
            <Link
            to={link.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            className='text-white hover:text-cyan cursor-pointer transition-all duration-500'
            >
              {link.link}</Link>
              <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1.5px] transition-all duration-500'>
              </div>
          </li>
        ))
      }
    </ul>
  )
}

export default Navlinks