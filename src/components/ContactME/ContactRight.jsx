import React from 'react'
import contactimg from '../../assets/images/email-image.png'
import ContactInfo from './ContactInfo'
import SocialInfo from './SocialInfo'

const ContactRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
        <img 
        className='max-w-[300px]'
        src={contactimg} alt="" />
        <ContactInfo />
        <SocialInfo />
    </div>
  )
}
export default ContactRight