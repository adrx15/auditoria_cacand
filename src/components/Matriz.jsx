import React from 'react';

export default function Matriz() {
  // Datos de los activos y riesgos basados en la aerolínea AeroAustral
  const riesgos = [
    { id: 'R1', name: 'Fuga de Pasaportes (SQLi)', p: 4, i: 5, score: 20, cat: 'Crítico', color: 'bg-red-600 text-white' },
    { id: 'R3', name: 'Toma de Servidor (Cmd Inj)', p: 3, i: 5, score: 15, cat: 'Alto', color: 'bg-orange-500 text-white' },
    { id: 'R2', name: 'Secuestro de Sesión (XSS)', p: 4, i: 3, score: 12, cat: 'Medio', color: 'bg-yellow-500 text-black' },
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-xl text-slate-100 space-y-6">
      <h2 className="text-3xl font-extrabold text-blue-400">Matriz de Riesgo - AeroAustral</h2>
      
      {/* Tabla resumen de riesgos */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-600">
              <th className="py-3 px-2">ID</th>
              <th className="py-3 px-2">Riesgo</th>
              <th className="py-3 px-2 text-center">Probabilidad</th>
              <th className="py-3 px-2 text-center">Impacto</th>
              <th className="py-3 px-2 text-center">Severidad</th>
            </tr>
          </thead>
          <tbody>
            {riesgos.map(r => (
              <tr key={r.id} className="border-b border-slate-700 hover:bg-slate-700 transition">
                <td className="py-3 px-2 font-bold text-blue-300">{r.id}</td>
                <td className="py-3 px-2">{r.name}</td>
                <td className="py-3 px-2 text-center">{r.p}</td>
                <td className="py-3 px-2 text-center">{r.i}</td>
                <td className="py-3 px-2 text-center">
                  <span className={`px-3 py-1 rounded text-xs font-bold ${r.color}`}>
                    {r.score} - {r.cat}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mapa de Calor Visual (Requisito de la evaluación) */}
      <h3 className="text-xl font-bold text-blue-400 mt-8">Mapa de Calor Visual</h3>
      <p className="text-sm text-slate-300 mb-4">Representación visual de Probabilidad x Impacto de los hallazgos técnicos.</p>
      
      <div className="grid grid-cols-6 gap-1 text-center text-sm">
        {/* Cabecera del impacto */}
        <div className="p-3 text-slate-400 font-bold border-b border-r border-slate-600">Prob \ Imp</div>
        {[1, 2, 3, 4, 5].map(i => <div key={`header-${i}`} className="p-3 text-slate-400 font-bold border-b border-slate-600">{i}</div>)}

        {/* Generación de filas (Probabilidad) y celdas (Cálculo de calor) */}
        {[5, 4, 3, 2, 1].map(p => (
          <React.Fragment key={`row-${p}`}>
            <div className="p-3 text-slate-400 font-bold flex items-center justify-center border-r border-slate-600">{p}</div>
            {[1, 2, 3, 4, 5].map(i => {
              const score = p * i;
              
              // Asignación de colores según la severidad
              let bg = 'bg-green-600/80';
              if (score >= 5 && score <= 9) bg = 'bg-yellow-500/80';
              if (score >= 10 && score <= 14) bg = 'bg-orange-500/80';
              if (score >= 15) bg = 'bg-red-600/80';
              
              // Filtra si algún riesgo de AeroAustral cae en esta celda exacta
              const activosAqui = riesgos.filter(r => r.p === p && r.i === i);

              return (
                <div key={`cell-${p}-${i}`} className={`p-2 rounded-md min-h-[70px] flex flex-col items-center justify-center border border-slate-900 transition-transform hover:scale-105 ${bg}`}>
                  <span className="opacity-60 text-white font-bold">{score}</span>
                  {activosAqui.map(r => (
                    <span key={r.id} className="mt-1 bg-slate-900 text-white px-2 py-0.5 rounded-full text-xs shadow-md">
                      {r.id}
                    </span>
                  ))}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}