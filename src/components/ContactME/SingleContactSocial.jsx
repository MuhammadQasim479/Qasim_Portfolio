import React from 'react'

const SingleContactSocial = ({Icon, link}) => {
  return (
    <div className='h-12 w-12 rounded-full text-2xl border border-orange
     text-orange flex items-center justify-center p-3 hover:border-cyan'>
        <a href={link} className='cursor-pointer'></a>
        <Icon className= "hover:text-cyan" />
    </div>
  )
}

export default SingleContactSocial