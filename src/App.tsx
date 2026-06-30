import React from 'react';
import Resumen from './components/Resumen';
import InyeccionSQL from './components/InyeccionSQL';
import XSS from './components/XSS';
import Comandos from './components/Comandos';
import Activos from './components/Activos';
import Matriz from './components/Matriz';
import Controles from './components/Controles';
import Recuperacion from './components/Recuperacion';
import Prompts from './components/Prompts';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      <div className="max-w-5xl mx-auto">
        
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-blue-900">Auditoría de Seguridad Web</h1>
          <p className="text-lg mt-2 text-gray-600">Empresa: [Nombre de tu empresa asignada]</p>
        </header>

        <main>
          {/* Renderizado de cada sección */}
          <Resumen />
          <InyeccionSQL />
          <XSS />
          <Comandos />
          <Activos />
          <Matriz />
          <Controles />
          <Recuperacion />
          <Prompts />
        </main>

        <footer className="text-center mt-12 text-gray-500 text-sm">
          <p>Proyecto de Fundamentos de Seguridad de la Información - INACAP</p>
        </footer>

      </div>
    </div>
  );
}

export default App;