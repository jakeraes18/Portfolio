import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const experiences = [
  {
    title: "Desarrollador Cells",
    company: "GoNet Orion Innovation",
    description: "Desarrollando aplicaciones web.",
    date: "2025 - Present",
    color: "#3B82F6",
  },
  {
    title: "Diseñador Web Front End",
    company: "Grupo Salinas",
    description: "Diseño y maquetacion de paginas web en micrositios de TV Azteca, Elektra, Italika, Banco Azteca, etc.",
    date: "2020 - 2025",
    color: "#3B82F6",
  },
  {
    title: "Desarrollador Web JR",
    company: "Sienerc",
    description: "Proyecto de desarrollo en pagina web ingresando con un login conectando a base de datos con PhpMyAdmin en el panel de control CPanel, funcion CRUD (Create Read Update Delete) para la administración de pedidos en la pagina web de la empresa. Herramientas: CPanel, PHP, HTML, JavaScript, CSS, Bootstrap.",
    date: "2020 - 2020",
    color: "#3B82F6",
  },
  {
    title: "Analista Soporte Tenico",
    company: "Super Mayoreo Naturista",
    description: "Mantenimiento a equipos de computo, configuración de computadoras a dominio, instalación de sistema operativo Windows y Linux, instalación y configuración de impresoras, soporte vía telefónica.",
    date: "2019 - 2020",
    color: "#3B82F6",
  },
];

const Experience = () => {
  return (
    <div style={{width: "90%", margin: "0 auto"}} className="bg-gray-900 text-white p-10">
      <h2 style={{fontSize: 30}} className="text-4xl font-bold mb-6 text-center">Experiencia</h2>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1F2937", color: "#fff", borderRadius: "10px" }}
            contentArrowStyle={{ borderRight: "7px solid #1F2937" }}
            date={exp.date}
            iconStyle={{ background: exp.color, color: "#fff" }}
          >
            <h3 className="text-lg font-bold">{exp.title}</h3>
            <h4 className="text-gray-400">{exp.company}</h4>
            <p>{exp.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;