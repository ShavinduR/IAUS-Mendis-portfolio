import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Footer from './components/Footer'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen overflow-x-clip bg-slate-50 font-body text-slate-600 antialiased selection:bg-rose-200 selection:text-rose-950">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-emerald-800 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">
            <Hero />
            <About />
            <Research />
            <Experience />
            <Skills />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LazyMotion>
  )
}
