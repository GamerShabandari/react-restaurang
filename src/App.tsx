
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { Booking } from './components/booking';
import { Contact } from './components/contact';
import { Admin } from './components/admin';
import { GiSamuraiHelmet, GiSushis } from "react-icons/gi";
import { MdOutlineHome, MdCall, MdOutlineAdminPanelSettings } from "react-icons/md"
import "animate.css"
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className='animate__animated animate__fadeInDown'>
          <nav>
            <Link className='logoLink' to="/">
              <h1 className='logo'>Katana <GiSamuraiHelmet></GiSamuraiHelmet> Sushi</h1>
            </Link>
            <div>
              <ul className='navigation animate__animated animate__backInDown'>
                <li> <Link to="/">Hem<MdOutlineHome></MdOutlineHome></Link></li>
                <li> <Link to="/booking">Boka bord<GiSushis></GiSushis></Link></li>
                <li> <Link to="/contact">Kontakt<MdCall></MdCall></Link> </li>
                <li> <Link to="/admin">Admin<MdOutlineAdminPanelSettings></MdOutlineAdminPanelSettings></Link></li>
              </ul>
            </div>

          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home></Home>}> </Route>

          <Route path='/booking' element={<Booking></Booking>}> </Route>

          <Route path='/contact' element={<Contact></Contact>}> </Route>

          <Route path='/admin' element={<Admin></Admin>}> </Route>

        </Routes>

        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
