import React from 'react'
import  {Routes, Route , Link} from 'react-router-dom'
import Home from '../Pages/home';
import Wedding from '../Pages/wedding';
import Other from '../Pages/other';
import Photshoot from '../Pages/phootshoot';
import Contact from '../Pages/contact';


function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/wedding">Wedding</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/photoshoot">Photoshoot</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/other">Other</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/contact">Contact Us</Link>
            </li>
            </ul>
            </div>
            </div>
        </nav>
        <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/wedding" element={<Wedding/>}/>
              <Route path="/other" element={<Other/>}/>
              <Route path="/photoshoot" element={<Photshoot/>}/>
              <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </>
    )
}

export default Navbar;