import { ArrowUp, Mail } from 'lucide-react'
import { site } from '../data/content'
import { LinkedInIcon } from './icons'

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-md">
            <p className="font-heading text-2xl font-semibold text-white">Let’s collaborate on research.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Open to Master’s and Ph.D. opportunities, research collaborations and academic
              conversations in food science and technology.
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-3">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-white/5 py-1.5 pr-5 pl-1.5 text-sm font-medium [overflow-wrap:anywhere] text-slate-200 ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-rose-100 hover:text-rose-950"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/10 transition-colors group-hover:bg-rose-200">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-white/5 py-1.5 pr-5 pl-1.5 text-sm font-medium text-slate-200 ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-rose-100 hover:text-rose-950"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#0A66C2] text-white">
                  <LinkedInIcon className="size-4" />
                </span>
                LinkedIn
                <span className="sr-only"> profile (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href="#top"
                aria-label="Back to top"
                className="grid size-12 place-items-center rounded-full bg-emerald-700 text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-600"
              >
                <ArrowUp className="size-5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-slate-400 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Food Technologist · University of Sri Jayewardenepura Alumna</p>
        </div>
      </div>
    </footer>
  )
}
