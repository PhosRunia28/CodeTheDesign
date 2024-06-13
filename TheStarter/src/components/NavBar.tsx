import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "../data";

type NavBarProps = {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function NavBar({ openNav, setOpenNav }: NavBarProps) {
  return (
    <nav className="flex items-center justify-between gap-5">
      <h4 className="text-2xl uppercase tracking-wide">Nauval</h4>
      <ul className="hidden gap-8 sm:flex">
        {navigationLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.to}
              className="opacity-80 transition hover:opacity-100"
            >
              {link.linkName}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="hidden rounded-full border border-lightYellow px-6 py-2 text-lightYellow transition hover:border-white hover:bg-white hover:text-black sm:inline-block"
      >
        Kontak
      </a>
      {/* mobile navigation */}
      <button
        type="button"
        className="relative z-40 sm:hidden"
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
      </button>
      <AnimatePresence>
        {openNav && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="absolute inset-x-0 top-0 z-30 flex flex-col justify-center gap-8 bg-black px-6 py-20 text-white"
          >
            <ul className="flex flex-col gap-8 text-center">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.to}
                    className="opacity-80 transition hover:opacity-100"
                  >
                    {link.linkName}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mx-auto inline-block w-full max-w-fit rounded-full border border-lightYellow px-6 py-2 text-lightYellow transition hover:border-white hover:bg-white hover:text-black"
            >
              Kontak
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
