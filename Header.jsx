import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/context/LangContext";

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.navWho },
    { href: "#what-we-do", label: t.navWhat },
    { href: "#products", label: t.navProducts },
    { href: "#governance", label: t.navGov },
    { href: "#location", label: t.navLocation },
    { href: "#contact", label: t.navContact },
  ];

  const toggleLang = () => setLang(lang === "sq" ? "en" : "sq");

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-white/15 transition-colors ${
        scrolled ? "bg-[#6F7173] shadow-lg" : "bg-[#6F7173]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center shrink-0">
          <img src="/brand/logo.png" alt="KAG" className="h-11 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center text-sm text-white/90 font-medium uppercase tracking-wide">
          {links.map((l, i) => (
            <span key={l.href} className="flex items-center">
              {i > 0 && <span className="mx-4 h-4 w-px bg-white/60" />}
              <a href={l.href} className="nav-link hover:text-white transition-colors">
                {l.label}
              </a>
            </span>
          ))}
        </nav>

        <div className="hidden lg:flex items-center text-sm font-medium uppercase tracking-wide">
          <button onClick={() => setLang("sq")} className={lang === "sq" ? "text-white" : "text-white/60 hover:text-white"}>SQ</button>
          <span className="mx-3 h-4 w-px bg-white/60" />
          <button onClick={() => setLang("en")} className={lang === "en" ? "text-white" : "text-white/60 hover:text-white"}>EN</button>
        </div>

        <button
          className="lg:hidden text-white"
          aria-label="menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-white/15 bg-[#6F7173] px-6 py-5 flex flex-col gap-4 text-white/90 font-medium uppercase tracking-wide">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="hover:text-white">
              {l.label}
            </a>
          ))}
          <button onClick={toggleLang} className="text-left text-white/80 normal-case">
            {lang === "sq" ? "Switch to English" : "Kalo në Shqip"}
          </button>
        </div>
      )}
    </header>
  );
}
