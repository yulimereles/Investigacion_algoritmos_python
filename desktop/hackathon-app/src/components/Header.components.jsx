import React, { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-indigo-900 border-slate-600 text-white border-b-1 pl-28">
        <nav className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <a
              className="text-xl font-bold text-white transition-colors duration-300 transform md:text-2xl hover:text-indigo-600"
              href="#"
            >
              Hackathon
            </a>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`${
              isOpen ? 'flex' : 'hidden'
            } flex-col mt-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0`}
          >
            <a
              className="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-600"
              href="#"
            >
              Inicio
            </a>
            <a
              className="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-600"
              href="#"
            >
              Ejemplo
            </a>
            <a
              className="px-4 py-1 text-sm font-medium text-center text-gray-200 transition-colors duration-300 transform border rounded hover:bg-indigo-600"
              href="#"
            >
              Iniciar Sesión /Registrarme
            </a>
          </div>
        </nav>

     
      </header>
    </>
  );
};

