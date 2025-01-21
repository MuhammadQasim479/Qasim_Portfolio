import React from 'react'
import ContactForm from './ContactForm'

const ContactLeft = () => {
  return (
    <div className='gap-8 flex flex-col w-full '>
        <h2 className='text-3xl text-orange font-bold mb-4'>Get In Touch</h2>
        <p className='text-white'>Feel free to to reach out if you like'd to elaborate<br /> 
        you are just few clicks away...
        </p>
        <ContactForm />
    </div>
  )
}

export default ContactLeft