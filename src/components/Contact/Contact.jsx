// src/components/Contact/Contact.jsx

export default function Contact() {
  const projectTypes = [
    'Plataforma web',
    'Sistema interno',
    'API / Integración',
    'Automatización',
    'Infraestructura',
    'Arquitectura',
    'Consultoría',
    'Soporte',
  ]

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-[#111827] text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-6 lg:min-h-screen lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:py-20">
        <div className="lg:max-w-xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c6a15b]">
            Contacto
          </p>

          <h2
            id="contact-title"
            className="text-4xl font-bold leading-tight tracking-tight md:text-5xl"
          >
            Conversemos sobre la solución que tu organización necesita.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">
            Cuéntame si necesitas desarrollar una plataforma web, automatizar
            procesos, construir una API, mejorar un sistema interno o definir
            una arquitectura técnica.
          </p>

          <div className="mt-7 bg-white/5 p-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#c6a15b]">
              Qué puedes esperar
            </p>

            <div className="mt-5 grid gap-3">
              {[
                ['01', 'Revisión inicial de tu necesidad'],
                ['02', 'Orientación técnica según el alcance'],
                ['03', 'Propuesta clara y aterrizada'],
                ['04', 'Comunicación directa conmigo'],
              ].map(([number, text]) => (
                <div
                  key={number}
                  className="flex gap-4 border-t border-white/10 pt-3 text-sm md:text-base"
                >
                  <span className="font-bold text-[#c6a15b]">{number}</span>
                  <p className="text-slate-200">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 space-y-2 text-sm text-slate-300 md:text-base">
            <p>
              <strong className="text-white">Correo:</strong>{' '}
              <a
                href="mailto:contacto@alvarovillalobos.cl"
                className="hover:text-[#c6a15b]"
              >
                contacto@alvarovillalobos.cl
              </a>
            </p>

            <p>
              <strong className="text-white">LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/dev-alvaro-villalobos/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c6a15b]"
              >
                /in/dev-alvaro-villalobos
              </a>
            </p>
          </div>
        </div>

        <form
          action="https://formsubmit.co/contacto@alvarovillalobos.cl"
          method="POST"
          className="bg-[#f7f5f0] p-5 text-slate-950 shadow-2xl md:p-7"
        >
          <input
            type="hidden"
            name="_subject"
            value="Nuevo contacto desde alvarovillalobos.cl"
          />
          <input type="hidden" name="_captcha" value="false" />

          <div className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-bold">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-950"
                />
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-bold">
                  Empresa u organización
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-950"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-bold">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-950"
              />
            </div>

            <fieldset>
              <legend className="mb-3 block text-sm font-bold">
                ¿Qué necesitas? Selecciona una o más opciones.
              </legend>

              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <label
                    key={type}
                    className="group cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name="projectTypes[]"
                      value={type}
                      className="peer sr-only"
                    />

                    <span className="block border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition peer-checked:border-slate-950 peer-checked:bg-slate-950 peer-checked:text-white hover:border-slate-950">
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="budget" className="mb-2 block text-sm font-bold">
                Presupuesto estimado
              </label>

              <select
                id="budget"
                name="budget"
                className="w-full border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-950"
              >
                <option value="">Prefiero conversarlo</option>
                <option value="Menos de $500.000 CLP">Menos de $500.000 CLP</option>
                <option value="$500.000 - $1.500.000 CLP">$500.000 - $1.500.000 CLP</option>
                <option value="$1.500.000 - $3.000.000 CLP">$1.500.000 - $3.000.000 CLP</option>
                <option value="Más de $3.000.000 CLP">Más de $3.000.000 CLP</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-bold">
                Describe brevemente el problema o la idea
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                placeholder="Ejemplo: Necesito automatizar un proceso interno, crear una plataforma web o integrar sistemas..."
                className="w-full resize-none border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-950"
              />
            </div>

            <button
              type="submit"
              className="bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-slate-800"
            >
              Enviar solicitud de diagnóstico
            </button>

            <p className="text-sm leading-relaxed text-slate-500">
              Responderé personalmente para evaluar alcance y próximos pasos.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}