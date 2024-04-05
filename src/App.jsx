import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './pages/Menu/Menu';
import Login from './pages/Login/Login';
import Order from './pages/Order/Order';

function App() {
  return (
    <>
      <div>
        <nav>
          <NavLink to='/menu'>Menu</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/order/new'>New Order</NavLink>
        </nav>

        <Routes>
          <Route path='/menu' element={<Menu />} />
          <Route path='/login' element={<Login />} />
          <Route path='/order/new' element={<Order />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
