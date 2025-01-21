import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa6";
// now make a array for all experiences:

const experiences =[
  {
    job:"Front-End Developer",
    company: "Dev TechSoul",
    date: "2024 - Present",
    responsibilities: [
      "Implementing Reuseable Components",
      "Participating in large scale applications",,
      "Working on the performance of web application.",
      "Generating new ides for better user experience",
  ],
  },
  {
    job: "React Developer",
    company: "Xemen Solutions",
    date: "2024 - Present",
    responsibilities: [
        "Developing dynamic and responsive web applications using React.js.",
        "Collaborating with back-end developers to integrate APIs.",
        "Managing state using Redux or Context API.",
    ],
},
{
  job: "JavaScript Developer",
  company: "Dev TechSoul.",
  date: "2024 - Present",
  responsibilities: [
      "Building interactive and scalable web applications using vanilla JavaScript.",
      "Optimizing web application performance and ensuring seamless user interactions.",
      "Integrating RESTful APIs and third-party libraries.",
  ],
}
]

const AllExperiences = () => {

  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between'>
      {
        experiences.map((experien, index) =>{
          return(
          <>
          <SingleExperience key={index} experien = {experien} />
          {index <2 ? <FaArrowRight  className='text-orange cursor-pointer text-6xl lg:block sm:hidden'/> : ""}
          </>
          )
        })
      }
    </div>
  )
}

export default AllExperiences