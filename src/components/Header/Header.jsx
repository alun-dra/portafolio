// src/components/Header/Header.jsx
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    ['Servicios', '#services', 'Ir a servicios de desarrollo de software'],
    ['Tecnologías', '#technologies', 'Ir a tecnologías utilizadas'],
    ['Proyectos', '#projects', 'Ir a proyectos desarrollados'],
    ['Contacto', '#contact', 'Ir a formulario de contacto'],
  ]

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-[#f7f5f0]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-slate-950"
          aria-label="Álvaro Villalobos, arquitecto de software"
        >
          Álvaro <span className="text-[#9b7a38]">Villalobos</span>
        </a>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex"
          aria-label="Navegación principal"
        >
          {links.map(([label, href, ariaLabel]) => (
            <a
              key={label}
              href={href}
              aria-label={ariaLabel}
              className="transition hover:text-slate-950"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="border border-slate-950 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-950 hover:text-white"
            aria-label="Solicitar cotización de proyecto de software"
          >
            Cotizar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center border border-slate-950 text-slate-950 lg:hidden"
          aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className="text-xl leading-none" aria-hidden="true">
            {isOpen ? '×' : '☰'}
          </span>
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-slate-200 bg-[#f7f5f0] lg:hidden"
          aria-label="Navegación móvil"
        >
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {links.map(([label, href, ariaLabel]) => (
              <a
                key={label}
                href={href}
                aria-label={ariaLabel}
                onClick={() => setIsOpen(false)}
                className="border-b border-slate-200 py-4 text-sm font-semibold text-slate-700 transition hover:text-slate-950"
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-slate-950 px-5 py-4 text-center text-sm font-semibold text-white"
              aria-label="Solicitar cotización de desarrollo de software"
            >
              Cotizar proyecto
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}