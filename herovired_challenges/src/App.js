import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/Login';
import HeaderHome from './components/HeaderHome';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Users from './components/Users';
import Scoreboard from './components/Scoreboard';
import ProwessHome from './components/ProwessHome';

const technologies = ["Programming", "Linux"]
function App() {
  return (
    <div className="App">
      <HeaderHome></HeaderHome>
    
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<SignIn></SignIn>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/challenges' element={<Home></Home>}></Route>
          <Route path='/users' element={<Users></Users>}></Route>
          <Route path='/scoreboard' element={<Scoreboard></Scoreboard>}></Route>
          <Route path='/' element={<ProwessHome></ProwessHome>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
