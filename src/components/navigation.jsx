import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';



export const Navigation = (props) => {

  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      // Navega al inicio
      navigate('/');
    }
  };
  
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" onClick={handleClick}  href="#page-top">
            {/* React Landing Page */}
            <img src="img/logo.jpeg" height={50} width={50} alt="logo"  />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
            <a href="/" onClick={handleClick} className="page-scroll">
            Inicio
          </a>
            </li>
            
            {/* <li>
              <a href="#about" className="page-scroll">
                Contacto
              </a>
            </li> */}
            {/* <li>
              <a href="#services" className="page-scroll">
                Indicadores
              </a>
            </li> */}
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li> */}
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li> */}
            {/* <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            <li>
              <a href="/contacto" className="page-scroll">
              contacto
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Indicadores
              </a>
            </li>
            <li>
              <a href="https://atentocontuvoto.org" target="_blank" className="page-scroll" rel="noopener noreferrer">
                AtentoContuvoto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
