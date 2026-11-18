import { research } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Cover({ project }) {
  const Icon = project.icon
  if (project.image) {
    return (
      <img
        src={project.image}
        alt=""
        width="400"
        height="250"
        loading="lazy"
        decoding="async"
        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    )
  }
  return (
    <div
      aria-hidden="true"
      className={`relative size-full bg-gradient-to-br ${project.cover} transition-transform duration-700 group-hover:scale-105`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.18)_1px,transparent_0)] [background-size:18px_18px]" />
      <div className="absolute -right-10 -bottom-10 size-44 rounded-full border border-white/25" />
      <div className="absolute -right-2 -bottom-2 size-28 rounded-full border border-white/25" />
      <div className="absolute inset-0 grid place-items-center">
        <span className="grid size-20 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm">
          <Icon className="size-9" strokeWidth={1.5} />
        </span>
      </div>
    </div>
  )
}

export default function Research() {
  return (
    <section id="research" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Research & Innovations"
          title="Turning Food Science into Sustainable Solutions"
          subtitle="Selected research projects spanning value addition, process engineering, product development and post-harvest preservation."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {research.map((project, i) => (
            <Reveal key={project.title} delay={0.08 * (i % 2)} as="article" className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="aspect-[8/5] overflow-hidden">
                  <Cover project={project} />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="self-start rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-900">
                    {project.tag}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-600">{project.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
