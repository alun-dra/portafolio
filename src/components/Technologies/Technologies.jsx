// src/components/Technologies/Technologies.jsx

export default function Technologies() {
  const groups = [
    {
      category: 'Frontend',
      description:
        'Desarrollo de interfaces modernas, rápidas y mantenibles para plataformas web empresariales.',
      technologies: ['React', 'Angular', 'TypeScript', 'JavaScript'],
    },
    {
      category: 'Backend',
      description:
        'Construcción de APIs, servicios, lógica de negocio e integraciones para sistemas escalables.',
      technologies: ['Python Django', 'Python FastAPI', 'Go', 'Node.js'],
    },
    {
      category: 'Bases de Datos',
      description:
        'Diseño, consulta, optimización y mantenimiento de modelos de datos para aplicaciones reales.',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'PL/SQL'],
    },
    {
      category: 'Infraestructura y DevOps',
      description:
        'Configuración de entornos productivos, servidores, despliegues, seguridad y operación continua.',
      technologies: ['Docker', 'Linux', 'Nginx', 'Gunicorn', 'Cloudflare', 'CI/CD'],
    },
    {
      category: 'Mobile y Publicación',
      description:
        'Desarrollo móvil y publicación de aplicaciones en tiendas oficiales.',
      technologies: ['Flutter Android/iOS', 'App Store', 'Google Play Store'],
    },
    {
      category: 'Calidad y Consultoría',
      description:
        'Acompañamiento técnico para tomar mejores decisiones, documentar sistemas y mejorar procesos.',
      technologies: [
        'Arquitectura de Software',
        'QA',
        'Documentación Técnica',
        'Soporte y Mantención',
      ],
    },
  ]

  return (
    <section
      id="technologies"
      aria-labelledby="technologies-title"
      className="bg-[#f7f5f0] text-slate-950"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-6 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9b7a38]">
            Tecnologías
          </p>

          <h2
            id="technologies-title"
            className="text-4xl font-bold leading-tight tracking-tight md:text-5xl"
          >
            Stack tecnológico para desarrollar soluciones digitales escalables.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Trabajo con tecnologías modernas de frontend, backend, bases de datos,
            infraestructura y DevOps para construir sistemas web a medida, APIs,
            plataformas empresariales y soluciones listas para producción.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <article
              key={group.category}
              className="border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-2xl font-bold tracking-tight">
                {group.category}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                {group.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {group.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="border border-slate-200 bg-[#f7f5f0] px-3 py-2 text-sm font-semibold text-slate-700"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 border-y border-slate-300 py-10 lg:grid-cols-[0.8fr_1.2fr]">
          <h3 className="text-3xl font-bold leading-tight">
            La tecnología es importante, pero la arquitectura define el resultado.
          </h3>

          <p className="text-lg leading-relaxed text-slate-600">
            No se trata solo de elegir React, Django, FastAPI, Go, Docker o PostgreSQL.
            Se trata de seleccionar las herramientas correctas según el problema,
            el presupuesto, el equipo, la operación y la proyección del sistema.
            Ese enfoque permite desarrollar software más estable, mantenible y preparado
            para crecer.
          </p>
        </div>
      </div>
    </section>
  )
}