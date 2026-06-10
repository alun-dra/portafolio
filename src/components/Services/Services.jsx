// src/components/Services/Services.jsx

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Arquitectura de Software',
      description:
        'Diseño la estructura técnica de sistemas web, APIs, bases de datos, integraciones e infraestructura para que tu solución pueda crecer sin volverse difícil de mantener.',
      items: [
        'Diseño de arquitectura técnica',
        'Definición de stack tecnológico',
        'Modelado de datos',
        'Seguridad, escalabilidad y mantenibilidad',
      ],
    },
    {
      number: '02',
      title: 'Desarrollo Web y Plataformas Digitales',
      description:
        'Construyo plataformas web modernas, sistemas internos, dashboards, paneles administrativos y soluciones digitales a medida para empresas y equipos de trabajo.',
      items: [
        'React, Angular y TypeScript',
        'Sistemas administrativos',
        'Dashboards y paneles de gestión',
        'Experiencias responsive',
      ],
    },
    {
      number: '03',
      title: 'Backend, APIs e Integraciones',
      description:
        'Desarrollo APIs robustas, servicios backend, integraciones con sistemas externos y procesos automatizados para conectar datos, usuarios y operaciones.',
      items: [
        'Django, FastAPI, Go y Node.js',
        'APIs REST',
        'Integraciones externas',
        'Automatización de procesos',
      ],
    },
    {
      number: '04',
      title: 'Infraestructura, Deploy y DevOps',
      description:
        'Implemento entornos de producción, servidores, despliegues, Docker, Nginx, Linux, dominios, SSL y configuración necesaria para operar sistemas reales.',
      items: [
        'Docker y Linux',
        'Nginx, Gunicorn y servidores',
        'Deploy en producción',
        'Cloudflare, SSL y dominios',
      ],
    },
  ]

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-white text-slate-950"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-6 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9b7a38]">
              Servicios
            </p>

            <h2
              id="services-title"
              className="text-4xl font-bold leading-tight tracking-tight md:text-5xl"
            >
              Soluciones tecnológicas para empresas que necesitan avanzar con claridad.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Como arquitecto de software y desarrollador full stack, ayudo a transformar
              necesidades de negocio en sistemas digitales bien diseñados, escalables y
              listos para producción.
            </p>

            <div className="mt-8 border-l-4 border-[#c6a15b] bg-[#f7f5f0] p-6">
              <p className="text-lg font-semibold leading-relaxed">
                No parto desde el código. Parto entendiendo el problema, diseñando la
                solución y construyendo una base técnica sólida.
              </p>
            </div>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {services.map((service) => (
              <article
                key={service.number}
                className="grid gap-6 py-9 md:grid-cols-[90px_1fr] md:py-10"
              >
                <div>
                  <span className="text-3xl font-bold text-[#c6a15b]">
                    {service.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="border border-slate-200 bg-[#f7f5f0] px-4 py-3 text-sm font-medium text-slate-700"
                      >
                        {item}
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