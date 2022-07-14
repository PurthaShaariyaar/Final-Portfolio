import React from 'react'; 
import ProjectCard from './ProjectCard';

import space from '../../images/space.png';
import ai from '../../images/pyimage.jpg';


const Projects: React.FC = () => {
  return (
    <div>
      <h1 
        id='projects' 
        className='my-8 text-center text-teal-800 text-3xl md:text-5xl md:pt-16'
      >
        Projects
      </h1>
      <div 
        className='grid grid-cols lg:grid-cols-2 gap-x-20 gap-y-20 my-2 sm:mx-12 md:my-24 md:mx-0 md:px-4 xl:px-16'
      > 
        <ProjectCard
          url={space}
          name='Spacestagram' 
          description='Instagram clone, for Space! Created by using NASA APOD API to retrive daily images taken by a 
          professional astronmer.'  
          techstack='React JS'
        />
        <ProjectCard
          url={ai}
          name='AI Image Retrieval' 
          description='Developed and trained algorithms to detect similar medical images.'
          techstack='Python'
        />
      </div>
    </div>
  )
}

export default Projects; 

