import { m } from 'framer-motion'
import { ArrowRight, Download, Medal, Sparkles } from 'lucide-react'
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

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-5 sm:px-8 lg:grid lg:grid-cols-[1.3fr_1fr]">
        <div className="w-full min-w-0">
          <m.h1 {...fadeUp(0)} className="font-heading text-slate-900">
            <span className="flex items-center gap-3 text-sm font-semibold tracking-[0.25em] text-emerald-800 uppercase">
              <span className="h-px w-10 bg-emerald-800" aria-hidden="true" />
              {hero.greeting}
            </span>{' '}
            <span className="mt-5 block text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {first} {middle}{' '}
              <span className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-rose-400 bg-clip-text text-transparent">
                {last}
              </span>
            </span>
          </m.h1>

          <m.p
            {...fadeUp(0.15)}
            className="mt-6 flex flex-wrap gap-y-1 font-heading text-base font-medium text-slate-800 sm:text-lg"
          >
            {hero.title.split(' | ').map((part, i, arr) => (
              <span key={part} className="whitespace-nowrap">
                {part}
                {i < arr.length - 1 && <span className="mx-2.5 text-amber-500" aria-hidden="true">✦</span>}
                {i < arr.length - 1 && <span className="sr-only"> | </span>}
              </span>
            ))}
          </m.p>

          <m.p {...fadeUp(0.25)} className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">
            {hero.description}
          </m.p>

          <m.div {...fadeUp(0.35)} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#research"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800 px-7 py-4 text-sm font-semibold text-white shadow-md shadow-emerald-900/15 transition-all hover:-translate-y-0.5 hover:bg-emerald-900 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
            >
              Explore My Research
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={site.cvUrl}
              download={site.cvFileName}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-rose-200 bg-rose-100 px-7 py-4 text-sm font-semibold text-rose-950 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-rose-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
            >
              <Download className="size-4" aria-hidden="true" />
              Download CV
            </a>
          </m.div>
        </div>

        {/* Circular headshot with gold accent rings */}
        <m.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[16rem] sm:max-w-[20rem] lg:max-w-[22rem]"
        >
          <div aria-hidden="true" className="absolute -inset-6 rounded-full border border-dashed border-amber-300/70 sm:-inset-8" />
          <div aria-hidden="true" className="absolute -inset-2 rounded-full bg-gradient-to-br from-rose-200/60 via-transparent to-emerald-200/60 blur-xl" />

          <div className="relative aspect-square rounded-full bg-[conic-gradient(from_140deg,#fcd34d,#fda4af,#d4a373,#fde68a,#f9a8d4,#fcd34d)] p-1.5 shadow-xl shadow-rose-900/10">
            <div className="size-full rounded-full bg-white p-2">
              <img
                src={site.portrait.src}
                width="800"
                height="800"
                alt={site.portrait.alt}
                fetchPriority="high"
                decoding="async"
                className="size-full rounded-full object-cover object-top"
              />
            </div>
          </div>

          <div className="absolute -bottom-2 -left-4 flex items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-3 shadow-lg ring-1 ring-amber-200 backdrop-blur sm:-left-8">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-amber-300 to-amber-500 text-white">
              <Medal className="size-5" aria-hidden="true" />
            </span>
            <span className="text-left leading-tight">
              <span className="block font-heading text-sm font-semibold text-slate-900">Gold Medalist</span>
              <span className="block text-xs text-slate-600">Most Outstanding Graduate</span>
            </span>
          </div>

          <div className="absolute top-4 -right-3 flex items-center gap-2 rounded-full bg-emerald-800 px-4 py-2 text-xs font-semibold text-white shadow-lg sm:-right-6">
            <Sparkles className="size-4 text-amber-200" aria-hidden="true" />
            GPA 3.78
          </div>
        </m.div>
      </div>

      {/* Highlights strip */}
      <m.ul
        {...fadeUp(0.5)}
        className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-3 px-5 min-[360px]:grid-cols-2 sm:gap-4 sm:px-8 lg:grid-cols-4"
      >
        {highlights.map(({ icon: Icon, value, label }) => (
          <li
            key={label}
            className="flex min-w-0 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur sm:gap-4 sm:p-5"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-800 sm:size-11">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="font-heading text-xl font-semibold text-slate-900">{value}</p>
              <p className="text-xs leading-snug break-words hyphens-auto text-slate-600">{label}</p>
            </div>
          </li>
        ))}
      </m.ul>
    </section>
  )
}
