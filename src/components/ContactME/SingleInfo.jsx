// import React from 'react'

// const SingleInfo = ({text, Image}) => {
//   console.log(text);
  
//   return (
//     <div className='flex gap-4 items-center justify-center'>
//          <Image  className= "text-3xl"/>
//         <p>{text}</p>
//     </div>
//   )
// }

// export default SingleInfo
import React from 'react';

const SingleInfo = ({ text, Image }) => {
  console.log(text);

  return (
    <div className="flex gap-4 items-center justify-center text-center">
      <Image className="text-3xl" />
      <p className="text-center">{text}</p>
    </div>
  );
};

export default SingleInfo;
