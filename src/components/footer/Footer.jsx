import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footerDesign">
      <div className="Politicas-footer">
        <h3>POLITICAS DE PRIVACIDAD</h3>
        <p> Todos los derechos reservados para PyL Candles</p>
      </div>
      <div className="Seguinos-footer">
        <h3>SEGUINOS EN</h3>
        <li className="footerIcon">
          <Link to="#">
            <i className="icon1 bi bi-facebook"></i>
          </Link>
          <Link to="#">
            <i className="icon1 bi bi-twitter"></i>
          </Link>
        </li>
        <li className="footerIcon2">
          <Link to="#">
            <i className="icon1 bi bi-instagram"></i>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Footer;
