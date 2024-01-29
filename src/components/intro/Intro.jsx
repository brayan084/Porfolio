import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/brayancortado.png";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Me encanta el mundo de la programación, motivado por desafíos que
            expandan mis habilidades y conocimientos. Mi enfoque se centra en
            simplificar procesos y mejorar la funcionalidad mediante soluciones
            sistemáticas. Busco constantemente oportunidades para aplicar mis
            habilidades en programación con el objetivo de facilitar y mejorar
            la vida de los demás.
          </p>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>1+ año</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>20+ Proyectos completados</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Certificados</h5>
              <small>5+ Certificaciones</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>20+ Proyectos completados</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
