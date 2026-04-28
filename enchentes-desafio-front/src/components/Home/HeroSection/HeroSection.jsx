import "./HeroSection.scss";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-content">

        {/* TEXTO */}
        <div className="hero-text">
          <h1>Conectando ajuda em momentos de crise</h1>

          <p>
            Nossa plataforma conecta pessoas que precisam de ajuda com voluntários,
            doações e abrigos disponíveis em tempo real durante enchentes.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary">
              Preciso de Ajuda
            </button>

            <button className="btn btn-outline">
              Quero Ajudar
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="hero-stats">
          <div className="stat-card">
            <h3>1.245</h3>
            <span>Pessoas resgatadas</span>
          </div>

          <div className="stat-card">
            <h3>32</h3>
            <span>Abrigos ativos</span>
          </div>

          <div className="stat-card">
            <h3>580</h3>
            <span>Voluntários</span>
          </div>

          <div className="stat-card">
            <h3>2.300+</h3>
            <span>Doações realizadas</span>
          </div>
        </div>

      </div>
    </section>
  );
}