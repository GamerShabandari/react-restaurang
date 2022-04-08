import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { Booking } from './components/booking';
import { Contact } from './components/contact';
import { Admin } from './components/admin';
import { Footer} from './components/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header style={{ backgroundImage: "url(images/bamboo.png)"}}
        className='animate__animated animate__fadeInDown'>
        <h1 className='logo' >Katana Sushi</h1>
          <nav>
              <ul className='navigation animate__animated animate__backInDown'>
                <li> <Link to="/">Hem</Link> </li>
                <li> <Link to="/booking">Boka bord</Link> </li>
                <li> <Link to="/contact">Kontakt</Link> </li>
                <li> <Link to="/admin">Admin</Link> </li>
              </ul>
          </nav>
          <p style={{ backgroundImage: "url(images/katana.png)"}}></p>
        </header>
        <Routes>
          <Route path='/' element={<Home></Home>}> </Route>

          <Route path='/booking' element={<Booking></Booking>}> </Route>

          <Route path='/contact' element={<Contact></Contact>}> </Route>

          <Route path='/admin' element={<Admin></Admin>}> </Route>

        </Routes>

      </BrowserRouter>

      <Footer></Footer>

    </div>
  );
}

export default App;
