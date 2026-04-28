import "./DonationSection.scss";

export default function DonationsSection() {
  return (
    <section className="donation">
      <div className="donation-container">

        <h2>Central de Doações</h2>

        <div className="donation-grid">

          <div className="donation-card">
            <h3>Itens Mais Necessários</h3>
            <p>Água, alimentos, roupas...</p>
          </div>

          <div className="donation-card">
            <h3>Pontos de Coleta</h3>
            <p>Prefeitura, escolas, igrejas</p>
          </div>

        </div>

        <button className="donation-button">
          Doar Agora
        </button>

      </div>
    </section>
  );
}