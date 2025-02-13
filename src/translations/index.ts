import { en } from './en';
import { nl } from './nl';
export const translations = {
  en,
  nl
} as const;
export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof en;
export function getTranslation(language: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[language];
  for (const k of keys) {
    if (value === undefined) return key;
    value = value[k];
  }
  return value || key;
}