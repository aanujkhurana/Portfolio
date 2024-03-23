import React from 'react';

import { About, Testimonial, Work, Skills, Footer, Header } from './container';
import { NavBar } from './components';
const App = () => {
  return (
    <div className='app'>
        <NavBar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default App