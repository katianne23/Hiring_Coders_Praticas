import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Repositories from './pages/Repositories';
import Home from './pages/Home';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/repositories' component={Repositories} />
      </Routes>
    </BrowserRouter>
  )
}



