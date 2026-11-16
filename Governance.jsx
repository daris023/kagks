import { Check, Download } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { useInstitutional } from "@/lib/content";
import SectionIcon from "@/components/SectionIcon";
import { Button } from "@/components/ui/button";

export default function Governance() {
  const { lang } = useLang();
  const c = useInstitutional(lang).gov;

  return (
    <section id="governance" className="py-24 md:py-32 border-y border-line bg-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-14">
          <p className="font-display text-brand text-xs tracking-[0.3em] uppercase mb-3">
            {c.eyebrow}
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl uppercase tracking-tight mb-6">
            {c.title}
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">{c.intro}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {c.blocks.map((b) => (
            <article
              key={b.title}
              className="card-hover rounded-xl border border-line bg-surface p-7 md:p-9 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="shrink-0 w-11 h-11 rounded-lg bg-brand/15 border border-brand/30 flex items-center justify-center">
                  <SectionIcon name={b.icon} size={22} />
                </div>
                <h3 className="font-display text-xl uppercase tracking-wide leading-snug pt-1">
                  {b.title}
                </h3>
              </div>

              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed mb-6">
                {b.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <ul className="space-y-2.5 mb-8">
                {b.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-cream/85">
                    <Check size={16} className="text-brand shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button asChild variant="outline" size="sm">
                  <a href={b.pdf} target="_blank" rel="noreferrer">
                    <Download size={15} className="mr-2" />
                    {c.pdfLabel}
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
