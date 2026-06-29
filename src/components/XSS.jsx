import imgXss from '../../docs_cacand/img_cacand/xss_cacand.png';

export default function XSS() {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-extrabold text-yellow-500">XSS Reflejado</h2>
      <div className="bg-slate-950 p-4 rounded-md font-mono text-sm border-l-4 border-yellow-500">
        <span className="text-slate-500">Payload: </span><span className="text-yellow-400">&lt;script&gt;alert('XSS')&lt;/script&gt;</span>
      </div>
      <img src={imgXss} alt="Evidencia XSS" className="rounded-lg shadow-2xl border border-slate-700 w-full" />
      <p className="mt-4"><strong>Severidad:</strong> 6.1 Medio (CVSS v3.1). Secuestro de sesiones de clientes activos de la aerolínea.</p>
    </div>
  );
}