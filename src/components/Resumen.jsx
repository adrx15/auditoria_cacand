export default function Resumen() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-extrabold text-cyan-400">1. Contexto del Negocio</h2>
      <p>
        <strong>AeroAustral Líneas Aéreas</strong> es una organización del rubro de transporte comercial que gestiona operaciones críticas a través de su portal de clientes. Este portal web custodia activos de altísima sensibilidad:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-slate-300">
        <li><strong>Datos de Reservas:</strong> Itinerarios de vuelo, fechas y destinos.</li>
        <li><strong>Información de Pasaportes:</strong> Nombres legales, números de documento y nacionalidades (bajo regulaciones internacionales de fronteras).</li>
        <li><strong>Datos de Pago:</strong> Tarjetas de crédito y transacciones (PCI-DSS).</li>
      </ul>
      <h2 className="text-3xl font-extrabold text-cyan-400 mt-8">2. Objetivos de la Auditoría</h2>
      <p>
        Evaluar el comportamiento del portal en un ambiente controlado (DVWA) bajo nivel "Low", simulando fallas de desarrollo para determinar el impacto financiero, reputacional y legal.
      </p>
    </div>
  );
}