import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Home from './pages/Home';
import Developers from './pages/Developers';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/developers' element={<Developers />} />
      </Routes>
    </Router>
  );
}

export default App;
