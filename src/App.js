import React from 'react'

import { About, Footer, Header, WhyUs,Contact} from './container';
import Navbar from './components/Navbar/Navbar';
import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <WhyUs />
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
