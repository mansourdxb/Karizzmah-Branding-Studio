import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/data/site";
import storeLogo from "@assets/images/about-image.png";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      <a
        href={siteConfig.storeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Karizzmah Store"
        className="group flex items-center gap-2.5"
      >
        <span className="hidden sm:block opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-xs font-semibold uppercase tracking-wider text-[#131313] bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-lg pointer-events-none">
          Store
        </span>
        <span className="flex items-center justify-center w-16 h-16 sm:w-[4.75rem] sm:h-[4.75rem] rounded-full bg-[#131313] border-2 border-white shadow-[0_4px_20px_rgba(0,0,0,0.28)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.35)] hover:scale-105 transition-all duration-300 overflow-hidden">
          <img
            src={storeLogo}
            alt=""
            className="w-[135%] max-w-none object-cover object-[center_10%] -mt-0.5"
          />
        </span>
      </a>

      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group flex items-center gap-2.5"
      >
        <span className="hidden sm:block opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] px-3 py-1.5 rounded-full shadow-lg pointer-events-none">
          WhatsApp
        </span>
        <span className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] group-hover:brightness-110 group-hover:scale-105 transition-all duration-300">
          <FaWhatsapp className="w-8 h-8 sm:w-9 sm:h-9" />
        </span>
      </a>
    </div>
  );
}
