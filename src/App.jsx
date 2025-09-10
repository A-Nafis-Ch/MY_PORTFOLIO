import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';

function App() {
  

  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <Navbar/>
      <Home />
      <About />
      <Experience />
    </div>
  )
}

export default App
