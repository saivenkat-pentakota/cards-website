import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Account from './pages/Account';
import Home from './pages/Home';
import Signin from './pages/Signin';


function App() {
  return (
    <div className='App'>
    <Navbar/>
    <Routes>
    <Route path = {"/"} element = {<Home/>} ></Route>
    <Route path = {"/signin"} element = {<Signin/>} ></Route>
    <Route path = {"/account"} element = {<Account/>} ></Route>
    </Routes>
    </div>
  );
}

export default App;
