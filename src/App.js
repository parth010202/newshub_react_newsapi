import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import General from './pages/General';
import Sports from './pages/Sports';
import Entertainment from './pages/Entertainment';
import Health from './pages/Health';
import Science from './pages/Science';
import Business from './pages/Business';
import Technology from './pages/Technology';
function App() {
  return (
   <>
   <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/home' element={<Home/>}></Route>
        <Route exact path='/general' element={<General/>}/>
        <Route exact path='/business' element={<Business/>}/>
        <Route exact path='/entertainment' element={<Entertainment />}/>
        <Route exact path='/health' element={<Health />}/>
        <Route exact path='/sports' element={<Sports />}/>
        <Route exact path='/science' element={<Science />}/>
        <Route exact path='/technology' element={<Technology />}/>
      </Routes>
    </Router>  
   </>
  );
}

export default App;
