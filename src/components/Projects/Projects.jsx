// src/components/Projects/Projects.jsx

export default function Projects() {
  const projects = [
    {
      number: '01',
      type: 'Proyecto público',
      title: 'Ciencia Abierta UC',
      description:
        'Plataforma pública de la Pontificia Universidad Católica de Chile orientada a visibilizar iniciativas, información y contenidos vinculados a ciencia abierta.',
      impact:
        'Participación en soluciones web institucionales con foco en arquitectura, desarrollo frontend/backend, mantenibilidad y experiencia de usuario.',
      technologies: ['React', 'Angular', 'Django REST Framework', 'PostgreSQL', 'Arquitectura web'],
      link: 'https://cienciaabierta.uc.cl/',
    },
    {
      number: '02',
      type: 'Proyecto público',
      title: 'Beta Bibliotecas UC',
      description:
        'Proyecto web del ecosistema digital de Bibliotecas UC, enfocado en modernizar la experiencia de acceso a servicios, contenidos y recursos digitales.',
      impact:
        'Desarrollo de interfaces web responsivas, integración con servicios y trabajo sobre plataformas institucionales de alto uso.',
      technologies: ['Angular', 'Frontend', 'APIs', 'UX/UI', 'Servicios institucionales'],
      link: 'https://beta.bibliotecas.uc.cl/',
    },
    {
      number: '03',
      type: 'Sistemas institucionales',
      title: 'Sistemas internos Bibliotecas UC',
      description:
        'Desarrollo de soluciones internas para la Unidad de Bibliotecas de la Pontificia Universidad Católica de Chile, orientadas a procesos administrativos, académicos y operacionales.',
      impact:
        'Construcción de plataformas web, APIs, gestión de datos, despliegues, integración continua e infraestructura para entornos productivos.',
      technologies: ['Angular', 'Vue3', 'React', 'Next.js', 'Django REST Framework', 'Go', 'Laravel', 'Docker', 'GitLab CI/CD', 'Azure'],
      link: null,
    },
    {
      number: '04',
      type: 'Sector público',
      title: 'Superintendencia del Medio Ambiente',
      description:
        'Desarrollo full stack de soluciones web para sistemas institucionales, trabajando en frontend, backend e integración de datos.',
      impact:
        'Implementación de interfaces responsivas y servicios backend con foco en usabilidad, gestión de información y continuidad operacional.',
      technologies: ['Vue3', 'Nuxt', 'Python', 'Django REST Framework', 'Node.js', 'Express', 'Java', 'SQL Server'],
      link: null,
    },
    {
      number: '05',
      type: 'Sector público',
      title: 'Superintendencia de Salud',
      description:
        'Desarrollo backend para sistemas internos, creación de APIs, gestión de bases de datos y automatización de flujos empresariales.',
      impact:
        'Implementación de servicios backend robustos y automatización de procesos mediante herramientas de workflow empresarial.',
      technologies: ['Python', 'Django REST Framework', 'PostgreSQL', 'Camunda'],
      link: null,
    },
    {
      number: '06',
      type: 'Institución pública',
      title: 'Escuela Militar de Chile',
      description:
        'Desarrollo full stack de sistemas internos con frontend web, backend y manejo de datos institucionales.',
      impact:
        'Construcción de funcionalidades web, optimización de experiencia de usuario y desarrollo backend para gestión eficiente de información.',
      technologies: ['Vue3', 'PL/SQL', 'Oracle', 'PHP', 'CodeIgniter'],
      link: null,
    },
  ]

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="bg-white text-slate-950"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-6 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9b7a38]">
              Proyectos y experiencia
            </p>

            <h2
              id="projects-title"
              className="text-4xl font-bold leading-tight tracking-tight md:text-5xl"
            >
              Plataformas web, APIs y sistemas internos para instituciones.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              He participado en proyectos públicos e institucionales para la Pontificia
              Universidad Católica de Chile, además de sistemas internos para organismos
              del sector público.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Por confidencialidad, varios sistemas no pueden mostrarse públicamente,
              pero reflejan experiencia real en desarrollo web, backend, arquitectura,
              datos, DevOps e infraestructura.
            </p>

            <div className="mt-8 border-l-4 border-[#c6a15b] bg-[#f7f5f0] p-6">
              <p className="text-lg font-semibold leading-relaxed">
                Mi experiencia combina frontend, backend, bases de datos, integración
                continua y despliegue en producción.
              </p>
            </div>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {projects.map((project) => (
              <article
                key={project.title}
                className="grid gap-6 py-9 md:grid-cols-[90px_1fr] md:py-10"
              >
                <div>
                  <span className="text-3xl font-bold text-[#c6a15b]">
                    {project.number}
                  </span>
                </div>

                <div>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9b7a38]">
                        {project.type}
                      </p>

                      <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                        {project.title}
                      </h3>
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-fit border border-slate-950 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-950 hover:text-white"
                        aria-label={`Ver proyecto ${project.title}`}
                      >
                        Ver sitio
                      </a>
                    )}
                  </div>

                  <p className="mt-5 leading-relaxed text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <p className="font-semibold text-slate-950">Resultado / aporte</p>
                    <p className="mt-2 leading-relaxed text-slate-600">
                      {project.impact}
                    </p>
                  </div>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="border border-slate-200 bg-[#f7f5f0] px-3 py-2 text-sm font-semibold text-slate-700"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}