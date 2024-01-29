import React from "react";
import IMG1 from "../../assets/porfolio/web_apple.png";
import IMG2 from "../../assets/todo.png";
import IMG4 from "../../assets/fake.png";
import gif from "../../assets/gif/trabajando.gif"

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Web Ecommerce Apple Store",
      img: IMG1,
      description: "Se desarrollo una web E-comerce de productos apple. En esta web se pueden ver algunos de los productos de Apple, adicionalmente se puede ver el detalle de cada uno de ellos, si te registras con google podras acceder a realizar pedidos, ver los pedidos ya realizados y ver varias funcionalidades mas.",
      technologies: "Frontend: React, Prime | Backend: NodeJS, Express, Sequelize | Base de datos: MySQL",
      link: "https://proyecto-copy-apple.web.app/",
      github: "https://github.com/brayan084/copy-apple-deploy",
    },
    {
      id: 2,
      title: "Web Reservas de salones de fiestas",
      img: IMG4,
      description:
        "FakeStore app that provides information about available products and their details",
      technologies: "React | Redux",
      link: "https://fakestore-metrics.netlify.app/",
      github: "https://github.com/Meri-MG/Fakestore---react",
    },
    {
      id: 3,
      title: "Guardar puntos de interes en google maps",
      img: IMG2,
      description: "User friendly app to plan your day and manage tasks",
      technologies: "JavaScript | Webpack",
      link: "https://meri-mg.github.io/To-Do-List/dist/",
      github: "https://github.com/Meri-MG/To-Do-List",
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
