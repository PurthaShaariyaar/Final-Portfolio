import React from 'react'; 

type SkillProps = {
  url: string
  name: string 
}

const SkillCard = ( props: SkillProps ) => {
  return (
    <div 
      className='text-center text-xl md:text-2xl
      mt-8 md:my-12 md:my-0 md:inline-block'
    >
      <img className='w-20 md:w-40' src={props.url} alt=''>
      </img>
      <p className='my-4'>{props.name}</p>
    </div>
  )
}

export default SkillCard