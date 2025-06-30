import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import WhyUs from './components/WhyUs'

function App() {


  return (
    <>
      <section className='overflow-x-hidden'>
        <Navbar/>
        <HeroSection/>
        <Banner/>
        <WhyUs/>
        <About/>

      </section>
    
     
    </>
  )
}

export default App
