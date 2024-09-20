import Empathy from "../assets/empathy.svg";
import Personalized from "../assets/personalized.svg";
import Updated from "../assets/updated.svg";
import Confidence from "../assets/confidence.svg";
import Strategies from "../assets/strategies.svg";
import Support from "../assets/support.svg";

const Appointments = () => {
  return (
    <section id="appointments" className="section-offset">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="mb-6 text-center">Minha Consulta</h2>
        <p className="text-lg text-gray-700 mb-10 text-center">
          Cada pessoa vivencia a dor de forma única, e é essencial que o
          atendimento psicológico respeite essa individualidade. Eu, Alice
          Araujo, ofereço um atendimento psicológico baseado na ética, bom humor
          e respeito.
        </p>

        <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-10 mb-8 shadow-2xl rounded-xl transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl mb-6 text-center">Meu Diferencial</h3>
          <ul className="list-none text-gray-700 space-y-6 leading-relaxed">
            <li className="flex items-start space-x-3">
              <img src={Empathy} alt="Empatia" className="h-10 w-10" />
              <div>
                <strong className="text-gray-900">
                  Empatia e Compreensão:
                </strong>{" "}
                Um ambiente acolhedor onde você se sentirá compreendido.
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <img
                src={Personalized}
                alt="Personalizado"
                className="h-10 w-10"
              />
              <div>
                <strong className="text-gray-900">
                  Abordagem Personalizada:
                </strong>{" "}
                Planos de tratamento adaptados às suas necessidades específicas.
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <img src={Updated} alt="Atualizado" className="h-10 w-10" />
              <div>
                <strong className="text-gray-900">Atualização Contínua:</strong>{" "}
                Técnicas eficazes e sempre atualizadas, com foco em constante
                aperfeiçoamento.
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r to-blue-200 from-purple-300 p-10 mb-8 shadow-2xl rounded-xl transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl mb-6 text-centerr">
            Por Que Escolher o Meu Atendimento?
          </h3>
          <ul className="list-none text-blue-900 space-y-6 leading-relaxed">
            <li className="flex items-start space-x-3">
              <img src={Confidence} alt="Confiança" className="h-10 w-10" />
              <div>
                <strong className="text-purple-900">
                  Desenvolvimento de Confiança e Autocontrole:
                </strong>{" "}
                Essenciais para enfrentar desafios.
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <img src={Strategies} alt="Estratégias" className="h-10 w-10" />
              <div>
                <strong className="text-purple-900">
                  Estratégias Eficazes:
                </strong>{" "}
                Uso da Terapia Cognitivo-Comportamental (TCC) para resultados
                comprovados.
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <img src={Support} alt="Apoio" className="h-10 w-10" />
              <div>
                <strong className="text-purple-900">Apoio:</strong> Suporte
                contínuo durante todo o processo terapêutico.
              </div>
            </li>
          </ul>
          <p className="text-blue-900 mt-6 text-lg">
            Não deixe que a dor e a ansiedade afetem sua vida. Está mais do que
            na hora de investir nessa mudança e buscar uma nova forma de lidar
            com os desafios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Appointments;
