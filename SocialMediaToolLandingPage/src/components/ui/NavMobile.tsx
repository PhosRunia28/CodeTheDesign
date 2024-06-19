import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationLinks } from "@/data";
import { Menu } from "lucide-react";
import { Button } from "./button";
export default function NavMobile() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="h-8 w-8 text-white" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="flex h-full items-center justify-center">
            <SheetDescription className="space-y-12">
              <ul className="mx-auto flex w-full flex-col items-center justify-center gap-10">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.to}
                      className="text-center text-lg text-white transition hover:text-primary"
                    >
                      {link.linkName}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center gap-6">
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
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
