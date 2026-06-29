import imgSqli from '../../docs_cacand/img_cacand/sqli_cacand.png';

export default function InyeccionSQL() {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-extrabold text-red-500">Inyección SQL</h2>
      <div className="bg-slate-950 p-4 rounded-md font-mono text-sm border-l-4 border-red-500">
        <span className="text-slate-500">Payload: </span><span className="text-red-400">' OR '1'='1</span>
      </div>
      <img src={imgSqli} alt="Evidencia Inyección SQL" className="rounded-lg shadow-2xl border border-slate-700 w-full" />
      <p className="mt-4"><strong>Severidad:</strong> 9.8 Crítico (CVSS v3.1). Exposición masiva de pasaportes y datos de pago de AeroAustral.</p>
    </div>
  );
}