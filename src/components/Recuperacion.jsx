export default function Recuperacion() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-extrabold text-teal-400">Plan de Recuperación (DRP)</h2>
      <p className="text-slate-300">Estrategia de resiliencia tecnológica en caso de compromiso masivo del servidor principal (ej. post-explotación de inyección de comandos):</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-slate-800 p-4 rounded-lg border-t-4 border-teal-500">
          <h4 className="font-bold text-slate-200 mb-2">1. Aislamiento Inmediato</h4>
          <p className="text-sm text-slate-400">Revocación automática de credenciales comprometidas y segmentación/aislamiento de la red del servidor afectado para evitar movimiento lateral hacia la red interna corporativa.</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border-t-4 border-teal-500">
          <h4 className="font-bold text-slate-200 mb-2">2. Despliegue IaC</h4>
          <p className="text-sm text-slate-400">Plan de continuidad basado en el redespliegue automatizado de la infraestructura (Infraestructura como Código) en una región secundaria segura de la nube.</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border-t-4 border-teal-500">
          <h4 className="font-bold text-slate-200 mb-2">3. Backups Inmutables</h4>
          <p className="text-sm text-slate-400">Restauración desde respaldos diarios encriptados e inmutables de la base de datos de reservas de vuelo y pasajeros, almacenados de forma aislada (air-gapped).</p>
        </div>
      </div>
    </div>
  );
}