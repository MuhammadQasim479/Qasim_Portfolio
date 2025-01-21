import React from 'react'
import {Link} from 'react-scroll'

const links = [
    {link:"About Me" , section:"about"},
    {link:"Skills" , section: "skills"},
    {link:"Experience", section:"experience"},
    {link:"Projects", section: "projects"},
    {link:"Contact", section :"contact"}
]

const FooterMain = () => {
  return (
    <div>
        <div className='w-full h-[1px] bg-lightGrey mt-24'></div>
        <div className='max-w-[1200px] md:flex sm:hidden mt-4 mx-auto justify-between'>
            <p className='text-3xl text-lightGrey cursor-pointer'>Muhammad Qasim</p>
            <ul className='flex gap-8 text-lightGrey text-xl cursor-pointer'>
                {
                    links.map((link,index) =>{
                        return(
                            <li key={index} className='group'> 
                                <Link
                                to= {link.section}
                                smooth={true}
                                spy={true}
                                duration={500}
                                offset={-130}
                                className='hover:text-white cursor-pointer transition-all duration-500'
                                >{link.link}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        <p className='text-sm text-lightGrey text-right max-w-[1200px] mx-auto mt-2 mb-2'>© 2024 Muhammad Qasim | All Rights Reserved.</p>

    </div>
  )
}

export default FooterMain

