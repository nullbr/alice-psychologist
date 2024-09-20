import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import Logo from "../assets/fullLogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-white py-6">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={Logo} alt="Logo" className="w-24 h-auto mr-4" />
            <div>
              <h2 className="text-xl font-bold mb-2 text-blue-700">
                Alice Araujo
              </h2>
              <p className="text-gray-400">
                Atendimento psicológico para adolescentes e adultos. Consultório
                em Ipanema/RJ e sessões online disponíveis para todo o Brasil e
                mundo.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="https://wa.me/+5521992062217?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+visita"
              className="text-blue-400 hover:underline flex flex-row gap-2 items-center"
              rel="noopener noreferrer"
            >
              <i>
                <BsWhatsapp />
              </i>
              21 99206-2217
            </a>
            <a
              href="https://www.instagram.com/psi.alicearaujo"
              className="text-blue-400 hover:underline  flex flex-row gap-2 items-center"
              rel="noopener noreferrer"
            >
              <i>
                <BsInstagram />
              </i>
              @psi.alicearaujo
            </a>
            <a
              href="https://www.linkedin.com/in/alice-araujo"
              className="text-blue-400 hover:underline  flex flex-row gap-2 items-center"
              rel="noopener noreferrer"
            >
              <i>
                <BsLinkedin />
              </i>
              alice-araujo
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Alice Araujo Psicologia. Todos os
            direitos reservados.
          </p>
          <p className="text-center text-gray-400 mt-2">CRP: 05/36914</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
