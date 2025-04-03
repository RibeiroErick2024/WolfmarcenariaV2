import React from 'react';

const Header = () => {
  const handleScroll = () => {
    // Encontra a seção para rolar (por exemplo, a seção com o id "section")
    const section = document.getElementById("section");

    // Rola suavemente até a seção usando scrollIntoView
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <header className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url("src/assets/imgFundo.jpeg")' }}>
      <div className="flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-50">
        {/* Logo com tamanho maior e opacidade de 60% */}
        <img 
          src="src/assets/logo.png" 
          alt="Logo" 
          className="w-auto h-auto opacity-60 mb-2" // Menor margem inferior para aproximar o título
        />
      </div>

      {/* Div para centralizar o h1 e h2, com margem superior para afastar do logo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-center mt-8">
        <h1 className="text-4xl text-white mb-2">Wolf</h1> {/* Adicionando margem inferior no h1 */}
        <h2 className="text-2xl text-white">móveis planejados</h2> {/* Cor do texto ajustada para branco */}
      </div>

      {/* Botão Saiba Mais */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-y-[-60px]">
        <button
          onClick={handleScroll}
          className="bg-transparent border-2 border-black text-black py-2 px-6 rounded-lg hover:bg-white hover:text-black transition duration-300"
        >
          Saiba mais
        </button>
      </div>

      {/* Seção para rolar */}
      <div id="section" className="h-screen bg-gray-100 flex items-center justify-center flex-col">
        <h2 className="text-3xl text-center mb-40">Qualidade e Sofisticação em Cada Detalhe!</h2>
        <h2 className="text-3xl text-center">Mais de 15 Anos Criando Móveis de Luxo Sob Medida</h2>
        
      </div>

      {/* Navegação no canto superior direito */}
      <nav className="absolute top-4 right-4">
        <ul className="flex space-x-8 text-3xl text-white">
          <li><a href="#section" className="hover:underline">Ambientes</a></li>
          <li><a href="#section" className="hover:underline">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
