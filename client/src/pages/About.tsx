import { PageLayout } from "@/components/layout/PageLayout";
import { PageBanner } from "@/components/common/PageBanner";
import { AboutWhoWeAre, AboutOurValue } from "@/components/sections/About";
import { CoreValues } from "@/components/sections/CoreValues";
import { aboutPage } from "@/data/site";

export default function AboutPage() {
  return (
    <PageLayout>
      <PageBanner
        label={aboutPage.heroLabel}
        subtitle={aboutPage.heroTitle}
      />
      <AboutWhoWeAre />
      <AboutOurValue />
      <CoreValues />
    </PageLayout>
  );
}
