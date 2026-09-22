import { HomePage } from "@/components/HomePage";
import { getSite } from "@/lib/content";
import { getLocale } from "@/lib/locale";

export default async function Page() {
  const locale = await getLocale();
  return <HomePage site={getSite(locale)} locale={locale} />;
}
