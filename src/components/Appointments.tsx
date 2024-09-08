const Appointments = () => {
  return (
    <section id="appointments" className="section-offset">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Minha Consulta
        </h1>
        <p className="text-lg text-gray-700 mb-10 text-center">
          Cada pessoa vivencia a dor de forma única, e é essencial que o
          atendimento psicológico respeite essa individualidade. Eu, Alice
          Araujo, ofereço um atendimento psicológico baseado na ética, bom humor
          e respeito.
        </p>

        <div className="bg-white p-10 mb-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Meu Diferencial
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>
              <strong>Empatia e Compreensão:</strong> Um ambiente acolhedor onde
              você se sentirá compreendido.
            </li>
            <li>
              <strong>Abordagem Personalizada:</strong> Planos de tratamento
              adaptados às suas necessidades específicas.
            </li>
            <li>
              <strong>Atualização Contínua:</strong> Técnicas eficazes e
              atualizadas, com base em constante aperfeiçoamento.
            </li>
          </ul>
        </div>

        <div className="bg-white p-10 mb-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Por Que Escolher o Meu Atendimento?
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>
              <strong>Desenvolvimento de Confiança e Autocontrole:</strong>{" "}
              Essenciais para enfrentar desafios.
            </li>
            <li>
              <strong>Estratégias Eficazes:</strong> Uso da Terapia
              Cognitivo-Comportamental (TCC) para resultados comprovados.
            </li>
            <li>
              <strong>Apoio:</strong> Suporte contínuo durante todo o processo
              terapêutico.
            </li>
          </ul>
          <p className="text-gray-700">
            Não deixe que a dor e a ansiedade afetem sua vida. Está mais do que
            na hora de investir nessa mudança e buscar uma nova forma de lidar
            com os desafios.
          </p>
        </div>

        <div className="text-center p-10 bg-[#2c3e50] text-white mt-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Entre em Contato</h2>
          <p className="text-lg">
            Pronto para iniciar sua jornada de autoconhecimento e superação?{" "}
            <a href="mailto:contato@seusite.com" className="underline">
              Marque uma consulta
            </a>{" "}
            e descubra como posso ajudar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Appointments;
