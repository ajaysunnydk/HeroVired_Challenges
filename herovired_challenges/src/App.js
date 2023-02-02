import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/Login';
import HeaderHome from './components/HeaderHome';
import SignUp from './components/SignUp';
import Home from './components/Home';

const technologies = ["Programming", "Linux"]
function App() {
  return (
    <div className="App">
      <HeaderHome></HeaderHome>
    
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<SignIn></SignIn>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
