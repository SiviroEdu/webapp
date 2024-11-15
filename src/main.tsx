import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './pages/Home.tsx';
import Nz from './pages/Nz.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Nz" element={<Nz/>} />
          <Route path="blogs" element={<div className='bg-black'> rizz </div>} />
        </Route>
      </Routes>
    </BrowserRouter>
)
