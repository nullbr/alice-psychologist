import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import InPerson from "../assets/in-person2.svg";
import OnlineMeeting from "../assets/online2.svg";
import { BiPhoneCall } from "react-icons/bi";

const Contact = () => {
  return (
    <section id="contact" className="section-offset">
      <div className="max-w-7xl mx-auto px-6 pt-10 text-lg">
        <h2 className="mb-6 text-center">Locais de Atendimento</h2>

        <div className="text-gray-600 flex gap-4 justify-around mb-8">
          <div className="flex flex-col justify-start items-center gap-4">
            <img src={InPerson} alt="Empatia" className="h-10 w-10" />
            <div className="text-center">
              <strong className="text-slate-400">Presencial</strong>
              <p className="max-w-60 text-gray-700">
                Atendimento em Ipanema, RJ
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img
              src={OnlineMeeting}
              alt="Personalizado"
              className="h-10 w-10 text-white"
            />
            <div className="text-center">
              <strong className="text-slate-400">Online</strong>
              <p className="max-w-60 text-gray-700">
                Atendimento disponível para clientes no Brasil e no mundo
              </p>
            </div>
          </div>
        </div>

        <h2 className="mb-6 text-center">Entre em Contato</h2>

        <div className="flex flex-wrap justify-around gap-4 sm:gap-6 pt-6 text-center mb-8">
          <div>
            <a
              href="https://wa.me/+5521992062217?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+atendimento"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-600"
            >
              <BiPhoneCall size={24} className="text-gray-500 mx-auto my-2" />
              <p className="text-gray-700">(21) 99206-2217</p>
            </a>
          </div>

          <div>
            <a
              href="https://www.instagram.com/psi.alicearaujo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-600"
            >
              <BsInstagram size={24} className="text-gray-500 mx-auto my-2" />
              <p className="text-gray-700">@psi.alicearaujo</p>
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/alice-araujo-7bbb10169"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-600"
            >
              <FaLinkedinIn size={24} className="text-gray-500 mx-auto my-2" />
              <p className="text-gray-700">alice-araujo</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
