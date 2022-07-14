import React from 'react'; 
import Connects from './Connects';

const Footer: React.FC = () => {
  return (
    <div className='bg-teal-400'>
      <h1 id='footer' className='text-center text-white py-4 md:py-12 text-3xl md:text-5xl font-bold'>
        Let's Connect!
      </h1>
      <Connects /> 
    </div>
  ) 
}

export default Footer; 