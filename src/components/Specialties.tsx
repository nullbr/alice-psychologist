const Specialties = () => {
  return (
    <section id="specialties" className="section-offset">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Minhas Especialidades
        </h1>
        <p className="text-lg text-gray-700 mb-10 text-center">
          Atendo adolescentes e adultos, oferecendo sessões online quanto
          presencialmente em Ipanema/RJ. Com uma abordagem personalizada e
          acolhedora, estou aqui para ajudar você a superar desafios e alcançar
          uma vida mais equilibrada e feliz.
        </p>

        <div className="bg-white p-10 mb-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Ansiedade e Terapia Cognitivo-Comportamental (TCC)
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Entenda a Ansiedade:</strong>
            <br />A ansiedade é uma resposta natural do corpo às emoções e
            pensamentos. Quando esse sentimento interfere na sua vida cotidiana,
            é fundamental procurar ajuda.
          </p>

          <h3 className="text-xl font-medium text-gray-800 mb-3">
            Sintomas comuns de Ansiedade:
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Contratura muscular</li>
            <li>Dor de cabeça</li>
            <li>Dor no estômago</li>
            <li>Falta de ar</li>
            <li>Aperto no peito</li>
            <li>Sudorese</li>
            <li>Náusea</li>
            <li>Taquicardia</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-800 mb-3">
            Efetividade da Terapia
          </h3>
          <p className="text-gray-700 mb-4">
            A Terapia Cognitivo-Comportamental (TCC) é uma abordagem científica
            e estruturada, focada em ajudar você a:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
            <li>
              <strong>Reconhecer e Monitorar:</strong> Identificar sintomas e
              distorções de pensamento.
            </li>
            <li>
              <strong>Diminuir o Impacto Emocional:</strong> Aprender a reduzir
              o impacto emocional da ansiedade.
            </li>
          </ul>
          <p className="text-gray-700">
            Se você ou alguém que conhece sofre de ansiedade, não hesite em
            procurar ajuda. Existe tratamento.
          </p>
        </div>

        <div className="bg-white p-10 mb-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Equilíbrio Emocional para Vestibulandos e Estudantes de Medicina
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>O Desafio do Equilíbrio Emocional:</strong>
            <br />O equilíbrio emocional é tão importante quanto o preparo
            acadêmico na jornada para o vestibular de Medicina. Com técnicas da
            TCC, ajudo estudantes a lidar com emoções como:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Culpa</li>
            <li>Medo</li>
            <li>Ansiedade</li>
            <li>Falta de motivação</li>
            <li>Frustração</li>
            <li>Minimização de resultados positivos</li>
            <li>Catastrofização</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-800 mb-3">
            Superando Desafios Emocionais
          </h3>
          <p className="text-gray-700 mb-6">
            Com acompanhamento psicológico, você aprenderá a identificar os
            sinais de ansiedade e desenvolver estratégias para superá-los,
            melhorando seu desempenho e bem-estar.
          </p>

          <h3 className="text-xl font-medium text-gray-800 mb-3">
            Transforme sua Preparação
          </h3>
          <p className="text-gray-700">
            A ansiedade não deve atrapalhar seus sonhos de cursar Medicina.
            Aprenda a lidar com o estresse e aumente suas chances de sucesso.
          </p>
        </div>

        <div className="text-center p-10 bg-[#2c3e50] text-white mt-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Como Posso Ajudar?</h2>
          <p className="text-lg">
            Se você está passando por algum desses desafios,{" "}
            <a href="mailto:contato@seusite.com" className="underline">
              marque uma consulta
            </a>{" "}
            para descobrir como posso ajudar. Atendimento online ou presencial
            em Ipanema/RJ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
