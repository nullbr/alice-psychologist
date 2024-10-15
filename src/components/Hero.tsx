import { FaWhatsapp } from "react-icons/fa";
import HeroImg from "../assets/herobg.png";
import InPerson from "../assets/in-person.svg";
import OnlineMeeting from "../assets/online-meeting.svg";

const Hero = () => {
  return (
    <section id="hero" className="bg-outline-pattern text-gray-600">
      <article className="flex flex-col lg:flex-row gap-6 lg:gap-10 text-center md:text-xl -mb-[40svw] lg:-mb-[50vh] max-w-7xl mx-auto h-[100svh] pt-20">
        <div className="flex flex-col gap-2 sm:gap-4 lg:gap-0 h-full justify-around max-w-[500px] max-h-[500px] m-auto lg:pb-10 px-6 lg:px-0">
          <div className="lg:h-[50%] flex flex-col items-center justify-end lg:pb-20">
            <p className="sm:text-xl md:text-2xl">
              Psicóloga Especializada em Ansiedade e Terapia
              Cognitivo-Comportamental
            </p>
          </div>
          <div className="lg:h-[50%] flex flex-col items-center justify-start lg:pt-10">
            <p className="lg:text-white mb-2 sm:mb-6 sm:text-xl md:text-2xl">
              Ofereço consultas online e presenciais em Ipanema/RJ. Entre em
              contato para agendar uma sessão.
            </p>
            <div className="flex items-center justify-center gap-10 mb-2">
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
              href="https://wa.me/+5521992062217?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+atendimento"
              className="text-blue-500 hover:text-green-600/90 border-2 border-blue-500 hover:border-green-600/90 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center me-2"
            >
              <FaWhatsapp className="text-xl me-2" />
              Contato via WhatsApp
            </a>
          </div>
        </div>
        <img
          src={HeroImg}
          alt="Alice Araujo"
          className="rounded-full border border-blue-500 shadow-xl w-[80svw] h-[80svw] lg:w-[40vw] lg:h-[40vw] max-w-[500px] max-h-[500px] lg:max-w-[600px] lg:max-h-[600px] justify-center items-center text-xl md:text-2xl m-auto mx-auto mb-2 lg:mb-auto"
        />
      </article>
      <div className="bg-gray-500 text-center text-white md:text-xl pt-[40svw] lg:pt-[50vh] rounded-t-7xl" />
    </section>
  );
};

export default Hero;
