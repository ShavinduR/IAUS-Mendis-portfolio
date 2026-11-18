import { BriefcaseBusiness, Building2, CalendarDays } from 'lucide-react'
import { experience } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Professional Experience"
          title="Bridging Academia and Industry"
          subtitle="Hands-on roles across industrial quality assurance, university teaching and national-level research."
        />

        <ol className="relative mt-16 space-y-10 before:absolute before:top-2 before:bottom-2 before:left-5 before:w-px before:bg-gradient-to-b before:from-emerald-700 before:via-emerald-200 before:to-rose-200 sm:before:left-6">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.role}-${job.org}`} delay={0.05 * i} className="relative pl-14 sm:pl-20">
              <span
                aria-hidden="true"
                className={`absolute top-1 left-0 grid size-10 place-items-center rounded-full ring-8 ring-white sm:size-12 ${
                  job.current ? 'bg-emerald-800 text-white shadow-md shadow-emerald-900/20' : 'bg-rose-100 text-rose-900'
                }`}
              >
                <BriefcaseBusiness className="size-4 sm:size-5" />
              </span>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:bg-white hover:shadow-md sm:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-100">
                    <CalendarDays className="size-3.5" aria-hidden="true" />
                    {job.period}
                  </span>
                  {job.current && (
                    <span className="rounded-full bg-emerald-800 px-3 py-1 text-xs font-semibold text-white">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-heading text-lg leading-snug font-semibold text-slate-900 sm:text-xl">
                  {job.role}
                </h3>
                <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Building2 className="size-4 text-rose-400" aria-hidden="true" />
                  {job.org}
                </p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-600">{job.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
