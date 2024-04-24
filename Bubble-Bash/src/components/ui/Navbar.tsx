import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/img/logo.svg";
import { pages } from "@/route";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-20 bg-primary px-4 py-5 md:px-8 xl:px-4">
      <section className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4">
        <div className="flex cursor-pointer items-center gap-2">
          <img src={logo} alt="logo" className="w-full max-w-[2.5rem]" />
          <h3 className="text-sm font-medium -tracking-wide text-white">
            Bubble Bash
          </h3>
        </div>
        <div className="block sm:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-9 w-9" />
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>Pages</SheetTitle>
              </SheetHeader>
              <div className="mt-5 flex flex-col justify-center gap-5">
                {pages.map((page) => {
                  return (
                    <a
                      href={page.link}
                      className="text-center font-light tracking-wide hover:text-secondary focus:outline-black"
                      key={page.name}
                    >
                      {page.name}
                    </a>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden gap-8 sm:flex">
          {pages.map((page) => {
            return (
              <a
                href={page.link}
                className="text-sm font-light tracking-widest hover:text-secondary focus:outline-black"
                key={page.name}
              >
                {page.name}
              </a>
            );
          })}
        </div>
      </section>
    </nav>
  );
}
