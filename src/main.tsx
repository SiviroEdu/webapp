import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Index from './pages/index.tsx';
<<<<<<< Updated upstream
=======
import Login1 from './components/Login1.tsx';
import Page404 from './components/page404.tsx';
>>>>>>> Stashed changes

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Index />} />
<<<<<<< Updated upstream
          <Route path="blogs" element={<div className='bg-black'> rizz </div>} />
=======
          <Route path="login" element={<Login1/>} />
          <Route path="*" element={<Page404 />} />
>>>>>>> Stashed changes
        </Route>
      </Routes>
    </BrowserRouter>
)
