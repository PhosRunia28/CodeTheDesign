import { navigationLinks } from "@/data";
import { Menu } from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

export default function NavBar() {
  return (
    <div className="section_container relative z-40 py-8 font-poppins">
      <nav className="flex items-center justify-between gap-10">
        <a href="#">
          <img
            src="./logo.svg"
            alt="logo"
            className="w-full max-w-[5rem] bg-cover bg-center"
          />
        </a>
        <ul className="ml-auto hidden gap-10 text-sm md:flex">
          {navigationLinks.map((link, index) => (
            <li className="" key={index}>
              <a
                href={link.to}
                className="font-medium opacity-70 transition hover:opacity-100"
              >
                {link.linkName}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden gap-5 md:flex">
          <Button variant="plain" className="rounded-full px-8 shadow-lg">
            Login
          </Button>
          <Button className="rounded-full px-8 text-white shadow-lg">
            Sign Up
          </Button>
        </div>
        {/* mobile navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-8 w-8" />
            </SheetTrigger>
            <SheetContent className="flex items-center justify-center border-0 bg-primary-foreground text-white md:hidden">
              <SheetHeader>
                <ul className="mb-4 flex flex-col gap-6 text-center text-sm">
                  {navigationLinks.map((link, index) => (
                    <li className="" key={index}>
                      <a
                        href={link.to}
                        className="font-medium opacity-70 transition hover:opacity-100"
                      >
                        {link.linkName}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-4">
                  <Button
                    variant="plain"
                    className="rounded-full px-8 shadow-lg"
                  >
                    Login
                  </Button>
                  <Button className="rounded-full px-8 text-white shadow-lg">
                    Sign Up
                  </Button>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
