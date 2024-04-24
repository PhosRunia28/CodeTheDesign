import FooterLink from "@/components/ui/FooterLink";
import logo from "@/img/logo.svg";
import { aboutCompany, explores, pages } from "@/route";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Icon from "../ui/Icon";
export default function Footer() {
  return (
    <footer className="section_container flex flex-col justify-between gap-10 px-5 py-16 font-openSans sm:flex-row md:px-8 lg:px-0">
      <div className="flex w-full flex-col gap-6">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt={logo}
            className="max-w-[2.5rem] bg-cover bg-center"
          />
          <h5 className="font-medium">Bubble Bash</h5>
        </div>
        <p className="w-full max-w-sm text-sm leading-relaxed">
          Introducing, We are Bubble Bash digital agency company with more than
          6 years of experience. We are committed to serve with all our heart
        </p>
        <div className="flex w-full max-w-xs gap-5">
          <Icon
            icon={
              <Facebook className="w-5 text-white group-hover:text-black" />
            }
          />
          <Icon
            icon={<Twitter className="w-5 text-white group-hover:text-black" />}
          />
          <Icon
            icon={
              <Instagram className="w-5 text-white group-hover:text-black" />
            }
          />
          <Icon
            icon={
              <Linkedin className="w-5 text-white group-hover:text-black" />
            }
          />
        </div>
      </div>
      <div className="flex w-full flex-col justify-between gap-8 sm:flex-row">
        <FooterLink title="Pages" routes={pages} />
        <FooterLink title="Explore" routes={explores} />
        <FooterLink title="Company" routes={aboutCompany} />
      </div>
    </footer>
  );
}
