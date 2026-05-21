import { Hero } from "@/components/sections/Hero";
import { TagBand } from "@/components/sections/TagBand";
import { StatsSection } from "@/components/sections/StatsSection";
import { TeamStrip } from "@/components/sections/TeamStrip";
import { HowToSection } from "@/components/sections/HowToSection";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { EspaceClientSection } from "@/components/sections/EspaceClientSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StorySection } from "@/components/sections/StorySection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { Chatbot } from "@/components/Chatbot";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TagBand />
      <StatsSection />
      <TeamStrip />
      <HowToSection />
      <ServiceSection />
      <EspaceClientSection />
      <ProductsSection />
      <TestimonialsSection />
      <StorySection />
      <RoadmapSection />
      <Chatbot />
    </>
  );
}
