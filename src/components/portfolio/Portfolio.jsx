import React from "react";
import IMG1 from "../../assets/porfolio/web_apple.png";
import IMG2 from "../../assets/todo.png";
import IMG4 from "../../assets/porfolio/web_reservas_salones.png";
import gif from "../../assets/gif/trabajando.gif"

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Web Ecommerce Apple Store",
      img: IMG1,
      description: "Se desarrollo una web E-comerce de productos apple. En esta web se pueden ver algunos de los productos de Apple, adicionalmente se puede ver el detalle de cada uno de ellos, si te registras con google podras acceder a realizar pedidos, ver los pedidos ya realizados y ver varias funcionalidades mas.",
      technologies: "Frontend: javascript, React, Prime | Backend: NodeJS, Express, Sequelize | Base de datos: MySQL",
      link: "https://proyecto-copy-apple.web.app/",
      github: "https://github.com/brayan084/copy-apple-deploy",
    },
    {
      id: 2,
      title: "Web Reservas de salones de fiestas",
      img: IMG4,
      description:
        "Cree una web donde puedes ver distintos salones de fiestas para alquilar, en la web se pueden hacer reservas con fecha y hora, adicionalmente puedes ver el historial de tus reservas y ver el estado de tus reservas.",
      technologies: "Frontend: typescript, React, Prime, fullcalendar, momentjs | Backend: NodeJS, Express, nodemailer | Base de datos: MySQL",
      github: "https://github.com/brayan084/reservas-salon",
    },
    {
      id: 3,
      title: "Guardar puntos de interes en google maps",
      img: IMG2,
      description: "En esta Web te puedes registrar con google y puedes guardar puntos de interes en google maps de forma rapida y sencilla.",
      technologies: "Frontend: typescript, React, Prime, geolib | Base de datos: Firebase database | api: google maps",
      github: "https://github.com/brayan084/puntos-maps",
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container centerd-element">
          <img src={gif} alt="perezoso" />
      </div>
      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
