import "./FeaturesSection.scss";

export default function FeaturesSection() {
  const items = [
    {
      title: "Pedidos de Socorro",
      desc: "Registre e visualize pedidos de ajuda em tempo real. Informe sua localização e necessidades específicas.",
    },
    {
      title: "Mapa de Abrigos",
      desc: "Encontre abrigos próximos com capacidade, recursos disponíveis e como chegar.",
    },
    {
      title: "Central de Doações",
      desc: "Conectamos doadores com pontos de coleta e necessidades por região.",
    },
    {
      title: "Rede de Voluntários",
      desc: "Cadastre-se e receba alertas sobre onde sua ajuda é necessária.",
    },
    {
      title: "Alertas em Tempo Real",
      desc: "Notificações sobre pedidos, clima e atualizações importantes.",
    },
    {
      title: "Informações Verificadas",
      desc: "Garantimos confiabilidade para evitar desinformação.",
    },
  ];

  return (
    <section className="features">
      <div className="features-container">
        <h2>Como podemos ajudar?</h2>

        <p>
          Nossa plataforma centraliza informações essenciais para emergências.
        </p>

        <div className="features-grid">
          {items.map((i) => (
            <div key={i.title} className="feature-card">
              <h3>{i.title}</h3>
              <p>{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}