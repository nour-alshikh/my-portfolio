import { BrowserRouter } from 'react-router-dom'
import { Navbar, Hero, About, Tech, Works, Feedbacks, Contact, StarsCanvas } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* Experience timeline hidden for now */}
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App