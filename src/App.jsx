import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './pages/Menu/Menu';
import Login from './pages/Login/Login';
import Order from './pages/Order/Order';
import RickAndMorty from './pages/RickAndMorty/RickAndMorty';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <>
      <div>
        <nav>
          <NavLink to='/menu'>Menu</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/order/new'>New Order</NavLink>
          <NavLink to='/rickandmorty'>Rick and Morty </NavLink>
        </nav>

        <Routes>
          <Route path='/' element={<Counter />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/login' element={<Login />} />
          <Route path='/order/new' element={<Order />} />
          <Route path='/rickandmorty' element={<RickAndMorty />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
