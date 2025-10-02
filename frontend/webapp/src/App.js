import Navbar from './components/js/Navigationbar'
import Footer from './components/js/footer'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from '../../webapp/src/pages/js/Home';
import About from '../../webapp/src/pages/js/About'
import Contact from './pages/js/Contact';
import Carrier from './pages/js/Carrier';
import Services from './pages/js/Services';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar class="appFixedNavbar"/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/career' element={<Carrier/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
      </Routes>
      <br/>
      <Footer/>
    </Router>
  );
}

export default App;
