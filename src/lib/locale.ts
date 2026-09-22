import { cookies } from "next/headers";

export const locales = ["en", "tr"] as const;
export type Locale = (typeof locales)[number];

export const LOCALE_COOKIE = "locale";
export const defaultLocale: Locale = "en";

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "tr";
}

export function parseLocale(value: string | undefined | null): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export async function getLocale(): Promise<Locale> {
  const jar = await cookies();
  return parseLocale(jar.get(LOCALE_COOKIE)?.value);
}
