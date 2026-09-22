import { HomePage } from "@/components/HomePage";
import { getSite } from "@/lib/content";

export default function Page() {
  return <HomePage site={getSite()} />;
}
