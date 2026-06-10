// src/pages/Home.jsx
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Technologies from '../components/Technologies/Technologies'
import Projects from '../components/Projects/Projects'
// import Process from '../components/Process/Process'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Technologies />
      <Projects />
      {/* <Process /> */}
      <Contact />
      <Footer />
    </main>
  )
}