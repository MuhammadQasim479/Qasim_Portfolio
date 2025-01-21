// import React from 'react'

// const SingleSkill = ({imgSvg, text}) => {

    
//   return (
//     <div className='hover:-translate-y-10  transition-all duration-500'>
//         <div className='flex flex-col items-center gap-2 relative'>
//             <div className='bg-white flex items-center justify-center text-cyan 
//             rounded-full h-[100px] w-[100px] hover:text-darkGrey hover:scale-105 transform
//             transition-all duration-500 cursor-pointer text-6xl border-4 border-orange'>{imgSvg}</div>
//             <p className='text-white font-bold'>{text}</p>
//         </div>
//         <div className='orange-div h-[200px] w-[100px] bg-orange absolute top-[50px] -z-10'></div>
//     </div>
//   )
// }

// export default SingleSkill

const SingleSkill = ({ imgSvg, text }) => {
    return (
      <div className="relative mx-2 group hover:-translate-y-10 transition-all duration-500">
        {/* Container for the image */}
        <div className="flex flex-col items-center gap-2">
          <div
            className="bg-white flex items-center justify-center text-cyan 
            rounded-full h-[100px] w-[100px] hover:text-darkGrey hover:scale-105 transform
            transition-all duration-500 cursor-pointer text-6xl border-4 border-orange"
          >
            {imgSvg}
          </div>
          <p className="text-white font-bold">{text}</p>
        </div>
  
        {/* Orange div with Tailwind hover */}
        <div
          className="orange-div h-[200px] w-[100px] bg-orange absolute top-[50px] -z-10 opacity-100 group-hover:opacity-100 transition-all duration-500"
        ></div>
      </div>
    );
  };
  
  export default SingleSkill;
  