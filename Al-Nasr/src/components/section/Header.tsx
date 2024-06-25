import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { headerLinks } from "@/data/HeaderLinks";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
export default function Header() {
  return (
    <header className="section_container pt-8 font-nunito">
      <nav className="flex items-center justify-between gap-6">
        <a href="/" className="inline-block w-full max-w-[7rem]">
          <img
            src="./icon/logo.svg"
            alt="logo"
            className="w-full bg-cover bg-center"
          />
        </a>
        <ul className="hidden items-center gap-8 md:flex lg:gap-12">
          {headerLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                className="font-medium transition hover:text-secondary"
              >
                {link.linkName}
              </a>
            </li>
          ))}
        </ul>
        <Button
          variant="secondary"
          className="hidden w-full max-w-fit rounded-xl font-semibold md:flex"
        >
          Contact Us
        </Button>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-8 w-8" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="h-full">
                <SheetDescription className="flex h-full flex-col justify-center gap-8">
                  <ul className="flex flex-col items-center gap-8">
                    {headerLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.path}
                          className="font-medium transition hover:text-secondary"
                        >
                          {link.linkName}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="secondary"
                    className="mx-auto flex w-full max-w-fit rounded-xl font-semibold"
                  >
                    Contact Us
                  </Button>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
