import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';

import menu from '../../images/menubar.svg';
import close from '../../images/closemenu.svg';



const Header: React.FC = () => {

  const [open, setOpen] = useState(false);

  return (
    <div id="home" className='flex justify-between flex-wrap items-center text-lg md:text-2xl'>
      <Router>
        <HashLink smooth to="#home" className='font-medium text-4xl text-teal-600'>
          <span className='invisible lg:visible'>Purtha Shaariyaar</span>
        </HashLink>

        <nav className='pt-4 xxsm:pt-0 xsm:pt-8 lg:pt-0'>
          <div onClick={() => setOpen(!open)} className='cursor-pointer w-6 h-6 absolute top-10 right-16 visible lg:invisible'>
              <img alt=''src={open ? `${close}` : `${menu}`} ></img>
          </div>
          <ul className={(!open ? 'hidden lg:flex' : 'lg:flex')}>
            <li>
              <NavHashLink
                onClick={() => setOpen(false)}
                smooth to="#about"
                className='px-4 py-2 mt-2 xsm:mr-16 sm:mr-12 msm:mr-24 sm:px-0 lg:mr-4 text-slate-600 hover:text-teal-700'>
                About
              </NavHashLink>
            </li>
            <li>
              <NavHashLink 
                onClick={() => setOpen(false)}
                smooth to="#skills" 
                className='px-4 py-2 mt-2 sm:px-0 lg:mx-4 text-slate-600 hover:text-teal-700'>
                Skills
              </NavHashLink>
            </li>
            <li>
              <NavHashLink 
                onClick={() => setOpen(false)}              
                smooth to="#projects" 
                className='px-4 py-2 mt-2 sm:px-0 lg:mx-4 text-slate-600 hover:text-teal-700'>
                Projects
              </NavHashLink>
            </li>
            <li>
              <NavHashLink 
                onClick={() => setOpen(false)}            
                smooth to="#footer" 
                className='justify content:space-evenly md:mr-0 px-4 py-2 mt-2 px-6 md:ml-0 md:px-0 lg:ml-4 text-slate-600 hover:text-teal-700'>
                Contact
              </NavHashLink>
            </li>
          </ul>
        </nav>
      </Router>
    </div>
  )
}

export default Header; 