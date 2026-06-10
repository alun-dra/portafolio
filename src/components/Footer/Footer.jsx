// src/components/Footer/Footer.jsx

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-[#f7f5f0]">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Álvaro <span className="text-[#9b7a38]">Villalobos</span>
            </h2>

            <p className="mt-5 max-w-xl leading-relaxed text-slate-600">
              Arquitecto de software y desarrollador full stack en Chile.
              Diseño y desarrollo soluciones digitales, plataformas web,
              APIs, sistemas empresariales, automatización de procesos e
              infraestructura para empresas que necesitan crecer de forma
              ordenada y sostenible.
            </p>

            <p className="mt-6 text-sm font-medium text-slate-500">
              Desarrollo Web · Arquitectura de Software · Consultoría Tecnológica · Chile
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
              Navegación
            </h3>

            <nav
              className="flex flex-col gap-3 text-slate-600"
              aria-label="Navegación del sitio"
            >
              <a href="#home" className="hover:text-slate-950">Inicio</a>
              <a href="#services" className="hover:text-slate-950">Servicios</a>
              <a href="#technologies" className="hover:text-slate-950">Tecnologías</a>
              <a href="#projects" className="hover:text-slate-950">Proyectos</a>
              <a href="#contact" className="hover:text-slate-950">Contacto</a>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
              Contacto profesional
            </h3>

            <div className="space-y-3 text-slate-600">
              <p>
                <a
                  href="mailto:contacto@alvarovillalobos.cl"
                  className="hover:text-slate-950"
                  aria-label="Enviar correo a Álvaro Villalobos"
                >
                  contacto@alvarovillalobos.cl
                </a>
              </p>

              <p>
                <a
                  href="https://www.linkedin.com/in/dev-alvaro-villalobos/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-950"
                  aria-label="LinkedIn de Álvaro Villalobos"
                >
                  LinkedIn
                </a>
              </p>

              <p>
                <a
                  href="https://github.com/alun-dra"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-950"
                  aria-label="GitHub de Álvaro Villalobos"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="my-10 border-t border-slate-200" />

        <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} Álvaro Villalobos. Todos los derechos reservados.
          </p>

          <p>
            Arquitectura de Software · Desarrollo Web · Soluciones Digitales
          </p>
        </div>
      </div>
    </footer>
  )
}