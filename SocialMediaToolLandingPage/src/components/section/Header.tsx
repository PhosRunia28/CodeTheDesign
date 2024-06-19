import { Button } from "@/components/ui/button";
import { navigationLinks } from "@/data";
import Brand from "../ui/Brand";
import NavMobile from "../ui/NavMobile";
export default function Header() {
  return (
    <header className="relative z-40 py-6 font-DMSans lg:py-12">
      <nav className="section_container flex items-center justify-between gap-6">
        {/* logo brand */}
        <Brand />
        {/* navigation desktop*/}
        <ul className="mx-auto hidden w-full justify-center gap-10 md:flex">
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.to}
                className="text-sm text-white opacity-60 transition hover:opacity-100"
              >
                {link.linkName}
              </a>
            </li>
          ))}
        </ul>
        {/* cta button */}
        <div className="hidden gap-4 md:flex">
          <Button variant="link" className="font-medium text-white">
            Mendaftar
          </Button>
          <Button
            variant="plain"
            className="rounded-full px-6 py-1 font-semibold hover:bg-primary"
          >
            Login
          </Button>
        </div>
        {/* navigation mobile */}
        <NavMobile />
      </nav>
    </header>
  );
}
