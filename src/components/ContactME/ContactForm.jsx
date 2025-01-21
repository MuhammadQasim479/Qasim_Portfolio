import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form className='flex flex-col gap-4 mt-6 text-white focus-within:border-[#15d1e9]'>
        <input type="text"
         placeholder='Your Name'
         required
         className='h-12 rounded-lg p-2 bg-lightBrown outline-none border-2 focus-within:border-[#15d1e9] text-white' />
        <input type="email" 
        placeholder='Your Email'
        required 
        className='h-12 rounded-lg p-2 bg-lightBrown outline-none border-2 focus-within:border-[#15d1e9] text-white'
        />
        <textarea type= "text" 
        placeholder='Message... ' 
        rows="9" 
        cols="50"
        required
        className='pl-2 bg-lightBrown outline-none border-2 rounded-lg focus-within:border-[#15d1e9]'
        >
        </textarea>
        <button className='text-xl text-white border border-cyan w-full h-12 bg-cyan
        rounded-xl hover:bg-darkCyan '>Send</button>
      </form>
    </div>
  )
}

export default ContactForm