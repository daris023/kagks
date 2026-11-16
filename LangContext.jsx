import { createContext, useContext, useState } from "react";

export const dict = {
  sq: {
    navWho: "Kush Jemi",
    navWhat: "Çfarë Bëjmë",
    navGov: "Qeverisja",
    navAbout: "Rreth Nesh",
    navProducts: "Produktet",
    navLocation: "Lokacioni",
    navContact: "Kontakt",
    heroEyebrow: "KAG · Kosova Arsenal Group",
    heroTitleA: "Ndërtojmë një platformë industriale të disiplinuar për prodhim municioni sipas",
    heroTitleB: "standardeve NATO",
    heroTitleC: "",
    heroSubtitle:
      "KAG po ndërton një platformë prodhimi të kontrolluar dhe të përqendruar në cilësi, me fokus në municionin 7.62×51 mm dhe 12.7×99 mm, e mbështetur nga qeverisja e mirë, furnizimi i përgjegjshëm dhe një vizion afatgjatë industrial.",
    heroCta1: "Kush jemi",
    heroCta2: "Na kontaktoni",
    statusBadge: "Status aktual",
    statusTitle: "Ende s'kemi filluar prodhimin",
    statusBody:
      "KAG ndodhet në fazën e ndërtimit dhe përgatitjes së linjës së parë të prodhimit. Kalibri i parë i planifikuar për prodhim është 9mm, me synim zgjerimin në kalibra shtesë në të ardhmen.",
    aboutEyebrow: "Rreth Nesh",
    aboutTitle: "Një platformë industriale e disiplinuar.",
    aboutBody:
      "Kosova Arsenal Group (KAG) është themeluar për të ndërtuar kapacitet të qëndrueshëm prodhimi municioni në Kosovë, në përputhje me standardet ndërkombëtare industriale dhe me partneritet strategjik amerikan për pajisje dhe linja prodhimi.",
    productsEyebrow: "Produktet Kryesore",
    productsTitle: "Kalibrat që synojmë të prodhojmë.",
    productsIntro:
      "Linjat tona të planifikuara të prodhimit janë ndërtuar përreth dy kalibrave kryesorë me kërkesë të lartë ndërkombëtare.",
    product1Name: "7.62×51 mm",
    product1Desc: "Kalibri standard NATO për armë automatike dhe snajper — një nga më të kërkuarit globalisht.",
    product2Name: "12.7×99 mm (.50 BMG)",
    product2Desc: "Kalibër i rëndë, i përdorur gjerësisht në sisteme mbështetëse dhe mitraloza të rënda.",
    locationEyebrow: "Lokacioni",
    locationTitle: "Fabrika — Pejë, Kosovë",
    locationAddr: "Rr. Mbretëresha Teutë, Pejë, Kosovë",
    contactEyebrow: "Na Kontaktoni",
    contactTitle: "Interesuar për partneritet apo informacion?",
    contactBody: "Na shkruani — do t'ju përgjigjemi sa më shpejt.",
    contactBtn: "Na Shkruani",
    formName: "Emri i plotë",
    formEmail: "Email",
    formPhone: "Telefoni (opsionale)",
    formMessage: "Mesazhi",
    formSend: "Dërgo Mesazhin",
    formSending: "Duke dërguar...",
    formOk: "Faleminderit! Mesazhi u dërgua — do t'ju përgjigjemi sa më shpejt.",
    formErr: "Diçka shkoi keq. Provoni përsëri ose na shkruani me email.",
    formOr: "ose na shkruani direkt me email",
    footerRights: "Të gjitha të drejtat e rezervuara.",
    privacy: "Politika e Privatësisë",
    terms: "Termat dhe Kushtet",
    adminLogin: "Hyrje Admin",
  },
  en: {
    navWho: "Who We Are",
    navWhat: "What We Do",
    navGov: "Governance",
    navAbout: "About",
    navProducts: "Products",
    navLocation: "Location",
    navContact: "Contact",
    heroEyebrow: "KAG · Kosova Arsenal Group",
    heroTitleA: "Building a disciplined industrial platform for",
    heroTitleB: "NATO-standard",
    heroTitleC: "ammunition production",
    heroSubtitle:
      "KAG is building a controlled, quality-focused manufacturing platform centered on 7.62×51 mm and 12.7×99 mm ammunition, supported by governance, responsible sourcing, and a long-term industrial vision.",
    heroCta1: "Who We Are",
    heroCta2: "Contact Us",
    statusBadge: "Current Status",
    statusTitle: "Production has not started yet",
    statusBody:
      "KAG is currently in the construction and setup phase for its first production line. The first planned caliber is 9mm, with additional calibers planned for the future.",
    aboutEyebrow: "About Us",
    aboutTitle: "A disciplined industrial platform.",
    aboutBody:
      "Kosova Arsenal Group (KAG) was founded to build sustainable ammunition manufacturing capacity in Kosovo, aligned with international industrial standards and a strategic American partnership for equipment and production lines.",
    productsEyebrow: "Primary Products",
    productsTitle: "The calibers we aim to produce.",
    productsIntro:
      "Our planned production lines are built around two calibers with high international demand.",
    product1Name: "7.62×51 mm",
    product1Desc: "The NATO-standard caliber for automatic rifles and sniper systems — one of the most sought-after globally.",
    product2Name: "12.7×99 mm (.50 BMG)",
    product2Desc: "A heavy caliber widely used in support weapon systems and heavy machine guns.",
    locationEyebrow: "Location",
    locationTitle: "The Facility — Peja, Kosovo",
    locationAddr: "Mbretëresha Teutë St, Peja, Kosovo",
    contactEyebrow: "Get In Touch",
    contactTitle: "Interested in partnership or information?",
    contactBody: "Write to us — we'll get back to you as soon as possible.",
    contactBtn: "Contact Us",
    formName: "Full name",
    formEmail: "Email",
    formPhone: "Phone (optional)",
    formMessage: "Message",
    formSend: "Send Message",
    formSending: "Sending...",
    formOk: "Thank you! Your message was sent — we'll get back to you as soon as possible.",
    formErr: "Something went wrong. Please try again or email us directly.",
    formOr: "or write to us directly by email",
    footerRights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms and Conditions",
    adminLogin: "Admin Login",
  },
};

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("sq");
  const t = dict[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
