import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Index from './pages/index.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Index />} />
          <Route path="blogs" element={<div className='bg-black'> rizz </div>} />
        </Route>
      </Routes>
    </BrowserRouter>
)
