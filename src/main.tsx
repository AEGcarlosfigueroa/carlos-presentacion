import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import Projects from './screens/Projects.tsx';
import Navbar from './components/Navbar.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  </>,
)
