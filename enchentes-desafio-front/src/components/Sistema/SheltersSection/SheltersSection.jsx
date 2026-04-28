import "./SheltersSection.scss";

export default function SheltersSection() {
  const shelters = [
    { name: "Base militar ", status: "Disponível", cap: "145/200" },
    { name: "Escola Estadual Profª Eva", status: "Quase Lotado", cap: "148/150" },
    { name: "Centro Comunitário", status: "Disponível", cap: "52/80" },
    { name: "Igreja Nossa Senhora Aparecida", status: "Lotado", cap: "100/100" },
  ];

  return (
    <section className="shelters">
      <div className="shelters-container">

        <h2>Abrigos Disponíveis</h2>

        <div className="shelters-grid">
          {shelters.map((s) => (
            <div className="shelter-card" key={s.name}>

              <h3>{s.name}</h3>

              <p className="status">{s.status}</p>

              <p className="capacity">Ocupação: {s.cap}</p>

              <button className="shelter-button">
                Ir para Abrigo
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}