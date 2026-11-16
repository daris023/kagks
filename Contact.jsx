import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLang } from "@/context/LangContext";
import { getContactEmailProps } from "@/lib/mail";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjybjaql";

const textareaClass =
  "flex w-full rounded-md border border-line bg-[#060F20] px-4 py-3 text-sm text-cream placeholder:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20";

export default function Contact() {
  const { t, lang } = useLang();
  const mailProps = getContactEmailProps("Kerkese nga faqja e KAG");
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setStatus("sending");
    try {
      data.append("_subject", "Mesazh i ri nga faqja e KAG");
      data.append("Gjuha", lang);
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("send failed");
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 border-t border-line bg-ink overflow-hidden dot-grid-bg"
    >
      <div className="relative max-w-2xl mx-auto px-6 md:px-10">
        <div className="text-center mb-10">
          <p className="font-display text-brand text-xs tracking-[0.3em] uppercase mb-4">
            {t.contactEyebrow}
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl uppercase tracking-tight mb-5">
            {t.contactTitle}
          </h2>
          <p className="text-muted-foreground">{t.contactBody}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-line bg-surface p-7 md:p-9 shadow-card space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="c-name">{t.formName}</Label>
              <Input id="c-name" name="name" required maxLength={120} />
            </div>
            <div>
              <Label htmlFor="c-email">{t.formEmail}</Label>
              <Input id="c-email" name="email" type="email" required maxLength={160} />
            </div>
          </div>
          <div>
            <Label htmlFor="c-phone">{t.formPhone}</Label>
            <Input id="c-phone" name="phone" type="tel" maxLength={40} />
          </div>
          <div>
            <Label htmlFor="c-message">{t.formMessage}</Label>
            <textarea
              id="c-message"
              name="message"
              rows={5}
              required
              maxLength={4000}
              className={textareaClass}
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
            {status === "sending" ? t.formSending : t.formSend}
          </Button>

          {status === "ok" && <p className="text-brand text-sm">{t.formOk}</p>}
          {status === "error" && <p className="text-red-400 text-sm">{t.formErr}</p>}
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          {t.formOr}:{" "}
          <a {...mailProps} className="text-brand hover:underline">
            {t.contactBtn}
          </a>
        </p>
      </div>
    </section>
  );
}
