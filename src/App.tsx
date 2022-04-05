
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { Booking } from './components/booking';
import { Contact } from './components/contact';
import { Admin } from './components/admin';
import "animate.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            <h1 className='logo'>Welcome to restaurant</h1>
            <div>
              <ul className='navigation'>
                <li> <Link to="/">Hem</Link> </li>
                <li> <Link to="/booking">Boka bord</Link> </li>
                <li> <Link to="/contact">Kontakt</Link> </li>
                <li> <Link to="/admin">Admin</Link> </li>
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
      </BrowserRouter>

    </div>
  );
}

export default App;
