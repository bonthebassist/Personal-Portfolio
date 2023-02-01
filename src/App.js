import './App.css';
import NavbarBoots from './components/NavbarBoots';
import { Button } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import CodePage from './components/CodePage'
import ContactPage from './components/ContactPage'
import DesignPage from './components/DesignPage'
import CVPage from './components/CVPage'


function App() {
  return (
    <main>
      <NavbarBoots/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/code' element={<CodePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/design' element={<DesignPage/>}/>
        <Route path='/cv' element={<CVPage/>}/>
      </Routes>
    </main>
  );
}

export default App;
