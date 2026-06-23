import { PageLayout } from "@/components/layout/PageLayout";
import { PageBanner } from "@/components/common/PageBanner";
import { Team } from "@/components/sections/Team";

export default function TeamPage() {
  return (
    <PageLayout>
      <PageBanner
        label="Our Team"
        subtitle="Meet the Experts Behind Karizzmah"
      />
      <Team />
    </PageLayout>
  );
}
