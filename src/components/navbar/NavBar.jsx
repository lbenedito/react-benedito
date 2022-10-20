import React from 'react';
import Cartwidget from '../CartWidget.jsx';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <img src="images/logo.png" alt="" className='logo' /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home
            <span className="visually-hidden"></span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Detalles</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Precios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
      </ul>
    </div>
  </div>
  <Cartwidget/>
</nav>
    );
}

export default Navbar;
