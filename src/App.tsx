import { useState } from "react";
import "./App.css";

import Resumen from "./components/Resumen";
import Activos from "./components/Activos";
import InyeccionSQL from "./components/InyeccionSQL";
import Comandos from "./components/Comandos";
import XSS from "./components/XSS";
import Matriz from "./components/Matriz";
import Controles from "./components/Controles";
import Recuperacion from "./components/Recuperacion";
import Prompts from "./components/Prompts";

const sections = [
  { id: "Resumen", title: "Contexto del Negocio", component: <Resumen /> },
  { id: "Activos", title: "Activos y Riesgos", component: <Activos /> },
  { id: "SQL", title: "Inyección SQL", component: <InyeccionSQL /> },
  { id: "CMD", title: "Inyección de Comandos", component: <Comandos /> },
  { id: "XSS", title: "XSS Reflejado", component: <XSS /> },
  { id: "Matriz", title: "Matriz de Riesgos", component: <Matriz /> },
  { id: "Controles", title: "Controles de Seguridad", component: <Controles /> },
  { id: "Recuperacion", title: "Plan de Recuperación", component: <Recuperacion /> },
  { id: "Prompts", title: "Uso de IA", component: <Prompts /> },
];

export default function App() {
  const [active, setActive] = useState("Resumen");

  return (
    <div className="app">
      <header className="hero">
        <div>
          <p className="tag">Ciberseguridad · Auditoría Web</p>
          <h1>AeroAustral Security Assessment</h1>
          <p>
            Plataforma interactiva de presentación de hallazgos,
            riesgos y controles de seguridad.
          </p>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <h2>Evaluación</h2>
          {sections.map((item) => (
            <button
              key={item.id}
              className={active === item.id ? "active" : ""}
              onClick={() => setActive(item.id)}
            >
              {item.title}
            </button>
          ))}
        </aside>

        <main className="content">
          <div className="card">
            {sections.find((s) => s.id === active)?.component}
          </div>
        </main>
      </div>
    </div>
  );
}