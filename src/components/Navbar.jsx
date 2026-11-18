import { useEffect, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, site } from '../data/content'

/**
 * Scroll-spy: returns the id of the section currently under the navbar.
 * A section counts as active once its top passes ~35% of the viewport height;
 * near the very bottom of the page the last linked section wins.
 */
function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const line = window.innerHeight * 0.35
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      if (atBottom) current = ids[ids.length - 1]
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [ids])

  return active
}

const sectionIds = navLinks.map((link) => link.href.slice(1))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled || open
  const isActive = (href) => active === href.slice(1)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="group flex items-center gap-3">
          <span aria-hidden="true" className="grid size-10 place-items-center rounded-xl bg-emerald-800 font-heading text-sm font-semibold text-rose-100 shadow-sm transition-transform group-hover:scale-105">
            UM
          </span>
          {/* Short name on phones, full name from sm, plus role from lg */}
          <span className="font-heading text-base font-semibold text-slate-900 sm:hidden">
            {site.shortName}
            <span className="sr-only"> Sathsarani Mendis</span>
          </span>
          <span className="hidden font-heading text-[0.95rem] font-semibold text-slate-900 sm:inline">
            {site.name}
            <span className="hidden font-medium text-slate-500 lg:inline">
              <span className="mx-2 text-amber-500" aria-hidden="true">|</span>
              {site.role}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={isActive(link.href) ? 'true' : undefined}
                className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors lg:px-4 ${
                  isActive(link.href)
                    ? 'bg-emerald-50 text-emerald-800'
                    : 'text-slate-600 hover:bg-emerald-50 hover:text-emerald-800'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-amber-400"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.cvUrl}
            download={site.cvFileName}
            className="hidden items-center gap-2 rounded-full border border-amber-200 bg-rose-100 px-5 py-2.5 text-sm font-semibold text-rose-950 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-rose-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400 sm:inline-flex"
          >
            <Download className="size-4" aria-hidden="true" />
            Download CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full text-slate-800 transition-colors hover:bg-slate-100 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-100 bg-white md:hidden"
          >
            <ul className="space-y-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(link.href) ? 'true' : undefined}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium ${
                      isActive(link.href)
                        ? 'bg-emerald-50 text-emerald-800'
                        : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                    }`}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span aria-hidden="true" className="size-2 rounded-full bg-amber-400" />
                    )}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={site.cvUrl}
                  download={site.cvFileName}
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-800 px-4 py-3 text-base font-semibold text-white"
                >
                  <Download className="size-4" aria-hidden="true" />
                  Download CV
                </a>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
