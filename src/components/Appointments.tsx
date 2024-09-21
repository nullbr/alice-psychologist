import Empathy from "../assets/empathy.svg";
import Personalized from "../assets/personalized.svg";
import Updated from "../assets/updated.svg";
import Confidence from "../assets/confidence.svg";
import Strategies from "../assets/strategies.svg";
import Support from "../assets/support.svg";

const Appointments = () => {
  return (
    <section id="appointments" className="section-offset">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <h2 className="mb-6 text-center">Minha Consulta</h2>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
          Cada pessoa vivencia a dor de forma única, e é essencial que o
          atendimento psicológico respeite essa individualidade. Eu, Alice
          Araujo, ofereço um atendimento psicológico baseado na ética, bom humor
          e respeito.
        </p>

        <div className="bg-purple-300 p-10 mb-8 shadow-2xl rounded-7xl transform transition-transform duration-300 hover:scale-[1.03]">
          <h3 className="text-2xl mb-6 text-center">Meu Diferencial</h3>
          <ul className="list-none text-blue-900 space-y-6 leading-relaxed max-w-3xl mx-auto">
            <li className="flex items-start space-x-3">
              <img src={Empathy} alt="Empatia" className="h-10 w-10" />
              <div>
                <strong className="text-purple-900">
                  Empatia e Compreensão
                </strong>
                <p>Um ambiente acolhedor onde você se sentirá compreendido.</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <img
                src={Personalized}
                alt="Personalizado"
                className="h-10 w-10"
              />
              <div>
                <strong className="text-purple-900">
                  Abordagem Personalizada
                </strong>
                <p>
                  Planos de tratamento adaptados às suas necessidades
                  específicas.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <img src={Updated} alt="Atualizado" className="h-10 w-10" />
              <div>
                <strong className="text-purple-900">
                  Atualização Contínua
                </strong>
                <p>
                  Técnicas eficazes e sempre atualizadas, com foco em constante
                  aperfeiçoamento.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-purple-300 p-10 mb-8 shadow-2xl rounded-7xl transform transition-transform duration-300 hover:scale-[1.03]">
          <h3 className="text-2xl mb-6 text-center">
            Por Que Escolher o Meu Atendimento?
          </h3>
          <ul className="list-none text-blue-900 space-y-6 leading-relaxed max-w-3xl mx-auto">
            <li className="flex items-start space-x-3">
              <img src={Confidence} alt="Confiança" className="h-10 w-10" />
              <div>
                <strong className="text-purple-900">
                  Desenvolvimento de Confiança e Autocontrole
                </strong>
                <p>Essenciais para enfrentar desafios.</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <img src={Strategies} alt="Estratégias" className="h-10 w-10" />
              <div>
                <strong className="text-purple-900">
                  Estratégias Eficazes
                </strong>
                <p>
                  Uso da Terapia Cognitivo-Comportamental (TCC) para resultados
                  comprovados.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <img src={Support} alt="Apoio" className="h-10 w-10" />
              <div>
                <strong className="text-purple-900">Apoio</strong>
                <p>Suporte contínuo durante todo o processo terapêutico.</p>
              </div>
            </li>
          </ul>
          <p className="text-blue-900 mt-6 text-lg max-w-3xl mx-auto">
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
