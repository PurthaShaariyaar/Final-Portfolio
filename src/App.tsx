import React from 'react';
import Header from './component/Header/Header';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Projects from './component/Projects/Projects';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <>
      <div className='font-body mx-auto px-6 py-6 md:px-20 lg:px-28 py-10'>
        <Header />
        <About />
        <Skills />
        <Projects />
      </div>
      <div className='font-body mx-auto'>
        <Footer /> 
      </div>
    </>
  );
}

export default App;
