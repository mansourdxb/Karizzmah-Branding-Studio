import pageBannerBg from "@assets/images/about-banner.png";

interface PageBannerProps {
  label?: string;
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  overlayClassName?: string;
}

export function PageBanner({
  label,
  title,
  subtitle,
  backgroundImage = pageBannerBg,
  backgroundPosition = "center bottom",
  overlayClassName = "bg-black/60",
}: PageBannerProps) {
  return (
    <section className="relative py-12 sm:py-16 lg:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition,
        }}
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {label && <p className="type-label text-base sm:text-lg mb-4">{label}</p>}
        {title && <h1 className="type-title text-white">{title}</h1>}
        {subtitle && (
          <p
            className={`type-description text-sm sm:text-base text-white/80 max-w-3xl mx-auto ${
              title ? "mt-5" : "mt-2"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
