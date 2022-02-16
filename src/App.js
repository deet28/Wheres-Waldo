import './styles/App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Leaderboard from './components/Leaderboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <>
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path = "Home" element = {<Home />}></Route>
        <Route path = "Leaderboard" element = {<Leaderboard/>}></Route>
      </Routes>
    </BrowserRouter>
    
  </>
  );
}

export default App;
