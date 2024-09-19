const Contact = () => {
  return (
    <section id="contact" className="section-offset">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Onde Encontrar-me
        </h1>
        <p className="text-lg text-gray-700 mb-10 text-center">
          Ofereço atendimento presencial e online para atender às suas
          necessidades, seja no Brasil ou em qualquer lugar do mundo. Veja
          abaixo como entrar em contato e localizar meu consultório.
        </p>

        <div className="bg-white p-6 mb-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Locais de Atendimento
          </h2>
          <div className="mb-6">
            {/* <img
              src={ContactImg}
              alt="Consultório"
              className="w-full h-auto rounded-lg shadow-md"
            /> */}
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Presencial:</strong> Atendimento em Ipanema, RJ
            </li>
            <li>
              <strong>Online:</strong> Atendimento disponível para clientes no
              Brasil e no mundo
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 mb-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Entre em Contato
          </h2>
          <ul className="text-gray-700 mb-6 space-y-2">
            <li>
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/+5521992062217?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+visita"
                className="text-blue-500 underline"
              >
                21 99206-2217
              </a>
            </li>
            <li>
              <strong>Instagram:</strong>{" "}
              <a
                href="https://www.instagram.com/psi.alicearaujo"
                className="text-blue-500 underline"
              >
                @psi.alicearaujo
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/alice-araujo"
                className="text-blue-500 underline"
              >
                alice-araujo
              </a>
            </li>
            <li>
              <strong>CRP:</strong> 05/36914
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
