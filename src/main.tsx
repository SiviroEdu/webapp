import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Index from './pages/index.tsx';
import Login1 from './components/Login1.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Index />} />
          <Route path="login" element={<Login1/>} />
        </Route>
      </Routes>
    </BrowserRouter>
)
