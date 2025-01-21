import React from 'react'
import NavbarMain from './components/Navbar/NavbarMain'
import Heromain from './components/HeroSection/Heromain'
import Herobggradient from './components/HeroSection/Herobggradient'
import Herosub from './components/Herosubsection/Herosub'
import Aboutmemain from './components/AboutMe/Aboutmemain'
import Hepler from './components/Hepler'
import Skilsmain from './components/SkillSection/Skilsmain'
import Experiencemain from './components/Experience/Experiencemain'
import ProjectMain from './components/ProjectSection/ProjectMain'
import ContactMain from './components/ContactME/ContactMain'
import FooterMain from './components/Footer/FooterMain'

const App = () => {
  return (
    <div className='font-body'>
    <NavbarMain />
    <Heromain />
    <Herobggradient />
    <Herosub />
    <Aboutmemain />
    <Skilsmain />
    <Experiencemain />
    <ProjectMain />
    <ContactMain />
    <FooterMain />
    </div>
  )
}

export default App