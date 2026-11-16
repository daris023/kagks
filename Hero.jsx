import { ArrowRight } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="stagger">
          <h1
            style={{ animationDelay: ".1s" }}
            className="font-display font-medium text-4xl sm:text-5xl xl:text-6xl leading-[1.08] tracking-tight uppercase"
          >
            {t.heroTitleA} <span className="font-bold">{t.heroTitleB}</span> {t.heroTitleC}
          </h1>
          <p
            style={{ animationDelay: ".25s" }}
            className="mt-8 max-w-xl text-white/70 text-base md:text-lg leading-relaxed"
          >
            {t.heroSubtitle}
          </p>
          <div style={{ animationDelay: ".4s" }} className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#about">
                {t.heroCta1} <ArrowRight className="ml-3" size={20} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/80 text-white hover:border-white hover:bg-white/10">
              <a href="#contact">
                {t.heroCta2} <ArrowRight className="ml-3" size={20} />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <img
            src="/images/facility.jpg"
            alt="KAG"
            className="w-full aspect-[4/3] object-cover rounded-[2.5rem] shadow-card"
          />
        </div>
      </div>
    </section>
  );
}
