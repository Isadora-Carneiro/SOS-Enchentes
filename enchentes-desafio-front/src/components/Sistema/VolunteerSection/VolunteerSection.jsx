import "./VolunteerSection.scss";

export default function VolunteerSection() {
  const areas = [
    {
      title: "Resgate e Transporte",
      desc: "Ajude no resgate e transporte de pessoas e suprimentos",
      count: 156,
      tag: "Urgente",
    },
    {
      title: "Apoio Médico",
      desc: "Profissionais de saúde para atendimento nos abrigos",
      count: 42,
      tag: "Urgente",
    },
    {
      title: "Logística e Organização",
      desc: "Separação de doações e gestão de suprimentos",
      count: 89,
      tag: "Urgente",
    },
    {
      title: "Apoio em Abrigos",
      desc: "Organização, distribuição de refeições e cuidados",
      count: 234,
      tag: "Apoio",
    },
    {
      title: "Central de Atendimento",
      desc: "Atendimento telefônico e cadastro de pedidos",
      count: 67,
      tag: "Apoio",
    },
    {
      title: "Apoio Geral",
      desc: "Tarefas diversas conforme necessidade",
      count: 304,
      tag: "Apoio",
    },
  ];

  return (
    <section className="volunteer">

      <div className="volunteer-header">
        <h2>Centro de Voluntariado</h2>
        <p>
          Sistema de coordenação de voluntários em tempo real para resposta a emergências.
        </p>
      </div>

    
      <div className="volunteer-grid">

        {areas.map((a) => (
          <div
            key={a.title}
            className={`volunteer-card ${a.tag === "Urgente" ? "urgent" : ""}`}
          >

            <div className={`tag ${a.tag.toLowerCase()}`}>
              {a.tag}
            </div>

            <h3>{a.title}</h3>

            <p className="desc">{a.desc}</p>

            <div className="stats">
              <span className="count">{a.count}</span>
              <span className="label">voluntários ativos</span>
            </div>

            <button className="volunteer-btn">
              Quero participar
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}