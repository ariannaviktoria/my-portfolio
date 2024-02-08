
import NavbarComponent from './Components/Navbar';

import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Hobbies from './Components/Hobbies';
import Education from './Components/Education';
function App() {

  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies/>} />
        <Route path="/education" element={<Education/>} />
      </Routes>
    </>
  );
}

export default App;

