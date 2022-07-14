import React from 'react';
import profimage from "../../images/profimage.jpg";

const About: React.FC = () => {
  return (
    <div 
      id='about' 
      className='mx-6 my-2 grid grid-cols-1 place-items-center gap-12
      sm:px-14 md:my-24 md:gap-20 md:px-0 lg:px-16 lg:grid-cols-2 xl:grid-cols-2'
    >
      <div className='text-center lg:text-left'>
        <h1 className='text-3xl md:text-5xl lg:text-7xl my-10'>
          Hey, I'm 
          <span className='text-teal-600'> Purtha Shaariyaar </span>
          👋🏼
        </h1>
        <p className='text-slate-700 text-xl md:text-2xl text-justify'>
          I'm a software engineer, designer and content creater. 
          I have a keen interest on designing and creating Full-Stack Web
          and iOS Apps. 
        </p>
      </div>
      <div>
        <img className='border-y-8 rounded-full border-teal-500'
        src={profimage} alt=''></img>
      </div>
    </div>  
  )
}

export default About; 