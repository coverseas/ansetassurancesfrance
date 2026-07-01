import { Hero } from "@/components/sections/Hero";
import { TrustLogosStrip } from "@/components/sections/TrustLogosStrip";
import { PromessesSection } from "@/components/sections/PromessesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { HowToSection } from "@/components/sections/HowToSection";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { TeamStrip } from "@/components/sections/TeamStrip";
import { EspaceClientSection } from "@/components/sections/EspaceClientSection";
import { TagBand } from "@/components/sections/TagBand";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StorySection } from "@/components/sections/StorySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustLogosStrip />
      <PromessesSection />
      <ProductsSection />
      <HowToSection />
      <ServiceSection />
      <TeamStrip />
      <EspaceClientSection />
      <TagBand />
      <StatsSection />
      <TestimonialsSection />
      <StorySection />
      <FaqSection />
      <RoadmapSection />
    </>
  );
}
