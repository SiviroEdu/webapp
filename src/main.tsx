import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Index from './pages/index.tsx';
import Page404 from './components/page404.tsx';
import Login from './components/Login.tsx';
import OpenExercises from './components/OpenExercises.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Index />} />
          <Route path="login" element={<Login/>} />
          <Route path="OpenExercises" element={<OpenExercises/>} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
)
