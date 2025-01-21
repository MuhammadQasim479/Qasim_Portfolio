import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import SingleInfo from './SingleInfo';


const ContactInfo = () => {
      return (
        <div className='flex flex-col items-start text-center justify-center gap-4 text-white cursor-pointer'>
            <SingleInfo  text= "qasimkhan656655@gmail.com" Image = {MdOutlineMailOutline }/>
            <SingleInfo  text = "03061915479" Image = {MdPhone}/>
            <SingleInfo  text = "Lahore Ali Town" Image = {FaLocationDot}/>
        </div>
      )
    }

export default ContactInfo