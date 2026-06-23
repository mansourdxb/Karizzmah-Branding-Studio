import { PageLayout } from "@/components/layout/PageLayout";
import { PageBanner } from "@/components/common/PageBanner";
import { Contact } from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <PageLayout>
      <PageBanner
        label="Contact Us"
        subtitle="Get in touch with Karizzmah — we'd love to hear from you"
      />
      <Contact />
    </PageLayout>
  );
}
