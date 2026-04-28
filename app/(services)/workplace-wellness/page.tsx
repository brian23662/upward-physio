import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { getServiceBySlug } from "@/lib/services";

const SLUG = "workplace-wellness" as const;

export function generateMetadata(): Metadata {
  const s = getServiceBySlug(SLUG);
  return {
    title: s?.title ?? "Workplace Wellness",
    description: s?.shortDescription,
  };
}

export default function Page() {
  return <ServicePage slug={SLUG} />;
}
