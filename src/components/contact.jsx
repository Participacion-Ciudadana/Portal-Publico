import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, phone, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="contact-section">
          <div className="contact-form">
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  required
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Correo</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  required
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Teléfono</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Teléfono"
                  required
                  value={phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Mensaje</label>
                <textarea
                  name="message"
                  placeholder="Mensaje"
                  required
                  value={message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Enviar Correo
              </button>
            </form>
          </div>
          <div className="contact-info">
            <h3>Contacto</h3>
            <p><i className="fa fa-phone"></i> +1 809-685-6200</p>
            <p><i className="fa fa-envelope"></i> info@pciudadana.org</p>
            <p><i className="fa fa-map-marker"></i> Calle Wenceslao Álvarez #08, Zona Universitaria, Santo Domingo, D.N.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
