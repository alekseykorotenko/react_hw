import { lazy, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
// import Menu from './pages/Menu/Menu';
// import Login from './pages/Login/Login';
// import Order from './pages/Order/Order';
// import RickAndMorty from './pages/RickAndMorty/RickAndMorty';
// import Counter from './components/Counter/Counter';

const MenuLazy = lazy(() => import('./pages/Menu/Menu'));
const LoginLazy = lazy(() => import('./pages/Login/Login'));
const OrderLazy = lazy(() => import('./pages/Order/Order'));
const RickAndMortyLazy = lazy(() => import('./pages/RickAndMorty/RickAndMorty'));
const OrderResultLazy = lazy(() => import('./pages/OrderResult/OrderResult'));

function App() {
  return (
    <>
      <div>
        <nav>
          <NavLink to='/menu'>Menu</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/order/new'>Cart</NavLink>
        </nav>

        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            {/* <Route path='/' element={<Counter />} /> */}
            <Route path='/menu' element={<MenuLazy />} />
            <Route path='/login' element={<LoginLazy />} />
            <Route path='/order/new' element={<OrderLazy />} />
            <Route path='/rickandmorty' element={<RickAndMortyLazy />} />
            <Route path='/order/:id' element={<OrderResultLazy />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
