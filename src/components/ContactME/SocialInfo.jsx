import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const SocialInfo = () => {
  return (
    <div className='flex gap-4 cursor-pointer'>
      <SingleContactSocial link='https://www.linkedin.com/in/muhammad-qasim-b3b9b82b1/' Icon={FaLinkedinIn} />
      <SingleContactSocial link='#' Icon={FaGithub} />
      <SingleContactSocial link='#' Icon={RiInstagramFill} />
    </div>
  )
}

export default SocialInfo