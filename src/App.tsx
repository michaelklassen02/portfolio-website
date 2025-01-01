import './styles/App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Menu from './components/Menu'
import Qualifications from './components/Qualifications'
import WorkExperience from './components/WorkExperience'
import TechnicalDemos from './components/TechnicalDemos'
import Contact from './components/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}/>
        <Route path='/aboutme' element={<AboutMe />}/>
        <Route path='/qualifications' element={<Qualifications />}/>
        <Route path='/workexperience' element={<WorkExperience />}/>
        <Route path='/technicaldemos' element={<TechnicalDemos />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <div className='sidebar'/>
      <Menu />
    </BrowserRouter>
  )
}

export default App
