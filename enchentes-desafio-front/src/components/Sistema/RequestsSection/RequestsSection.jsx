const requests = [
  {
    id: 1,
    title: "Família ilhada precisa de resgate",
    type: "Resgate",
    priority: "Urgente",
    location: "Centro",
  },
  {
    id: 2,
    title: "Falta de alimentos",
    type: "Suprimentos",
    priority: "Alta",
    location: "Vila Nova",
  },
  {
    id: 3,
    title: "Abrigo necessário",
    type: "Abrigo",
    priority: "Média",
    location: "Zona Sul",
  },
]

export default function RequestsSection() {
  return (
    <section style={{ padding: "30px 20px" }}>
      
      <h2>Pedidos Recentes</h2>
      <p>Últimas solicitações registradas</p>

      <div style={{ display: "grid", gap: "10px" }}>
        {requests.map((req) => (
          <div
            key={req.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <strong>{req.title}</strong>

            <p>
              📍 {req.location} • {req.type}
            </p>

            <span
              style={{
                color:
                  req.priority === "Urgente"
                    ? "red"
                    : req.priority === "Alta"
                    ? "orange"
                    : "gold",
                fontWeight: "bold",
              }}
            >
              {req.priority}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}