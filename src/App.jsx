import {  useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from './Components/Header'
import Hero from './Components/Hero'
import Project from './Components/Project'
import Footer from './Components/Footer'
import Poster from './Components/Poster'
import Testimonials from './Components/Testimonials'
import Skills from "./Components/Skills";
import ScrollToTop from "./Components/ScrollToTop";
import Whatsapp from "./Components/Whatsapp";
import ProgressBar from "./Components/ProgressBar";
function App() {

  useEffect(()=>{
    //register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    //Refresh ScrollTrigger when the page is fully loaded
    ScrollTrigger.refresh()

    //clean up ScrollTrigger on component unmount
    return()=>{
      ScrollTrigger.getAll().forEach((trigger)=>trigger.kill())
    }
  })

  return (
    <>
      <Header />
      <Hero />      
      <Skills />
      <Project />
      <Poster />
      <Testimonials />
      <Footer />
      <ScrollToTop />
      <Whatsapp />
      <ProgressBar />
    </>
  )
}

export default App
