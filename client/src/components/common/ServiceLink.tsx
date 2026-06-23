import { Link, useLocation } from "wouter";
import { getServiceHref } from "@/data/services";

function scrollToService(serviceId: string) {
  requestAnimationFrame(() => {
    document.getElementById(serviceId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

interface ServiceLinkProps {
  serviceId: string;
  className?: string;
  children: React.ReactNode;
}

export function ServiceLink({ serviceId, className, children }: ServiceLinkProps) {
  const [location] = useLocation();
  const href = getServiceHref(serviceId);

  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        if (location.startsWith("/services")) {
          window.setTimeout(() => scrollToService(serviceId), 0);
        }
      }}
    >
      {children}
    </Link>
  );
}
