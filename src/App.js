//4d382a873a62f0bb5ee30e7feb6cf7b815056c5a

import './styles/App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Leaderboard from './components/Leaderboard'
import Level1 from './components/Game-Levels/Level1';
import Level2 from './components/Game-Levels/Level2';
import Level3 from './components/Game-Levels/Level3';
import Level4 from './components/Game-Levels/Level4';
import Level5 from './components/Game-Levels/Level5';
import Level6 from './components/Game-Levels/Level6';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
  <>
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path = "Home" element = {<Home />}></Route>
        <Route path = "Leaderboard" element = {<Leaderboard/>}></Route>
        <Route path = "Level1" element = {<Level1 />}> </Route>
        <Route path = "Level2" element = {<Level2 />}> </Route>
        <Route path = "Level3" element = {<Level3 />}> </Route>
        <Route path = "Level4" element = {<Level4 />}> </Route>
        <Route path = "Level5" element = {<Level5 />}> </Route>
        <Route path = "Level6" element = {<Level6 />}> </Route>
      </Routes>
    </BrowserRouter>
    
  </>
  );
}

export default App;
