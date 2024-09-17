import HeroImg from "../assets/hero.png";

const About = () => {
  return (
    <section id="about" className="section-offset">
      <div className="bg-white page-padding pt-48 pb-10 text-center text-white md:text-xl" />
      <article className="page-padding pb-44 flex flex-col justify-center items-center gap-10 text-center text-white md:text-xl rounded-7xl bg-brown-500">
        <img
          src={HeroImg}
          alt="Alice Araujo"
          className="w-auto h-auto max-w-[80%] md:max-w-full rounded-full border border-white shadow-xl -mt-20"
        />
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-6 text-2xl">Seja bem vindo(a),</h1>
          <p>
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
