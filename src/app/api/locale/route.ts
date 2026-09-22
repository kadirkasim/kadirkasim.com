import { NextResponse } from "next/server";
import { LOCALE_COOKIE, parseLocale } from "@/lib/locale";

export async function POST(request: Request) {
  let localeRaw: unknown;
  let redirectPath = "/";

  try {
    const body = (await request.json()) as { locale?: unknown; redirect?: unknown };
    localeRaw = body.locale;
    if (typeof body.redirect === "string" && body.redirect.startsWith("/")) {
      redirectPath = body.redirect;
    }
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const locale = parseLocale(typeof localeRaw === "string" ? localeRaw : undefined);
  const response = NextResponse.json({ ok: true, locale, redirect: redirectPath });
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}
