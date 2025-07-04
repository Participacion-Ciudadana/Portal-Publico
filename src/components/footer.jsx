import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Footer = () => {
  return (
    <div>
      <div
        id="footer"
        style={{ backgroundColor: "#f8f9fa", padding: "20px 0" }}
      >
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* Primera columna */}
          <div>
            <h4>Portal Publico</h4>
            <p>@pciudadana</p>
            <div
              className="social-icons"
              style={{ display: "flex", gap: "10px" }}
            >
              <a
                href="https://www.facebook.com/pciudadana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/pciudadana?igsh=MXF5cDR0azB3eWhsbg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://x.com/PCiudadana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.youtube.com/user/pciudadana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                {" "}
                <a href="#features" className="page-scroll" rel="noopener noreferrer">
                  Inicio
                </a>
              </li>
              <li><a href="#contacto" className="page-scroll" rel="noopener noreferrer">
              Contactos
                </a></li>
            </ul>
          </div>

          {/* Tercera columna */}
          <div>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li><a href="https://www.facebook.com/pciudadana/" target="_blank" rel="noopener noreferrer" >Facebook</a></li>
              <li><a href="https://www.instagram.com/pciudadana?igsh=MXF5cDR0azB3eWhsbg==" target="_blank" rel="noopener noreferrer" >Instagram</a></li>
              <li><a href="https://x.com/PCiudadana" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>

        {/* Texto de copyright */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p>&copy; 2024 Participación Ciudadana</p>
        </div>
      </div>
    </div>
  );
};
