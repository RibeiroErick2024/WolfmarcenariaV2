import React from 'react';

import { FaPencil } from "react-icons/fa6";

function Home() {
  
  const handleScroll = () => {
    const section = document.getElementById("description-section");
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  
  
  return (
    <main className='flex-1'>
    {/* Imagem de fundo */}
    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url("src/assets/imgFundo.jpeg")' }}>
    <div className="flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-50">
    <img 
    src="src/assets/logo.png" 
    alt="Logo" 
    className="w-auto h-auto opacity-60 mb-2" 
    />
    </div>
      {/* Menu de navegação */}
      <nav className="absolute top-4 right-4">
      <ul className="flex space-x-8 text-3xl text-white">
      <li><a href="#projects-section" className="hover:underline">Ambientes</a></li>
      <li><a href="#contact-section" className="hover:underline">Contato</a></li>
      </ul>
      </nav>
    
    {/* Título */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-center mt-8">
    <h1 className="text-4xl text-white mb-2">Wolf</h1> 
    <h2 className="text-2xl text-white">móveis planejados</h2> 
    </div>
    
    {/* Botão de Scroll */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-y-[-60px]">
    <button
    onClick={handleScroll}
    className="bg-transparent border-2 border-black text-black py-2 px-6 rounded-lg hover:bg-white hover:text-black transition duration-300"
    >
    Saiba mais
    </button>
    </div>
   
      
    
      </div>
      </main>
    );
  };
  
  export default Home;





