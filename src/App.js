import './styles/App.css';
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <>
    <BrowserRouter>
      <Nav></Nav>
    </BrowserRouter>
    
  </>
  );
}

export default App;
