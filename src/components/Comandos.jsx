import imgCmd from '../../docs_cacand/img_cacand/comandos_cacand.png';

export default function Comandos() {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-extrabold text-orange-500">Inyección de Comandos</h2>
      <div className="bg-slate-950 p-4 rounded-md font-mono text-sm border-l-4 border-orange-500">
        <span className="text-slate-500">Payload: </span><span className="text-orange-400">127.0.0.1; cat /etc/passwd</span>
      </div>
      <img src={imgCmd} alt="Evidencia Inyección de Comandos" className="rounded-lg shadow-2xl border border-slate-700 w-full" />
      <p className="mt-4"><strong>Severidad:</strong> 10.0 Crítico (CVSS v3.1). Compromiso total de la infraestructura de AeroAustral.</p>
    </div>
  );
}