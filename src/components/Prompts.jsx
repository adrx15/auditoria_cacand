export default function Prompts() {
  const prompts = [
    {
      title: "Componentes React de auditoría",
      description:
        "Creación de módulos independientes para contexto, activos, vulnerabilidades, riesgos y controles."
    },
    {
      title: "Análisis de vulnerabilidades",
      description:
        "Diseño de componentes para SQL Injection, Command Injection y XSS con enfoque de auditoría."
    },
    {
      title: "Matriz de riesgos",
      description:
        "Construcción de una sección visual para representar impacto, probabilidad y criticidad."
    },
    {
      title: "Arquitectura App.jsx",
      description:
        "Creación del dashboard principal con navegación lateral e integración de componentes."
    },
    {
      title: "Diseño App.css",
      description:
        "Implementación de una interfaz empresarial inspirada en dashboards SaaS modernos."
    }
  ];

  return (
    <section>
      <h1>Bitácora de Prompts IA</h1>
      <p>
        Registro del proceso de creación de la plataforma de auditoría mediante
        prompts utilizados durante el desarrollo.
      </p>

      <div className="prompt-grid">
        {prompts.map((item, index) => (
          <article className="prompt-card" key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </div>

      <style>{`
        .prompt-grid {
          display: grid;
          gap: 20px;
          margin-top: 25px;
        }

        .prompt-card {
          background: #111827;
          border: 1px solid #334155;
          border-radius: 14px;
          padding: 22px;
        }

        .prompt-card h2 {
          color: #38bdf8;
        }
      `}</style>
    </section>
  );
}