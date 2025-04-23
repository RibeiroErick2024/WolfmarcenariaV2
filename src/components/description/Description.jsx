import React from 'react';

import { FaPencilAlt } from 'react-icons/fa';

function Description() {
  const scrollToProjectsSection = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <section id="description-section" className="h-screen bg-gray-100 flex flex-col items-center justify-center px-4 text-center">
      <h2 className="text-3xl flex items-center justify-center mb-6">
        <FaPencilAlt className="mr-3" />
        Qualidade e sofisticação em cada detalhe
      </h2>

      <h2 className="text-3xl flex items-center justify-center mb-12">
        <FaPencilAlt className="mr-3" />
        Mais de 15 anos criando móveis de luxo sob medida
      </h2>

      <button
        onClick={scrollToProjectsSection}
        className="bg-transparent border-2 border-black text-black py-2 px-6 rounded-lg hover:bg-black hover:text-white transition duration-300"
      >
        Conheça nossos projetos
      </button>
    </section>
  );
}

export default Description;
