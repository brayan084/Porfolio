import React from "react";
import icon_HTML from "../../assets/experencie/icon_html.png";
import icon_JS from "../../assets/experencie/icon_Js.png";
import icon_TS from "../../assets/experencie/icon_Ts.png";
import icon_css from "../../assets/experencie/icon_css.png";
import icon_React from "../../assets/experencie/icon_React.png";
import icon_bootstrap from "../../assets/experencie/icon_bootstrap.png";
import icon_tailwind from "../../assets/experencie/icon_Tailwind.png";
import icon_Python from "../../assets/experencie/icon_python.png";
import icon_Node from "../../assets/experencie/icon_Node.png";
import icon_django from "../../assets/experencie/icon_django.png";
import icon_sql from "../../assets/experencie/icon_sql.png";
import icon_mongoDB from "../../assets/experencie/icon_mongodb.png";
import icon_github from "../../assets/experencie/icon_github.png";
import icon_docker from "../../assets/experencie/icon_docker.png";
import icon_heroku from "../../assets/experencie/icon_heroku.png";
import icon_firebase from "../../assets/experencie/icon_firebase.png";
import icon_photoshop from "../../assets/experencie/icon_photoshop.png";
import gif from "../../assets/gif/avatar3.gif";
import "./experience.css";

// import { BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5>Technologies</h5>
      <h2>Skills</h2>
      <div className="container centerd-element">
          <img src={gif} alt="perezoso" />
      </div>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desarrollo Front-end</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img src={icon_HTML} alt="HTML" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <img src={icon_TS} alt="HTML" />
              <h4>typeScript</h4>
            </article>
            <article className="experience__details">
              <img src={icon_css} alt="HTML" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <img src={icon_React} alt="HTML" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <img src={icon_bootstrap} alt="HTML" />
              <h4>bootstrap</h4>
            </article>
            <article className="experience__details">
              <img src={icon_tailwind} alt="HTML" />
              <h4>Tailwind</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Desarrollo Back-end</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img src={icon_JS} alt="HTML" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <img src={icon_Python} alt="HTML" />
              <h4>Python</h4>
            </article>
            <article className="experience__details">
              <img src={icon_Node} alt="HTML" />
              <h4>Node</h4>
            </article>
            <article className="experience__details">
              <img src={icon_django} alt="HTML" />
              <h4>Django</h4>
            </article>
            <article className="experience__details">
              <img src={icon_sql} alt="HTML" />
              <h4>Sql</h4>
            </article>
            <article className="experience__details">
              <img src={icon_mongoDB} alt="HTML" />
              <h4>Mongodb</h4>
            </article>
          </div>
        </div>
        <div className="experience__tools">
          <h3>DevOps / Herramientas</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img src={icon_github} alt="HTML" />
              <h4>Git/GitHub</h4>
            </article>
            <article className="experience__details">
              <img src={icon_docker} alt="HTML" />
              <h4>Docker</h4>
            </article>
            <article className="experience__details">
              <img src={icon_firebase} alt="HTML" />
              <h4>Firebase</h4>
            </article>
            <article className="experience__details">
              <img src={icon_heroku} alt="HTML" />
              <h4>Heroku</h4>
            </article>
            <article className="experience__details">
              <img src={icon_photoshop} alt="HTML" />
              <h4>Photoshop</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
