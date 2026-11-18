import { m } from 'framer-motion'
import { ArrowRight, Download, GraduationCap, Medal, MapPin } from 'lucide-react'
import { hero, highlights, site } from '../data/content'

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const [first, middle, last] = hero.name.split(' ')

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      {/* Soft background washes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 size-[28rem] rounded-full bg-emerald-100/70 blur-3xl" />
        <div className="absolute top-20 -right-24 size-[26rem] rounded-full bg-rose-100/80 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(15_23_42/0.06)_1px,transparent_0)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr]">
        <div className="min-w-0">
          <m.p {...fadeUp(0)} className="flex items-center gap-3 text-sm font-semibold tracking-[0.25em] text-emerald-800 uppercase">
            <span className="h-px w-10 bg-emerald-800" aria-hidden="true" />
            {hero.greeting}
          </m.p>

          <m.h1
            {...fadeUp(0.1)}
            className="mt-5 font-heading text-4xl leading-[1.1] font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            {first} {middle}{' '}
            <span className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-rose-400 bg-clip-text text-transparent">
              {last}
            </span>
          </m.h1>

          <m.p
            {...fadeUp(0.2)}
            className="mt-6 flex flex-wrap gap-y-1 font-heading text-base font-medium text-slate-800 sm:text-lg"
          >
            {hero.title.split(' | ').map((part, i, arr) => (
              <span key={part} className="whitespace-nowrap">
                {part}
                {i < arr.length - 1 && <span className="mx-2.5 text-rose-400" aria-hidden="true">✦</span>}
                {i < arr.length - 1 && <span className="sr-only"> | </span>}
              </span>
            ))}
          </m.p>

          <m.p {...fadeUp(0.3)} className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">
            {hero.description}
          </m.p>

          <m.div {...fadeUp(0.4)} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#research"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800 px-7 py-4 text-sm font-semibold text-white shadow-md shadow-emerald-900/15 transition-all hover:-translate-y-0.5 hover:bg-emerald-900 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
            >
              Explore My Research
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={site.cvUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-rose-200 bg-rose-100 px-7 py-4 text-sm font-semibold text-rose-950 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-rose-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
            >
              <Download className="size-4" aria-hidden="true" />
              Download CV
            </a>
          </m.div>
        </div>

        {/* Profile card */}
        <m.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div aria-hidden="true" className="absolute -inset-3 rotate-3 rounded-[2rem] bg-gradient-to-br from-rose-200 to-rose-100" />
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900 p-8 text-white shadow-xl shadow-emerald-900/20">
            <div aria-hidden="true" className="absolute -top-16 -right-16 size-48 rounded-full border border-white/10" />
            <div aria-hidden="true" className="absolute -top-8 -right-8 size-32 rounded-full border border-white/10" />

            <div className="grid size-20 place-items-center rounded-2xl bg-white/10 font-heading text-2xl font-semibold text-rose-100 ring-1 ring-white/20 backdrop-blur">
              UM
            </div>
            <p className="mt-6 font-heading text-xl font-semibold">{site.name}</p>
            <p className="mt-1 text-sm text-emerald-100">B.Sc. (Hons) Biosystems Technology</p>

            <ul className="mt-8 space-y-4 text-sm">
              {[
                [GraduationCap, 'University of Sri Jayewardenepura'],
                [Medal, 'Gold Medal · Most Outstanding Graduate'],
                [MapPin, 'Sri Lanka · Open to study abroad'],
              ].map(([Icon, text]) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="mt-0.5 size-5 shrink-0 text-rose-200" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium ring-1 ring-white/15">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-rose-300 opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-rose-300" />
              </span>
              Seeking Master’s / Ph.D. opportunities
            </div>
          </div>
        </m.div>
      </div>

      {/* Highlights strip */}
      <m.ul
        {...fadeUp(0.55)}
        className="mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-4 px-5 sm:px-8 lg:grid-cols-4"
      >
        {highlights.map(({ icon: Icon, value, label }) => (
          <li
            key={label}
            className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-800">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-heading text-xl font-semibold text-slate-900">{value}</p>
              <p className="text-xs leading-snug text-slate-600">{label}</p>
            </div>
          </li>
        ))}
      </m.ul>
    </section>
  )
}
