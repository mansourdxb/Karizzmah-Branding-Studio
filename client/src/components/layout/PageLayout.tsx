import { useEffect, type ReactNode } from "react";
import { useLocation } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

interface PageLayoutProps {
  children: ReactNode;
}

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden supports-[padding:max(0px)]:pb-[env(safe-area-inset-bottom)]">
      <ScrollToTop />
      <Navigation />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
