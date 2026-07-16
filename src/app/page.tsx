import { HomePageContent } from "@/components/home-page-content";
import { defaultLocale } from "@/data/site-copy";

export default function HomePage() {
  return <HomePageContent locale={defaultLocale} />;
}
