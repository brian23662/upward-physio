import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { getServiceBySlug } from "@/lib/services";

const SLUG = "injury-prevention" as const;

export function generateMetadata(): Metadata {
  const s = getServiceBySlug(SLUG);
  return {
    title: s?.title ?? "Injury Prevention",
    description: s?.shortDescription,
  };
}

export default function Page() {
  return <ServicePage slug={SLUG} />;
}
