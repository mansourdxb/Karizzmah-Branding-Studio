export function useScrollTo() {
  const scrollToSection = (href: string) => {
    if (!href.startsWith("#")) return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { scrollToSection };
}
