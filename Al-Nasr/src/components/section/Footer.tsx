import {
  officePlace,
  packageHaji,
  packageUmrah,
  quickLink,
} from "@/data/FooterLinks";
import FooterIcon from "../ui/FooterIcon";
import FooterLink from "../ui/FooterLink";

export default function Footer() {
  return (
    <footer className="grid bg-primary pb-8 pt-14 font-nunito text-white">
      <div className="section_container grid grid-cols-1 gap-6 border-b border-white pb-6 sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between">
        <div className="flex w-full max-w-[18rem] flex-col gap-6 sm:col-span-2">
          <img
            src="./icon/footer_logo.svg"
            alt="footer logo"
            className="rounded-xl bg-cover bg-center"
          />
          <p className="text-sm font-semibold leading-relaxed">
            Comfortable and Quiet Worship, Our Service No. 1 in Indonesia
          </p>
        </div>
        <FooterLink links={quickLink} />
        <FooterLink links={packageUmrah} />
        <FooterLink links={packageHaji} />
        <FooterLink links={officePlace} />
      </div>
      <div className="section_container flex flex-col items-center justify-between gap-6 pt-6 md:flex-row">
        <p className="text-center text-sm">
          Copyright © 2006 - {new Date().getFullYear()} Al Nasr Travel | All
          Reserverd
        </p>
        <div className="flex gap-3">
          <FooterIcon path="#" icon="instagram" />
          <FooterIcon path="#" icon="facebook" />
          <FooterIcon path="#" icon="twitter" />
          <FooterIcon path="#" icon="youtube" />
        </div>
      </div>
    </footer>
  );
}
