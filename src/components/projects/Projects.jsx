import React from 'react'

function Projects() {

 // Dados dos projetos
 const projetos = [
    {
      id: 1,
      titulo: "Sala de Estar",
      descricao: "Projeto de sala de estar com móveis planejados sob medida.",
      imagem: "src/assets/sala.jpg"
    },
    {
      id: 2,
      titulo: "Cozinha Gourmet",
      descricao: "Cozinha gourmet moderna com armários planejados.",
      imagem: "src/assets/cozinha.jpg"
    },
    {
      id: 3,
      titulo: "Home Office",
      descricao: "Espaço de trabalho otimizado com móveis sob medida.",
      imagem: "src/assets/quarto.jpg"
    },
    {
      id: 4,
      titulo: "Area Gourmet",
      descricao: "Area Gourmet planejado para conforto e sofisticação.",
      imagem: "src/assets/area.jpg"
    }
  ];

  return (
   
   <div id="projects-section" className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-32">
  <h2 className="text-3xl font-bold mb-10">Nossos Projetos</h2>
  <ul className='grid auto-rows-min gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full max-w-6xl'>
    {projetos.map((projeto) => (
      <li key={projeto.id} className='w-full'>
        
        <div className='group rounded-lg border bg-white shadow-md overflow-hidden flex flex-col'>
          {/* Efeito hover para aumentar a imagem */}
          <img 
            src={projeto.imagem} 
            alt={projeto.titulo} 
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold group-hover:text-black transition duration-300">{projeto.titulo}</h3>
            <p className="text-sm text-gray-600 group-hover:text-black transition duration-300">{projeto.descricao}</p>
          </div>
        </div>
      </li>
    ))}
  </ul>
</div>
  )
}

export default Projects
