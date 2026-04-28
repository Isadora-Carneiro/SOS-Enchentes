import "./HelpSection.scss";

export default function HelpRequestSection() {
  const requests = [
    {
      title: "Família com idosos ilhada",
      time: "15 minutos",
      priority: "Urgente",
      desc: "4 pessoas, incluindo 2 idosos com mobilidade reduzida.",
      location: "Rua das Flores, 234 - Centro",
      people: 4,
    },
    {
      title: "Abrigo precisa de água e comida",
      time: "1 hora",
      priority: "Alta",
      desc: "Estoque de água acabando.",
      location: "Escola Municipal São José",
      people: 45,
    },
    {
      title: "Família desalojada busca abrigo",
      time: "2 horas",
      priority: "Média",
      desc: "Família com crianças pequenas precisa de abrigo.",
      location: "Jardim América",
      people: 6,
    },
  ];

  const color = {
    Urgente: "urgent",
    Alta: "high",
    Média: "medium",
  };

  return (
    <section className="help">
      <div className="help-container">

        <h2>Pedidos de Ajuda Ativos</h2>
        <p>Veja os pedidos em tempo real e ofereça suporte</p>

        
        <div className="help-filters">
          <span>Todos</span>
          <span>Resgates</span>
          <span>Abrigo</span>
          <span>Suprimentos</span>
        </div>

        <div className="help-grid">
          {requests.map((r) => (
            <div key={r.title} className="help-card">

              <div className="help-header">
                <h3>{r.title}</h3>
                <span className={color[r.priority]}>{r.priority}</span>
              </div>

              <p className="time">Há {r.time}</p>

              <p className="desc">{r.desc}</p>

              <p className="location">📍 {r.location}</p>

              <p className="people">{r.people} pessoas</p>

              <button className="help-button">
                Oferecer Ajuda
              </button>

            </div>
          ))}
        </div>

        <button className="help-more">
          Ver Todos os Pedidos
        </button>

      </div>
    </section>
  );
}