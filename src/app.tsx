import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Favourite from './pages/Favourite';
import NavBar from './components/NavBar';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const bars = [
  { to: '/', label: 'Feed' },
  { to: '/favourite', label: 'Favourites' },
];

root.render(
  <HashRouter>
    <NavBar bars={bars} />
    <div id='content' className='h-[calc(100vh-5rem)] bg-gray-500'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourite' element={<Favourite />} />
      </Routes>
    </div>
  </HashRouter>
);
