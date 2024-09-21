const Specialties = () => {
  return (
    <section id="specialties" className="section-offset">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4 md:gap-10 pt-10">
        <h2 className="text-center">Minhas Especialidades</h2>
        <p className="sm:text-lg text-gray-700 mb-4 sm:mb-10 text-center max-w-3xl mx-auto">
          Atendo adolescentes e adultos, com sessões presenciais em Ipanema/RJ e
          online para qualquer região. Com uma abordagem personalizada e
          acolhedora, estou aqui para ajudar você a superar desafios e alcançar
          uma vida mais equilibrada e feliz.
        </p>

        <div className="bg-brown-500 mb-8 shadow-2xl rounded-7xl transform transition-transform duration-300 hover:scale-[1.03] relative text-white p-6 pt-10 text-lg">
          <h2 className="text-center text-2xl font-semibold mb-4">
            Ansiedade e Terapia Cognitivo-Comportamental (TCC)
          </h2>

          <div className="flex flex-col items-center py-4 border-b border-blue-700 text-center">
            <h3 className="text-xl font-medium mb-2 text-white">
              O que é Ansiedade?
            </h3>
            <p className="max-w-xl text-slate-100">
              Ansiedade é uma resposta natural a emoções e pensamentos. Quando
              interfere na vida cotidiana, é importante buscar ajuda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="py-4 border-b md:border-b-0 md:border-r md:pr-6 border-blue-700">
              <h3 className="text-lg font-bold mb-3 text-white">
                Sintomas Comuns
              </h3>
              <ul className="list-disc list-inside space-y-1 text-slate-200">
                <li>Contratura muscular</li>
                <li>Dor de cabeça</li>
                <li>Dor no estômago</li>
                <li>Falta de ar</li>
                <li>Aperto no peito</li>
                <li>Sudorese</li>
                <li>Náusea</li>
                <li>Taquicardia</li>
              </ul>
            </div>

            <div className="py-4">
              <h3 className="text-lg font-bold mb-3 text-white">
                Benefícios da TCC
              </h3>
              <p className="mb-4 text-slate-200">A TCC ajuda a:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-200">
                <li>
                  <strong>Identificar:</strong> Sintomas e distorções de
                  pensamento.
                </li>
                <li>
                  <strong>Reduzir:</strong> Impacto emocional da ansiedade.
                </li>
              </ul>
              <p className="mt-4 text-slate-200">
                Se você sofre de ansiedade, procure ajuda. O tratamento existe.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-brown-500 mb-8 shadow-2xl rounded-7xl transform transition-transform duration-300 hover:scale-[1.03] relative text-white p-6 pt-10 text-lg">
          <h2 className="text-center text-2xl font-semibold mb-4">
            Equilíbrio Emocional para Vestibulandos e Estudantes de Medicina
          </h2>

          <div className="flex flex-col items-center py-4 border-b border-blue-700 text-center">
            <h3 className="text-xl font-medium mb-2 text-white">
              O Desafio do Equilíbrio Emocional
            </h3>
            <p className="max-w-xl text-slate-100">
              O equilíbrio emocional é tão importante quanto o preparo acadêmico
              na jornada para o vestibular de Medicina.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="py-4 border-b md:border-b-0 md:border-r md:pr-6 border-blue-700">
              <h3 className="text-lg font-bold mb-3 text-white">
                Técnicas da TCC para Estudantes
              </h3>
              <ul className="list-disc list-inside space-y-1 text-slate-200">
                <li>Culpa</li>
                <li>Medo</li>
                <li>Ansiedade</li>
                <li>Falta de motivação</li>
                <li>Frustração</li>
                <li>Minimização de resultados</li>
                <li>Catastrofização</li>
              </ul>
            </div>

            <div className="py-4 text-slate-200">
              <h3 className="text-lg font-bold mb-3 text-white">
                Superando Desafios Emocionais
              </h3>
              <p className="mb-4">
                Com acompanhamento, você aprenderá a reconhecer sinais de
                ansiedade e criar estratégias para superá-los, melhorando seu
                desempenho.
              </p>

              <h3 className="text-lg font-bold mb-3 text-white">
                Transforme sua Preparação
              </h3>
              <p>
                Não deixe a ansiedade afetar seus sonhos. Aprenda a gerenciar o
                estresse e aumente suas chances de sucesso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
