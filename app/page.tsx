import { Hero } from "@/components/sections/hero";
import { ServiceSection } from "@/components/sections/service-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SERVICES } from "@/lib/services";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Five service sections, alternating layout each row */}
      {SERVICES.map((service, i) => (
        <ServiceSection
          key={service.slug}
          service={service}
          reverse={i % 2 === 1}
          isFirst={i === 0}
        />
      ))}

      <ContactSection />
    </>
  );
}
