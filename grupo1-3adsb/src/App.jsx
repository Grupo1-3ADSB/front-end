import './App.css';
import { BrowserRouter as Router, Link, Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login/Login';
import Cadastro from './components/Cadastro';
import './App.css';

function NavBar() {
  const location = useLocation();
  const hideNav = ['/login', '/cadastro'].includes(location.pathname);
  
  if (hideNav) return null;
  
  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/cadastro">Cadastro</Link>
    </nav>
  );
}

function App() {
  return (
   <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </div>
   </Router>
 )
}

export default App;
