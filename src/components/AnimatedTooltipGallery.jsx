import { useState } from "react";
import { motion } from "framer-motion";
import "./AnimatedTooltipGallery.css"

const images = [
  { src: '../../public/logoReact.svg', alt: "React", tooltip: "React"},
  { src: '../../public/logoJS.png', alt: "JavaScript", tooltip: "JavaScript"},
  { src: '../../public/logoHTML.png', alt: "HTML", tooltip: "HTML"},
  { src: '../../public/logoCSS.png', alt: "CSS", tooltip: "CSS"}
];

const AnimatedTooltipGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex justify-center gap-8 py-10 flex-wrap margin-index">
      <h1 className="titleTecno">Tecnologias</h1>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative flex justify-center items-center m-30 mt-30"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Imagen */}
          <img
            src={image.src}
            alt={image.alt}
            className="w-32 h-32 cursor-pointer object-cover rounded-lg size"
          />

          {/* Tooltip animado */}
          {hoveredIndex === index && (
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 50 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-20 bg-gray-800 text-white text-sm px-4 py-2 rounded-md shadow-lg"
            >
              {image.tooltip}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTooltipGallery;