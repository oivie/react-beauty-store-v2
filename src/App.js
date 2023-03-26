import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Main from './Main';
import Catalogue from './Catalogue';
import About from './About';


function App() {
  return (
    <div className="">
      <Router>
        <nav className='container'>
          <Link to='/main' className='link'>Main</Link>
          <Link to='/catalogue' className='link' >Catalogue</Link>
          <Link to='/about' className='link' >About Us</Link>
        </nav>

        <Routes>
          <Route path='/main' element={ <Main /> } />
          <Route path='/catalogue' element={ <Catalogue /> } />
          <Route path='/about' element={ <About /> } />
        </Routes>
      </Router>

      <Main />
    </div>
  );
}

export default App;
