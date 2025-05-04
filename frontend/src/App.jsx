import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import WhoWeAre from './components/sections/WhoWeAre';
import OurWork from './components/sections/OurWork';
import Macbook from './components/sections/Macbook';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import WhatWeDo from './components/sections/WhatWeDo';

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <WhatWeDo />
      <WhoWeAre />
      <OurWork />
      <Macbook />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
