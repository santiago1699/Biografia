import React from "react";
import image from '../../media/3.jpg'
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Déjame decirte algo sobre mí</h3>
        <p>
          Me seria un gran honor poder obtener una buena experiencia en su equipo y trabajar para poder tener resultados positivos
          durante el transcurso del tiempo que si usted quiere poder llevar a cabo.<br></br>
          Obtuve durante el transcurso de mi corta vida el titulo secundario de "perito mercantil" donde tuve 5 años de informatica en excel 
          analisis de datos, e hice un curso de ingles donde asisti
          4 años. Actualmente soy estudiante de la UTN en la carrera de Ing. en sistemas de información. <br></br>
          Tambien tengo conocimientos con certificados de cada uno en HTML,CSS,JAVASCRIPT,WEBPACK,GIT&GITHUB, 
          y CONFIGURACION DE ENTORNO EN DESARROLO DE WINDOWS Y LINUX. Tengo la disposición de poner estos conocimientos en su equipo.
          <br></br>
          Respetuoso, amable, seguro y eficaz.
          <br></br>
          Seria todo un honor ser aceptado en su equipo.
          Si mi perfil puede ser util para la posicion requerida no dude en ponerse en contacto conmigo y de esa manera poder acercar mas sobre mi experiencia
          e intercambiar sobre la mision y las posibles oportunidades que puedan surgir.
        </p>
      </div>
      <div className="about-img">
        <img
          src={image}
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
