export default function Controles() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-extrabold text-emerald-400">Prevención y Mitigación</h2>
      <div className="bg-slate-800 p-6 rounded-lg mt-4">
        <h3 className="text-xl font-bold text-slate-200">1. Gobierno de Seguridad</h3>
        <p className="text-slate-300 mt-2">
          Establecer un marco de desarrollo seguro (SDLC) obligatorio para todas las células de software que trabajen en el portal de AeroAustral. Revisiones por pares (Peer Code Reviews) enfocadas en seguridad antes de cada pase a producción.
        </p>
        
        <h3 className="text-xl font-bold text-slate-200 mt-6">2. Controles Técnicos Específicos</h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-300 mt-2">
          <li>
            <strong>WAF (Web Application Firewall):</strong> Implementación de reglas perimetrales para bloquear patrones sospechosos (como <code className="bg-slate-900 px-1 rounded text-emerald-300">'OR 1=1'</code>, etiquetas de <code className="bg-slate-900 px-1 rounded text-emerald-300">&lt;script&gt;</code>, o inyecciones de shell con <code className="bg-slate-900 px-1 rounded text-emerald-300">;</code>).
          </li>
          <li>
            <strong>Auditoría Automatizada en CI/CD:</strong> Integración de herramientas SAST (Static Application Security Testing) en los repositorios para detectar inyecciones directamente en el código fuente.
          </li>
        </ul>
      </div>
    </div>
  );
}