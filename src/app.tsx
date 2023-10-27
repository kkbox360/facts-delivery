import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Favorite from './pages/Favorite';
import NavBar from './components/NavBar';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <HashRouter>
    <NavBar />
    <div id='content' className='h-[calc(100vh-5rem)] bg-gray-500'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
    </div>
  </HashRouter>
);
