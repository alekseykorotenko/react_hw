import './App.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import Form from './components/Form/Form';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header headerClass="header" linkClass="logo" href="/" linkText="Pizza Day" />
        <Menu />
      </div>
    </>
  );
}

export default App;
