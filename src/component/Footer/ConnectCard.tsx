import React from 'react'; 

type ConnectProps = {
  to: string
  url: string 
  name: string 
}

const ConnectCard = ( props: ConnectProps ) => {
  return (
    <div className='text-center text-sm md:text-lg'>
      <a
        href={props.to}
      >
        <img
          className='w-12 md:w-20'
          src={props.url}
          alt=''
        >
        </img>
      </a>
      <h1>{props.name}</h1>
    </div>
  )
}

export default ConnectCard; 