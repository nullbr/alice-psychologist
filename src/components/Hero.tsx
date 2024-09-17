import { FaWhatsapp } from "react-icons/fa";
import HeroImg from "../assets/herobg.png";

const Hero = () => {
  return (
    <section id="hero">
      <article className="flex gap-10 text-center text-white md:text-xl -mb-80 max-w-7xl mx-auto px-6 pb-10 pt-28 bg-outline-pattern">
        <div className="">
          <div className="py-10">
            <h1 className="text-4xl md:text-5xl mb-4">Alice Araujo</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Psicóloga Especializada em Ansiedade e Terapia
              Cognitivo-Comportamental
            </p>
          </div>
          <div className="">
            <p className="text-lg text-gray-700 mb-6">
              Ofereço consultas online e presenciais em Ipanema/RJ. Entre em
              contato para agendar uma sessão.
            </p>
            <a
              href="https://wa.me/+5521992062217?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+visita"
              className="text-white hover:text-white bg-green-500 hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
            >
              <FaWhatsapp className="text-xl me-2" />
              Contato via WhatsApp
            </a>
          </div>
        </div>
        <img
          src={HeroImg}
          alt="Alice Araujo"
          className="rounded-full border border-blue-700 shadow-xl w-[500px] h-[500px] justify-center items-center"
        />
      </article>
      <div className="bg-brown-500 page-padding text-center text-white md:text-xl pt-[330px] rounded-l-7xl" />
    </section>
  );
};

export default Hero;
