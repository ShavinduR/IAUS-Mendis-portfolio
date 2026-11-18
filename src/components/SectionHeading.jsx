import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left'
  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignment}`}>
      <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-rose-900 uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-heading text-3xl leading-tight font-semibold text-balance text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-slate-600">{subtitle}</p>}
    </Reveal>
  )
}
