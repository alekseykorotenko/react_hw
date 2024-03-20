import './App.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import Form from './components/Form/Form';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header headerClass="header" linkClass="logo" href="/" linkText="Pizza Day" />
        <main className="content">
          <h1 className="title">
            The best pizza. <br />
            <span className="text-yellow">Straight out of the oven, straight to you.</span>
          </h1>
          <p className="sub-title">👋 Welcome! Please start by telling us your name:</p>
          <Form className="login-form" type="text" placeholder="Your full name" text="Login"></Form>
        </main>
      </div>
    </>
  );
}

export default App;
