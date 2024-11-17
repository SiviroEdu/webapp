import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Index from './pages/index.tsx';
import Login from './components/Login.tsx';
import MultiExercises from './components/MultiExercises.tsx';
import SingleExercises from './components/SingleExercises.tsx';
import SingleMultiplayerSelect from './components/SingleMultiplayerSelect.tsx';
import TOS from './components/TOS.tsx';
import Page404 from './components/page404.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Index />} />
          <Route path="login" element={<Login/>} />
          <Route path="TOS" element={<TOS/>} />
          <Route path="SingleExercises" element={<SingleExercises/>} />
          <Route path="MultiExercises" element={<MultiExercises/>} />
          <Route path="SingleMultiplayerSelect" element={<SingleMultiplayerSelect/>} />
          <Route path="*" element={<Page404/>} />
        </Route>
      </Routes>
    </BrowserRouter>
)
