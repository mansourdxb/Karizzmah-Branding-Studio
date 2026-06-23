import { PageLayout } from "@/components/layout/PageLayout";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <AboutPreview />
      <Stats />
      <Services />
      <WhyChoose />
      <CtaBanner />
      <FAQ />
    </PageLayout>
  );
}
