import AboutImg from "../assets/about.png";

const About = () => {
  return (
    <section id="about" className="section-offset mb-20">
      <article className="flex flex-col-reverse lg:flex-row justify-center items-center gap-6 lg:gap-10 text-center lg:h-[600px] xl:h-[700px] max-w-7xl mx-6 xl:mx-auto mt-10">
        <img
          src={AboutImg}
          alt="Alice Araujo"
          className="w-auto h-auto lg:h-full md:max-w-full rounded-7xl border border-brown-500 shadow-xl"
        />

        <div className="border rounded-7xl border-brown-500 p-6 lg:p-10 h-full flex flex-col items-center justify-center">
          <h1 className="text-xl lg:text-2xl xl:text-3xl mb-4 xl:mb-8">
            Seja bem vindo(a),
          </h1>
          <p className="text-justify lg:text-lg xl:text-xl text-gray-700">
            Olá, eu sou Alice Araujo, Psicóloga (CRP-05/36914), com 19 anos de
            experiência clínica. Sou pós-graduada em Psicologia Médica pela UERJ
            e tenho MBA em Gestão Empresarial pela FGV. Desde 2014, sou Diretora
            Clínica, trazendo uma combinação única de conhecimentos clínicos e
            habilidades gerenciais para oferecer o melhor cuidado aos meus
            pacientes. Sou especialista em Terapia Cognitivo-Comportamental e no
            tratamento de transtornos de ansiedade. Desde 2018, tenho o
            privilégio de atender os dedicados alunos do Foco Medicina,
            ajudando-os a alcançar o equilíbrio emocional tão importante para a
            aprovação. Tenho um orgulho enorme de fazer parte deste time de
            excelência. Entre em contato e juntos iniciaremos essa
            transformação.
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
