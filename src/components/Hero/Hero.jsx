// src/components/Hero/Hero.jsx

export default function Hero() {
  const valueItems = [
    ['Diagnóstico', 'Analizo procesos, requerimientos y objetivos del negocio antes de definir una solución tecnológica.'],
    ['Arquitectura', 'Diseño la estructura del sistema: frontend, backend, datos, integraciones, seguridad e infraestructura.'],
    ['Desarrollo', 'Construyo plataformas web, APIs, sistemas internos y automatizaciones con foco en calidad y mantenibilidad.'],
    ['Producción', 'Realizo despliegue, configuración, documentación técnica y acompañamiento posterior a la entrega.'],
  ]

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-[#f7f5f0] pt-[73px] text-slate-950"
    >
      <div
        className="absolute right-0 top-0 hidden h-full w-[43%] bg-[#111827] lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 md:px-6 lg:min-h-[calc(100vh-73px)] lg:grid-cols-[1fr_0.86fr] lg:items-center lg:gap-8 lg:py-4 xl:grid-cols-[1fr_0.9fr] xl:gap-14 xl:py-0">
        <div className="max-w-3xl">
          <p className="mb-3 max-w-2xl text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 md:text-xs lg:text-[10px]">
            Arquitectura de Software · Desarrollo Web · Consultoría Tecnológica
          </p>

          <h1
            id="hero-title"
            className="text-5xl font-bold leading-none tracking-tight md:text-6xl lg:text-[46px] xl:text-7xl"
          >
            Álvaro Villalobos
          </h1>

          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-[30px] xl:text-5xl">
            Arquitecto de software y desarrollador full stack para soluciones
            digitales a medida.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 lg:text-[15px] xl:text-lg">
            Diseño y desarrollo sistemas web, APIs, plataformas empresariales,
            automatización de procesos e infraestructura cloud para empresas en
            Chile que necesitan ordenar, escalar y profesionalizar sus operaciones.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row xl:mt-7">
            <a
              href="#contact"
              className="bg-slate-950 px-7 py-3 text-center font-semibold text-white transition hover:bg-slate-800 xl:py-4"
            >
              Conversar proyecto
            </a>

            <a
              href="#services"
              className="border border-slate-300 px-7 py-3 text-center font-semibold text-slate-950 transition hover:bg-white xl:py-4"
            >
              Ver servicios
            </a>
          </div>

          <div
            className="mt-6 grid grid-cols-1 border-y border-slate-300 sm:grid-cols-3 xl:mt-8"
            aria-label="Servicios principales"
          >
            {[
              ['01', 'Arquitectura de software'],
              ['02', 'Desarrollo de sistemas'],
              ['03', 'Infraestructura y soporte'],
            ].map(([number, text], index) => (
              <div
                key={number}
                className={`py-3 ${
                  index === 1 ? 'sm:border-x sm:border-slate-300 sm:px-6' : ''
                } ${index === 0 ? 'sm:pr-6' : ''} ${index === 2 ? 'sm:pl-6' : ''}`}
              >
                <p className="text-lg font-bold xl:text-2xl">{number}</p>
                <p className="text-sm text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <article className="relative w-full lg:pl-1 xl:pl-4">
          <div className="relative bg-white shadow-2xl">
            <div className="border-b border-slate-200 p-5 xl:p-7">
              <p className="text-[10px] uppercase tracking-[0.26em] text-slate-500">
                Propuesta de valor
              </p>

              <h2 className="mt-2 text-[24px] font-bold leading-tight xl:mt-3 xl:text-3xl">
                No vendo código. Construyo soluciones tecnológicas que resuelven
                problemas reales.
              </h2>
            </div>

            <div className="divide-y divide-slate-200">
              {valueItems.map(([title, text]) => (
                <div
                  key={title}
                  className="grid gap-3 p-3.5 md:grid-cols-[120px_1fr] xl:p-5"
                >
                  <h3 className="font-bold">{title}</h3>

                  <p className="text-[14px] leading-relaxed text-slate-600 xl:text-base">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="mt-4 hidden bg-[#c6a15b] p-5 text-white shadow-xl 2xl:block 2xl:ml-auto 2xl:max-w-md 2xl:p-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/80">
              Enfoque
            </p>

            <p className="mt-2 text-xl font-bold leading-tight">
              Soluciones pensadas para crecer, operar y mantenerse en el tiempo.
            </p>
          </aside>
        </article>
      </div>
    </section>
  )
}