import { NextResponse } from "next/server";

/** Permanent redirect that keeps the query string; locale rides on the cookie, so URLs stay shared. */
export function redirectToWoDue(request: Request, target: string) {
  const url = new URL(request.url);
  return NextResponse.redirect(new URL(`${target}${url.search}`, url), 308);
}
