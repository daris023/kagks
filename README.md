# KAG - Kosova Arsenal Group (React + Vite + Tailwind + shadcn/ui)

## Nisja

```bash
npm install
npm run dev
```

Hap `http://localhost:5173`.

## Mesazhet nga forma e kontaktit

Forma dërgon mesazhet në email përmes Formspree. Endpoint-i është te:

```
src/components/Contact.jsx  →  FORMSPREE_ENDPOINT
```

Aktualisht përdor të njëjtin formular si Fron Adv (mesazhet vijnë te daris.shala19@gmail.com,
me subjekt "Mesazh i ri nga faqja e KAG"). Për një formular të veçantë, krijo një te
formspree.io dhe zëvendëso linkun.

## Tekstet

- Kush Jemi / Çfarë Bëjmë / Qeverisja (shqip + anglisht): `src/content/institutional.js`
- Tekstet e tjera (hero, status, produktet, kontakti): `src/context/LangContext.jsx`

## Publikimi

```bash
npm run build
```

Ngarko folderin `dist/` te Netlify, ose lidhe repository-n e GitHub-it me Netlify
(build command: `npm run build`, publish directory: `dist`).
# kagks
