import { BookOpen, Check, GraduationCap } from 'lucide-react'
import { about } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  const { education } = about
  return (
    <section id="about" className="scroll-mt-20 bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="About Me" title={about.heading} align="left" />
            <div className="mt-8 space-y-6">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.08 * i}>
                  <p className="text-base leading-[1.85] text-slate-600">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:pt-16">
            <Reveal className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-emerald-800 text-white">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-slate-900">Education</h3>
              </div>
              <p className="mt-5 font-heading font-semibold text-slate-900">{education.degree}</p>
              <p className="mt-1 text-sm text-slate-600">{education.institution}</p>
              <p className="mt-1 text-sm text-slate-600">Specialization: {education.specialization}</p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-emerald-800 px-3 py-1 text-xs font-semibold text-white">
                  {education.result}
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                  {education.years}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="rounded-2xl border border-rose-100 bg-gradient-to-br from-rose-50 to-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-rose-100 text-rose-900">
                  <BookOpen className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-slate-900">Research Interests</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {about.interests.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <Check className="size-4 shrink-0 text-emerald-700" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
