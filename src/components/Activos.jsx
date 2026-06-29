export default function Activos() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-extrabold text-indigo-400">Activos de Información y Riesgos</h2>
      <p>Para una aerolínea como AeroAustral, la continuidad del servicio y la confidencialidad de los datos fronterizos son el núcleo del negocio.</p>
      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mt-4 space-y-4">
        <p><strong>1. Base de Datos de Pasajeros (Pasaportes):</strong> Crítico para regulaciones de aviación civil e inmigración.</p>
        <p><strong>2. Pasarela de Pagos:</strong> Datos críticos bajo estricto cumplimiento normativo PCI-DSS.</p>
        <p><strong>3. Sistema de Asignación de Vuelos:</strong> Esencial para evitar que los aviones queden en tierra (disponibilidad).</p>
      </div>
    </div>
  );
}