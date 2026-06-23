import { useEffect } from "react";
import { useLocation } from "wouter";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageBanner } from "@/components/common/PageBanner";
import { ServicesPageContent } from "@/components/sections/ServicesPageContent";
import { servicesPageIntro } from "@/data/services";

function scrollToServiceHash() {
  const hash = window.location.hash.slice(1);
  if (!hash) return;

  requestAnimationFrame(() => {
    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

export default function ServicesPage() {
  const [location] = useLocation();

  useEffect(() => {
    scrollToServiceHash();
    const timeoutId = window.setTimeout(scrollToServiceHash, 150);
    window.addEventListener("hashchange", scrollToServiceHash);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("hashchange", scrollToServiceHash);
    };
  }, [location]);

  return (
    <PageLayout>
      <PageBanner label="Our Services" subtitle={servicesPageIntro} />
      <ServicesPageContent />
    </PageLayout>
  );
}
