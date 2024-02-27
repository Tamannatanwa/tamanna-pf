import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { AlertProvider } from './context/alertContext'
import Header from './components/Header'
import LandingSection from './components/LandingSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'
import Alert from './components/Alert';
import ContactMeSection from './components/ContactMeSection'

const App = () => {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header/>
          <LandingSection/>
          <ProjectsSection/>
          <ContactMeSection/>
          <Footer/>
          <Alert/>
        </main>
      </AlertProvider>
    </ChakraProvider>
  )
}

export default App
