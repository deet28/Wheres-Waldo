//4d382a873a62f0bb5ee30e7feb6cf7b815056c5a

import './styles/App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Leaderboard from './components/Leaderboard'
import Level1 from './components/Game-Levels/Level1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <>
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path = "Home" element = {<Home />}></Route>
        <Route path = "Leaderboard" element = {<Leaderboard/>}></Route>
        <Route path = "Level1" element = {<Level1 />}> </Route>
      </Routes>
    </BrowserRouter>
    
  </>
  );
}

export default App;
