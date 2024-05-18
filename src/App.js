import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './About.js';
import Home from './Home.js';
import Contact from './Contact.js';
import Menu from './Menu.js';
import Services from './Services.js';
import Allergy from './Allergy.js';

function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about"  element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/allergy' element={<Allergy/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;