import { About } from './components/About/About.jsx'
import { Intro } from './components/Intro/Intro.jsx'
import { Contact } from './components/Contact/Contact.jsx'
import { Bar } from './components/Bar/Bar.jsx'
import { Portfolio } from './components/Portfolio/Portfolio.jsx'
import './style.scss'

function App() {
  return (
    <div>
      <Intro />
      <div className='container-info'>
        <div className='container-info-into'>
          <div className='container-bar'>
            <Bar wBar={80}/>
            <Bar wBar={50}/>
            <Bar wBar={70}/>
            <Bar wBar={20}/>
            <Bar wBar={30}/>
            <Bar wBar={100}/>
          </div>
          <About />
        </div>
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
