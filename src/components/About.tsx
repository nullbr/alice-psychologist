import AboutImg from "../assets/about.png";

const About = () => {
  return (
    <section id="about" className="section-offset">
      <article className="pt-10">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-6 lg:gap-10 text-center lg:h-[600px] xl:h-[700px] max-w-7xl mx-6 xl:mx-auto">
          <img
            src={AboutImg}
            alt="Alice Araujo"
            className="w-auto h-auto lg:h-full md:max-w-full rounded-7xl border border-blue-500 shadow-xl"
          />

          <div className="border rounded-7xl border-blue-500 p-6 lg:p-10 h-full flex flex-col items-center justify-center">
            <h2 className="mb-6 text-center">Sobre Mim</h2>

            <div>
              <p className="text-justify lg:text-lg xl:text-xl text-gray-700">
                Olá, eu sou Alice Araujo, Psicóloga (CRP-05/36914), com 19 anos
                de experiência clínica. Sou pós-graduada em Psicologia Médica
                pela UERJ e tenho MBA em Gestão Empresarial pela FGV. Desde
                2014, sou Diretora Clínica, trazendo uma combinação única de
                conhecimentos clínicos e habilidades gerenciais para oferecer o
                melhor cuidado aos meus pacientes.
              </p>
              <p className="text-justify lg:text-lg xl:text-xl text-gray-700">
                Sou especialista em Terapia Cognitivo-Comportamental e no
                tratamento de transtornos de ansiedade. Desde 2018, tenho o
                privilégio de atender os dedicados alunos do Foco Medicina,
                ajudando-os a alcançar o equilíbrio emocional tão importante
                para a aprovação. Tenho um orgulho enorme de fazer parte deste
                time de excelência.
              </p>
              <p className="text-justify lg:text-lg xl:text-xl text-gray-700">
                Entre em contato e juntos iniciaremos essa transformação.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
