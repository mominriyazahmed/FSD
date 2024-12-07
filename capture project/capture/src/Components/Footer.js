import React from 'react'
import {Link} from 'react-router-dom'

function Footer(){
    return(
        <>
        <footer style={{marginTop:"1rem"}}>
        <div className="row m-0">
        <div className="col-6 col-md-2 ">
        <h5>Pages</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/wedding" className="nav-link p-0 text-body-secondary">Wedding</Link></li>
          <li className="nav-item mb-2"><Link to="/photoshoot" className="nav-link p-0 text-body-secondary">Photoshoot</Link></li>
          <li className="nav-item mb-2"><Link to="/other" className="nav-link p-0 text-body-secondary">Others</Link></li>
          <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 text-body-secondary">Contact Us</Link></li>
        </ul>
      </div>


      <div className="col-6 col-md-2 mb-3">
        <h5>Contacts</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            Manas Mehta
            Email:manas@gmail.com
            Ph No: +91 8460629596
          </li>
          <li className="nav-item mb-2">
            Riyaz Momin
            Email:riyaz@gmail.com
            Ph No: +91 9723507486
          </li>
          <li className="nav-item mb-2">
            Kunal Limbasiya
            Email:kunal@gmail.com
            Ph No: +91 6355852218
          </li>
        </ul>
      </div>

      <div className="col-md-6 px-5" style={{width:"35%"}}>
      <iframe title="Mahavir Technocrates"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.239047047355!2d70.04773487483472!3d22.457649537174554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395715352b353b8d%3A0x3e7bb426225ab75b!2sMahavir%20Technocrates!5e0!3m2!1sen!2sin!4v1695998566738!5m2!1sen!2sin" width="550" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </footer>
        </>
    )
}

export default Footer;
