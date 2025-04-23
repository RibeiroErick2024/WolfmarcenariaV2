import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <section className="w-full" id='contact-section'>
      {/* Imagem com sobreposição */}
      <div
        className="w-full h-[60vh] bg-cover bg-center relative"
        style={{ backgroundImage: 'url("/src/assets/imgContato.jpg")' }} // ajuste o path se necessário
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h2 className="text-white text-4xl font-semibold text-center">
            Entre em contato com a gente!
          </h2>
        </div>
      </div>

      {/* Contatos */}
      <div className="flex flex-col md:flex-row items-center justify-around gap-8 py-12 bg-white text-black text-lg">
        <div className="flex items-center gap-4 group">
          <FaPhoneAlt className="text-4xl transition duration-300 group-hover:text-blue-600 group-hover:scale-110" />
          <span>(11) 1234-5678</span>
        </div>

        <div className="flex items-center gap-4 group">
          <FaWhatsapp className="text-4xl text-green-600 transition duration-300 group-hover:text-green-800 group-hover:scale-110" />
          <a
            href=" https://wa.me/+5548974001064"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Whatsapp
          </a>
         
        </div>

        <div className="flex items-center gap-4 group">
          <FaInstagram className="text-4xl text-pink-500 transition duration-300 group-hover:text-pink-700 group-hover:scale-110" />
          <a
            href="https://www.instagram.com/wolf.moveis_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @Wolf.moveis_
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
