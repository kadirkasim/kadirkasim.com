import { redirectToWoDue } from "@/lib/wodueRedirect";

export function GET(request: Request) {
  return redirectToWoDue(request, "/wodue");
}
