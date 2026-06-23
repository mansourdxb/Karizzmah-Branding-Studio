import { PageLayout } from "@/components/layout/PageLayout";
import { PageBanner } from "@/components/common/PageBanner";
import { Clients } from "@/components/sections/Clients";

export default function ClientsPage() {
  return (
    <PageLayout>
      <PageBanner
        label="Our Clients"
        subtitle="Trusted by leading brands across the UAE and beyond"
      />
      <Clients />
    </PageLayout>
  );
}
