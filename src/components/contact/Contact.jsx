import React from 'react';
// import emailjs from "@emailjs/browser";
// import { MdOutlineEmail } from "react-icons/md";
import "./contact.css";

const Contact = () => {
  // const [message, setMessage] = useState(false);
  // const formRef = useRef();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  //   emailjs
  //     .sendForm(
  //       "service_k2qawqh",
  //       "template_c6rkpn6",
  //       formRef.current,
  //       "X7K7ebhIeOy3YwHki"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );

  //   e.target.reset();
  // };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container">
        <div className="contact-wrapper animated bounceInUp">
          <div className="contact-form">
            <form id="form" action="">
              <p>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" autoComplete="off" required />
              </p>
              <p>
                <label htmlFor="celular">Numero celular</label>
                <input name="celular" id="celular" autoComplete="off" required />
              </p>
              <p>
                <label htmlFor="mail">Correo</label>
                <input type="email" name="mail" id="mail" autoComplete="off" required />
              </p>
              <p className="block">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  name="mensaje"
                  className='textarea'
                  id="mensaje"
                  rows="3"
                  required
                ></textarea>
              </p>
              <p className="block">
                <button>enviar</button>
              </p>
            </form>
            <a href="mailto:zorrobrayan0@gmail.com" id="truco">
              mail
            </a>
          </div>
          <div className="contact-info">
            <h4>Mas info</h4>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> ARGENTINA
              </li>
              <li>
                <i className="fas fa-phone"></i> +54 1131777860
              </li>
              <li>
                <i className="fas fa-envelope-open-text"></i> zorrobrayan0@gmail.com
              </li>
            </ul>
            <p>
              Si estás interesado en contactarme para algún proyecto, crear una
              aplicación o sitio web, escribirme a mi correo o enviame mensajito
              a whatsapp y te responderé lo antes posible.
            </p>
          </div>
        </div>
      </div>

      {/* <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>merigogichashvili13@gmail.com</h5>
            <a href="mailto:merigogichashvili13@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div> */}
    </section>
  );
};

export default Contact;
