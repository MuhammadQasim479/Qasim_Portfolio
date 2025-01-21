import React from 'react'

const SingleExperience = ({experien}) => {

  return (
    <div className='md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border border-orange 
    border-dashed rounded-2xl p-4 mt-12'>
        <p className='font-bold text-cyan'>{experien.job}</p>
        <p className='text-orange'>{experien.company}</p>
        <p className='text-lightGrey'>{experien.date}</p>
        <ul className='list-disc pt-4 pl-4 text-white'>
            {/* {experien.responsibilities.map((resp, index) =>{
                return<li key={index}>{resp}</li>;
            })} */}
            {experien?.responsibilities?.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
        </ul>
    </div>
  )
}

export default SingleExperience