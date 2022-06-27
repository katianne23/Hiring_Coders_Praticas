import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home';
import Contato from './views/Contato';
import Err from './views/Err';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Err />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;