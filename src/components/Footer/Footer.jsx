// src/components/Footer/Footer.jsx
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const email = import.meta.env.VITE_CONTACT_EMAIL
  const linkedin = import.meta.env.VITE_LINKEDIN_URL
  const github = import.meta.env.VITE_GITHUB_URL
  const whatsapp = import.meta.env.VITE_WHATSAPP_URL

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
              Diseño y desarrollo soluciones digitales, plataformas web, APIs,
              sistemas empresariales, automatización de procesos e infraestructura
              para empresas que necesitan crecer de forma ordenada y sostenible.
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
              <a href="#home" className="transition hover:text-slate-950">
                Inicio
              </a>
              <a href="#services" className="transition hover:text-slate-950">
                Servicios
              </a>
              <a href="#technologies" className="transition hover:text-slate-950">
                Tecnologías
              </a>
              <a href="#projects" className="transition hover:text-slate-950">
                Proyectos
              </a>
              <a href="#contact" className="transition hover:text-slate-950">
                Contacto
              </a>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
              Redes y contacto
            </h3>

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
                    className="group flex h-12 w-12 items-center justify-center border border-slate-300 bg-white text-slate-950 transition-all duration-200 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
                  >
                    <span className="transition-transform duration-200 group-hover:scale-110">
                      {item.icon}
                    </span>
                  </a>
                )
              })}
            </div>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-500">
              Canales disponibles para consultas profesionales, proyectos de software,
              colaboración técnica y contacto directo.
            </p>
          </div>
        </div>

        <div className="my-10 border-t border-slate-200" />

        <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Álvaro Villalobos. Todos los derechos reservados.</p>

          <p>Arquitectura de Software · Desarrollo Web · Soluciones Digitales</p>
        </div>
      </div>
    </footer>
  )
}