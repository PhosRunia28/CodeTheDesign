import { Alternatives, Company, GetInTouch, Sitemap } from "@/data";
import FooterLink from "../ui/FooterLink";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="section_container pb-8 pt-20">
      <div className="grid grid-cols-1 gap-12 border-b pb-6 font-sourceCodePro sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:justify-items-center lg:grid-cols-4 lg:justify-items-start">
        <FooterLink link={Alternatives} />
        <FooterLink link={Sitemap} />
        <FooterLink link={Company} />
        <FooterLink link={GetInTouch} />
      </div>
      <div className="mx-auto mt-4 w-full max-w-xl pt-5">
        <p className="text-center text-sm font-semibold uppercase text-secondary/60">
          COPYRIGHT © {currentYear} — DESIGN{" "}
          <span className="text-primary">NAUVAL</span>
        </p>
      </div>
    </footer>
  );
}
