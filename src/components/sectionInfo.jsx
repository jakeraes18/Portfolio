import React from "react";
import "./sectionInfo.css"
import imgPrincipal from "../../public/jr.jpg"
import CopyTextButton from "./CopyTextButton";

const sectionInfo = () => {
    return (
        <div className="sectionInfo">
            <section>
                <h1>
                    Hola, soy Jason Ramirez <br />
                    <span>Desarrolador Frontend</span>
                </h1>
                <p>
                Con mas de 3 años de experiencia, trabajando en proyectos para empresas medianas y grandes.
                En mi experiencia, he trabajado con las tecnologías FrontEnd como HTML, CSS y JavaScript, así como sus frameworks como SASS y NodeJS y metodología ágil como SCRUM.
                En lo largo de mi carrera profesional, he terminado cursos para reforzar mis conocimientos de Desarrollo Web en Udemy y JavaScript en Coderhouse.
                Tengo experiencia desarrollando aplicaciones web con bases de datos en MySQL, manejando la operación de CRUD (Créate, Read, Update, Delete), para la función de inventariado.
                </p>
                <CopyTextButton />
            </section>
            <img className="princImg" src={imgPrincipal} alt="" />
        </div>
    );
};

export default sectionInfo;