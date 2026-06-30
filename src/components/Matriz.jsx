export default function Matriz() {
  const riesgos = [
    {
      id: "R1",
      name: "Fuga de Pasaportes (SQL Injection)",
      probabilidad: 4,
      impacto: 5,
      severidad: "Crítico",
    },
    {
      id: "R2",
      name: "Secuestro de Sesión (XSS)",
      probabilidad: 4,
      impacto: 3,
      severidad: "Alto",
    },
    {
      id: "R3",
      name: "Toma de Servidor (Command Injection)",
      probabilidad: 3,
      impacto: 5,
      severidad: "Crítico",
    },
  ];

  const colorCelda = (valor) => {
    if (valor >= 15) return "#dc2626";
    if (valor >= 10) return "#f97316";
    if (valor >= 5) return "#eab308";
    return "#22c55e";
  };

  return (
    <section>
      <h1>Matriz de Riesgo - AeroAustral</h1>

      <p>
        Mapa de calor basado en Probabilidad x Impacto. Mientras más alto sea
        el valor, mayor es la criticidad del riesgo.
      </p>

      <div className="heatmap-container">
        <table className="heatmap">
          <thead>
            <tr>
              <th>Prob \\ Impacto</th>
              {[1,2,3,4,5].map(i => <th key={i}>{i}</th>)}
            </tr>
          </thead>

          <tbody>
            {[5,4,3,2,1].map(prob => (
              <tr key={prob}>
                <th>{prob}</th>

                {[1,2,3,4,5].map(impacto => {
                  const valor = prob * impacto;

                  const encontrados = riesgos.filter(
                    r =>
                      r.probabilidad === prob &&
                      r.impacto === impacto
                  );

                  return (
                    <td
                      key={impacto}
                      style={{
                        backgroundColor: colorCelda(valor)
                      }}
                    >
                      <strong>{valor}</strong>

                      {encontrados.map(r => (
                        <div className="risk-tag" key={r.id}>
                          {r.id}
                          <br />
                          {r.severidad}
                        </div>
                      ))}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="legend">
        <span className="low">Bajo</span>
        <span className="medium">Moderado</span>
        <span className="high">Alto</span>
        <span className="critical">Crítico</span>
      </div>

      <div className="risk-list">
        {riesgos.map(r => (
          <article key={r.id}>
            <h3>{r.id} - {r.name}</h3>
            <p>
              Probabilidad: {r.probabilidad} |
              Impacto: {r.impacto} |
              Nivel: {r.severidad}
            </p>
          </article>
        ))}
      </div>

      <style>{`
        .heatmap-container {
          overflow-x: auto;
          margin-top: 25px;
        }

        .heatmap {
          border-collapse: collapse;
          width: 100%;
          text-align: center;
        }

        .heatmap th {
          padding: 12px;
          background: #1e293b;
        }

        .heatmap td {
          height: 80px;
          width: 80px;
          border: 2px solid #0f172a;
          color: white;
          transition: transform .2s;
        }

        .heatmap td:hover {
          transform: scale(1.08);
        }

        .risk-tag {
          margin-top: 6px;
          padding: 5px;
          border-radius: 8px;
          background: #020617;
          font-size: 12px;
        }

        .legend {
          display: flex;
          gap: 12px;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .legend span {
          padding: 8px 15px;
          border-radius: 8px;
          color: white;
        }

        .low { background:#22c55e; }
        .medium { background:#eab308; }
        .high { background:#f97316; }
        .critical { background:#dc2626; }

        .risk-list article {
          margin-top: 15px;
          padding: 15px;
          background:#111827;
          border-radius:12px;
        }
      `}</style>
    </section>
  );
}
