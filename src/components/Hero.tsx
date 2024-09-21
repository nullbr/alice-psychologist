import { FaWhatsapp } from "react-icons/fa";
import HeroImg from "../assets/herobg.png";
import InPerson from "../assets/in-person.svg";
import OnlineMeeting from "../assets/online-meeting.svg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-outline-pattern rounded-bl-7xl text-gray-600 section-offset"
    >
      <article className="flex flex-col lg:flex-row gap-6 lg:gap-10 text-center md:text-xl -mb-[45vw] md:-mb-80 max-w-7xl mx-auto px-6 pb-10 pt-16 sm:pt-28 h-[100svh] sm:h-auto">
        <div className="flex flex-col gap-2 sm:gap-4 lg:gap-0 h-full justify-around sm:justify-normal lg:justify-around max-w-[500px] mx-auto">
          <div className="lg:h-[50%] flex flex-col items-center justify-center">
            <h1>Alice Araujo</h1>
            <p className="sm:text-xl md:text-2xl ">
              Psicóloga Especializada em Ansiedade e Terapia
              Cognitivo-Comportamental
            </p>
          </div>
          <div className="lg:h-[50%] flex flex-col items-center justify-center">
            <p className="lg:text-white mb-2 sm:mb-6 sm:text-xl md:text-2xl">
              Ofereço consultas online e presenciais em Ipanema/RJ. Entre em
              contato para agendar uma sessão.
            </p>
            <div className="flex items-center justify-center gap-10 mb-2 sm:mb-6">
              <img
                src={InPerson}
                alt="Atendimento Presencial"
                className="w-8 h-8 sm:w-12 sm:h-12"
              />
              <img
                src={OnlineMeeting}
                alt="Atendimento Online"
                className="w-8 h-8 sm:w-12 sm:h-12"
              />
            </div>
            <a
              href="https://wa.me/+5521992062217?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+visita"
              className="text-blue-700 hover:text-white border-2 border-blue-700 hover:border-green-600/90 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center me-2"
            >
              <FaWhatsapp className="text-xl me-2" />
              Contato via WhatsApp
            </a>
          </div>
        </div>
        <img
          src={HeroImg}
          alt="Alice Araujo"
          className="rounded-full border border-blue-700 shadow-xl w-[70vw] h-[70vw] md:w-[500px] md:h-[500px] justify-center items-center text-xl md:text-2xl mx-auto"
        />
      </article>
      <div className="bg-brown-500 text-center text-white md:text-xl pt-[40vw] md:pt-[330px] rounded-l-7xl" />
    </section>
  );
};

export default Hero;
