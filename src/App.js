import { About } from './components/About/About.jsx'
import { Intro } from './components/Intro/Intro.jsx'
import { Contact } from './components/Contact/Contact.jsx'
import { Portfolio } from './components/Portfolio/Portfolio.jsx'
import './style.scss'
import { Header } from './components/Header/Header.jsx'

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <div className='container-info'>
        <div className='wrapper'>
          <About />
        </div>
        <div className='wrapper'>
          <Portfolio />
        </div>
        <div className='container-contact'>
          <div className='container-contact-into'/>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
