import { Hero } from "@/components/sections/Hero";
import { TagBand } from "@/components/sections/TagBand";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { StorySection } from "@/components/sections/StorySection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TagBand />
      <TrustStrip />
      <ProductsSection />
      <StorySection />
      <RoadmapSection />
    </>
  );
}