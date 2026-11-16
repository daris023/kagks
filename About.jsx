import { useLang } from "@/context/LangContext";
import { useInstitutional } from "@/lib/content";
import SectionIcon from "@/components/SectionIcon";

export default function About() {
  const { lang } = useLang();
  const c = useInstitutional(lang).who;

  return (
    <section id="about" className="py-24 md:py-32 border-y border-line bg-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <p className="font-display text-brand text-xs tracking-[0.3em] uppercase mb-3">
            {c.eyebrow}
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl uppercase tracking-tight mb-6">
            {c.title}
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">{c.intro}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div>
            <h3 className="font-display text-xl uppercase tracking-wide text-brand mb-5">
              {c.approachTitle}
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {c.approach.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-line bg-surface p-8 md:p-10 self-start shadow-card">
            <h3 className="font-display text-xl uppercase tracking-wide text-brand mb-5">
              {c.visionTitle}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{c.vision}</p>
          </div>
        </div>

        <h3 className="font-display text-2xl uppercase tracking-tight mb-8">{c.valuesTitle}</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {c.values.map((v) => (
            <div key={v.title} className="card-hover rounded-xl border border-line bg-surface p-6">
              <SectionIcon name={v.icon} size={26} className="text-brand mb-4" />
              <h4 className="font-display text-lg uppercase tracking-wide mb-2">{v.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
