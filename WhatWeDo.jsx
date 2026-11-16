import { useLang } from "@/context/LangContext";
import { useInstitutional } from "@/lib/content";
import SectionIcon from "@/components/SectionIcon";

export default function WhatWeDo() {
  const { lang } = useLang();
  const c = useInstitutional(lang).what;

  return (
    <section id="what-we-do" className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-10">
      <div className="max-w-3xl mb-14">
        <p className="font-display text-brand text-xs tracking-[0.3em] uppercase mb-3">
          {c.eyebrow}
        </p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl uppercase tracking-tight mb-6">
          {c.title}
        </h2>
        <p className="text-white/70 text-lg leading-relaxed">{c.intro}</p>
      </div>

      <div className="mb-16 max-w-3xl">
        <h3 className="font-display text-xl uppercase tracking-wide text-brand mb-4">
          {c.focusTitle}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{c.focus}</p>
      </div>

      <h3 className="font-display text-2xl uppercase tracking-tight mb-8">{c.areasTitle}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {c.areas.map((a) => (
          <div key={a.title} className="card-hover rounded-xl border border-line bg-surface p-6">
            <SectionIcon name={a.icon} size={26} className="text-brand mb-4" />
            <h4 className="font-display text-lg uppercase tracking-wide mb-2">{a.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{a.body}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-line bg-surface p-8 md:p-12 shadow-card">
        <p className="font-display text-brand text-xs tracking-[0.3em] uppercase mb-2">
          {c.thinkEyebrow}
        </p>
        <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-6">
          {c.thinkTitle}
        </h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
          {c.think.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
