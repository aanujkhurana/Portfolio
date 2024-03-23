import React from 'react';

import { About, Testimonial, Work, Skills, Footer, Header } from './container';

const App = () => {
  return (
    <div className='app'>
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