import { skills } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills & Competencies"
          title="A Toolkit for Rigorous Food Research"
          subtitle="Laboratory expertise, research and development capability, and the professional skills to lead projects end to end."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {skills.map(({ category, icon: Icon, items }, i) => (
            <Reveal
              key={category}
              delay={0.08 * i}
              className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-900 text-white shadow-sm">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-slate-900">{category}</h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-medium text-rose-950 transition-colors hover:border-rose-300 hover:bg-rose-100"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
