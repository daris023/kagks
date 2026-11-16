import { useLang } from "@/context/LangContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src="/brand/logo.png" alt="KAG" className="h-6 w-auto" />
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-muted-foreground text-xs">© 2026 KAG. {t.footerRights}</p>
          <p className="text-muted-foreground text-xs uppercase tracking-wide">
            <a
              href="https://kag-ks.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand transition-colors"
            >
              {t.privacy}
            </a>
            <span className="mx-2 text-line">|</span>
            <a
              href="https://kag-ks.com/terms"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand transition-colors"
            >
              {t.terms}
            </a>
          </p>
        </div>
        <span className="w-6" />
      </div>
    </footer>
  );
}
