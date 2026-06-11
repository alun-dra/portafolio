// src/components/Contact/Contact.jsx
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTypes, setSelectedTypes] = useState([])
  const [turnstileToken, setTurnstileToken] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [feedback, setFeedback] = useState(null)

  const email = import.meta.env.VITE_CONTACT_EMAIL
  const linkedin = import.meta.env.VITE_LINKEDIN_URL
  const github = import.meta.env.VITE_GITHUB_URL
  const whatsapp = import.meta.env.VITE_WHATSAPP_URL
  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY

  const formAction = email ? `https://formsubmit.co/ajax/${email}` : '#'

  useEffect(() => {
    window.onTurnstileSuccess = (token) => {
      setTurnstileToken(token)
    }

    window.onTurnstileExpired = () => {
      setTurnstileToken('')
    }

    return () => {
      delete window.onTurnstileSuccess
      delete window.onTurnstileExpired
    }
  }, [])

  const socialLinks = [
    {
      label: 'Correo profesional',
      href: email ? `mailto:${email}` : null,
      icon: <MdOutlineMail size={24} />,
    },
    {
      label: 'LinkedIn',
      href: linkedin || null,
      icon: <FaLinkedinIn size={20} />,
    },
    {
      label: 'GitHub',
      href: github || null,
      icon: <FaGithub size={21} />,
    },
    {
      label: 'WhatsApp',
      href: whatsapp || null,
      icon: <FaWhatsapp size={22} />,
    },
  ].filter((item) => item.href)

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

  const toggleProjectType = (type) => {
    setSelectedTypes((current) =>
      current.includes(type)
        ? current.filter((item) => item !== type)
        : [...current, type]
    )
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!email) {
      setFeedback({
        type: 'error',
        title: 'Formulario no configurado',
        message: 'Falta configurar el correo de destino.',
      })
      return
    }

    if (turnstileSiteKey && !turnstileToken) {
      setFeedback({
        type: 'error',
        title: 'Verificación pendiente',
        message: 'Completa la verificación antes de enviar el formulario.',
      })
      return
    }

    const formData = new FormData(event.currentTarget)

    selectedTypes.forEach((type) => {
      formData.append('Tipo de necesidad[]', type)
    })

    if (turnstileToken) {
      formData.append('cf-turnstile-response', turnstileToken)
    }

    try {
      setIsSending(true)

      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('No se pudo enviar el formulario')
      }

      event.currentTarget.reset()
      setSelectedTypes([])
      setTurnstileToken('')

      if (window.turnstile) {
        window.turnstile.reset()
      }

      setFeedback({
        type: 'success',
        title: 'Mensaje enviado correctamente',
        message:
          'Gracias por contactarme. Revisaré tu solicitud y responderé personalmente a la brevedad.',
      })
    } catch {
      setFeedback({
        type: 'error',
        title: 'No se pudo enviar el mensaje',
        message:
          'Inténtalo nuevamente o contáctame directamente por LinkedIn o WhatsApp.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-[#111827] text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:py-8">
        <div className="lg:max-w-xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c6a15b]">
            Contacto
          </p>

          <h2
            id="contact-title"
            className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-[42px] xl:text-5xl"
          >
            Conversemos sobre la solución que tu organización necesita.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Cuéntame si necesitas desarrollar una plataforma web, automatizar
            procesos, construir una API, mejorar un sistema interno o definir
            una arquitectura técnica.
          </p>

          <div className="mt-5 bg-white/5 p-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#c6a15b]">
              Qué puedes esperar
            </p>

            <div className="mt-4 grid gap-2">
              {[
                ['01', 'Revisión inicial de tu necesidad'],
                ['02', 'Orientación técnica según el alcance'],
                ['03', 'Propuesta clara y aterrizada'],
                ['04', 'Comunicación directa conmigo'],
              ].map(([number, text]) => (
                <div
                  key={number}
                  className="flex gap-4 border-t border-white/10 pt-3 text-sm"
                >
                  <span className="font-bold text-[#c6a15b]">{number}</span>
                  <p className="text-slate-200">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-[#c6a15b]">
              Canales de contacto
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const isEmail = item.href.startsWith('mailto:')

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={isEmail ? undefined : '_blank'}
                    rel={isEmail ? undefined : 'noreferrer'}
                    aria-label={item.label}
                    title={item.label}
                    className="group flex h-11 w-11 items-center justify-center border border-white/20 bg-white/5 text-white transition-all duration-200 hover:border-[#c6a15b] hover:bg-[#c6a15b] hover:text-slate-950"
                  >
                    <span className="transition-transform duration-200 group-hover:scale-110">
                      {item.icon}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#f7f5f0] p-5 text-slate-950 shadow-2xl"
        >
          <input
            type="hidden"
            name="_subject"
            value="Nuevo contacto desde alvarovillalobos.cl"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <input
            type="text"
            name="_honey"
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
          />

          <div className="grid gap-3.5">
            <div className="grid gap-3.5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-bold">
                  Nombre
                </label>
                <input
                  id="name"
                  name="Nombre"
                  type="text"
                  required
                  className="w-full border border-slate-300 bg-white px-4 py-2.5 outline-none focus:border-slate-950"
                />
              </div>

              <div>
                <label htmlFor="company" className="mb-1 block text-sm font-bold">
                  Empresa u organización
                </label>
                <input
                  id="company"
                  name="Empresa u organización"
                  type="text"
                  className="w-full border border-slate-300 bg-white px-4 py-2.5 outline-none focus:border-slate-950"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-bold">
                Correo electrónico
              </label>
              <input
                id="email"
                name="Correo electrónico"
                type="email"
                required
                className="w-full border border-slate-300 bg-white px-4 py-2.5 outline-none focus:border-slate-950"
              />
            </div>

            <div className="grid gap-3.5 md:grid-cols-2">
              <div>
                <p className="mb-1 block text-sm font-bold">
                  Tipo de necesidad
                </p>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full border border-slate-300 bg-white px-4 py-2.5 text-left font-semibold text-slate-950 transition hover:border-slate-950"
                >
                  {selectedTypes.length > 0
                    ? `${selectedTypes.length} opción(es) seleccionada(s)`
                    : 'Seleccionar opciones'}
                </button>

                {selectedTypes.length > 0 && (
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {selectedTypes.join(', ')}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="budget" className="mb-1 block text-sm font-bold">
                  Presupuesto estimado
                </label>

                <select
                  id="budget"
                  name="Presupuesto estimado"
                  className="w-full border border-slate-300 bg-white px-4 py-2.5 outline-none focus:border-slate-950"
                >
                  <option value="">Prefiero conversarlo</option>
                  <option value="Menos de $500.000 CLP">Menos de $500.000 CLP</option>
                  <option value="$500.000 - $1.500.000 CLP">$500.000 - $1.500.000 CLP</option>
                  <option value="$1.500.000 - $3.000.000 CLP">$1.500.000 - $3.000.000 CLP</option>
                  <option value="Más de $3.000.000 CLP">Más de $3.000.000 CLP</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-bold">
                Describe brevemente el problema o la idea
              </label>
              <textarea
                id="message"
                name="Mensaje"
                required
                rows="3"
                placeholder="Ejemplo: Necesito automatizar un proceso interno, crear una plataforma web o integrar sistemas..."
                className="w-full resize-none border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-950"
              />
            </div>

            {turnstileSiteKey && (
              <div
                className="cf-turnstile"
                data-sitekey={turnstileSiteKey}
                data-callback="onTurnstileSuccess"
                data-expired-callback="onTurnstileExpired"
              />
            )}

            <button
              type="submit"
              disabled={!email || isSending}
              className="bg-slate-950 px-7 py-3.5 font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {isSending ? 'Enviando mensaje...' : 'Enviar solicitud de diagnóstico'}
            </button>

            <p className="text-sm leading-relaxed text-slate-500">
              Responderé personalmente para evaluar alcance y próximos pasos.
            </p>
          </div>
        </form>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 px-5">
          <div className="w-full max-w-xl bg-[#f7f5f0] p-6 text-slate-950 shadow-2xl">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9b7a38]">
                  Tipo de necesidad
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  Selecciona una o más opciones
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="border border-slate-950 px-3 py-1 font-bold"
                aria-label="Cerrar modal"
              >
                ×
              </button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {projectTypes.map((type) => (
                <label
                  key={type}
                  className="flex cursor-pointer items-center gap-3 border border-slate-300 bg-white px-4 py-3 font-semibold"
                >
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => toggleProjectType(type)}
                    className="h-4 w-4 accent-slate-950"
                  />
                  {type}
                </label>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setSelectedTypes([])}
                className="border border-slate-300 px-5 py-3 font-semibold"
              >
                Limpiar
              </button>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="bg-slate-950 px-5 py-3 font-semibold text-white"
              >
                Confirmar selección
              </button>
            </div>
          </div>
        </div>
      )}

      {feedback && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/70 px-5">
          <div className="w-full max-w-md bg-[#f7f5f0] p-7 text-slate-950 shadow-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9b7a38]">
              {feedback.type === 'success' ? 'Solicitud enviada' : 'Aviso'}
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              {feedback.title}
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              {feedback.message}
            </p>

            <button
              type="button"
              onClick={() => setFeedback(null)}
              className="mt-6 w-full bg-slate-950 px-5 py-3 font-semibold text-white"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </section>
  )
}