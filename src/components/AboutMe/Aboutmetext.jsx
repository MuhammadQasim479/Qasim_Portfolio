import React from 'react'

const Aboutmetext = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h1 className='text-cyan font-bold text-6xl mb-10'>AboutMe</h1>
        <p className='text-white w-[60%] text-xl'>Muhammad Qasim is a passionate front-end developer with a strong foundation
            in HTML, CSS, and JavaScript, complemented by intermediate knowledge of 
            React.js. He is committed to creating visually appealing, user-friendly,
            and responsive web applications.</p>
        <button className='border border-orange py-2 px-4 rounded-full text-white text-xl mt-10
         hover:bg-orange hover:text-cyan flex items-center transition-all duration-500
         md:self-start sm:self-center hover:border-cyan'>My Projects</button>
    </div>
  )
}

export default Aboutmetext