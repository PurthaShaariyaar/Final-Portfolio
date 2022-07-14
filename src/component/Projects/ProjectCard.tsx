import React from 'react'; 

type ProjectProps = {
  url: string 
  name: string 
  description: string
  techstack: string 
}

const ProjectCard = ( props: ProjectProps ) => {
  return (
    <div className='border rounded-2xl border-slate-300 h-full'>
      <img
        className='border rounded-t-2xl' 
        src={props.url} alt=''>
      </img>
      <h1 className='text-center text-slate-700 font-bold text-xl md:text-3xl my-4 md:my-8'>
        {props.name}
      </h1>
      <div className='text-justify text-l md:text-xl mx-4 my-4 md:mx-8'>
        <p className='text-slate-700 my-4 md:my-8'>{props.description}</p>
        <p className='my-2 md:my-8 text-slate-700'>Tech Stack:
        <span className='text-teal-700 font-extrabold'> {props.techstack}</span></p>
      </div>
    </div>
  )
}

export default ProjectCard; 