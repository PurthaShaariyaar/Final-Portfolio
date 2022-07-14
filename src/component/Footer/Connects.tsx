import React from 'react'; 
import ConnectCard from './ConnectCard';

import github from  '../../images/github.svg';
import email from '../../images/email.svg';

const Connects: React.FC = () => {
  return (
      <div 
        className='pb-4 md:pb-12 flex justify-center gap-10 items-center flex-wrap'
      >
        <ConnectCard 
          to='https://github.com/PurthaShaariyaar'
          url={github}
          name='GitHub'
        />
        <ConnectCard 
          to='mailto:purtha.shaariyaar@ontariotechu.net'
          url={email}
          name='Email'
        />
      </div>
  )
}

export default Connects; 