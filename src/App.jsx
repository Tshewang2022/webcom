import React from 'react'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import WorkExperience from './sections/WorkExperience'
import Projects from './sections/Projects'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main>
      <div>
        <Hero/>
      </div>
      <div>
        <Skills/>
      </div>
      <div>
        <WorkExperience/>
      </div>
      <div>
        <Projects/>
      </div>
      <div>
        <Footer/>
      </div>
    </main>
  )
}

export default App
