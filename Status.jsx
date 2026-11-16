import { Factory } from "lucide-react";
import { useLang } from "@/context/LangContext";

export default function Status() {
  const { t, lang } = useLang();
  const title =
    t.statusTitle;
  const body =
    t.statusBody;

  return (
    <section id="status" className="bg-ink py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
      <div className="rounded-xl border border-line bg-surface p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start shadow-card">
        <div className="shrink-0 w-12 h-12 rounded-lg bg-brand/15 border border-brand/30 flex items-center justify-center">
          <Factory className="text-brand" size={24} />
        </div>
        <div>
          <span className="inline-block text-xs font-display uppercase tracking-widest text-brand border border-brand/30 rounded-full px-3 py-1 mb-4">
            {t.statusBadge}
          </span>
          <h3 className="font-display text-xl md:text-2xl font-semibold uppercase tracking-tight mb-3">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">{body}</p>
        </div>
      </div>
      </div>
    </section>
  );
}
