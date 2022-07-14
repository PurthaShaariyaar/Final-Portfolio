import React from 'react';
import SkillCard from './SkillCard';

import react from '../../images/react.svg';
import typescript from '../../images/typescript.svg';
import firebase from '../../images/firebase.svg';
import swift from '../../images/swift.svg';
import python from '../../images/python.svg';
import nextjs from '../../images/nextjs.svg';
import tailwindcss from '../../images/tailwindcss.svg';

const Skills: React.FC = () => {
  return (
    <div className='mx-6 my-12 md:my-28 md:px-16'>
      <h1 id='skills' className='text-center text-teal-800 text-3xl md:text-5xl md:pt-28 md:pb-20'>Skills and Toolkits</h1>
      <div className='flex justify-center gap-10 items-center flex-wrap'>
        <SkillCard 
          url={react}
          name='React'
        />
        <SkillCard 
          url={typescript}
          name='TypeScript'
        />
        <SkillCard 
          url={tailwindcss}
          name='Tailwind CSS'
        />
        <SkillCard 
          url={nextjs}
          name='Next.js'
        />
        <SkillCard 
          url={firebase}
          name='Firebase'
        />
        <SkillCard 
          url={swift}
          name='Swift'
        />
        <SkillCard 
          url={python}
          name='Python'
        />
      </div>
    </div>
  )
}

export default Skills