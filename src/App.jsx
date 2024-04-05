import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './pages/Menu/Menu';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <div>
        <nav>
          <NavLink to='/menu'>Menu</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </nav>

        <Routes>
          <Route path='/menu' element={<Menu />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
