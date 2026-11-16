import { institutional } from "@/content/institutional";

// Tekstet institucionale (shqip + anglisht). Per t'i ndryshuar, edito src/content/institutional.js
export function useInstitutional(lang) {
  return institutional[lang];
}
