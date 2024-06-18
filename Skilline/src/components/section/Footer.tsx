import { navigationFooter } from "@/data";
import { Button } from "../ui/button";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-footer space-y-12 pb-5 pt-14 text-white">
      <div className="mx-auto flex w-full max-w-[15rem] items-center gap-4">
        <img
          src="./logoDark.svg"
          alt="logo dark"
          className="w-full max-w-[6rem] bg-cover bg-center"
        />
        <p className="w-full max-w-[6rem] border-l-2 border-white/40 pl-4 text-sm">
          Virtual Class for Zoom
        </p>
      </div>
      <div className="mx-auto flex w-full max-w-sm flex-col items-center justify-center gap-3 px-6">
        <h4 className="font-semibold text-gray-300">
          Subscribe to get our Newsletter
        </h4>
        <form action="" className="flex w-full flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Your Email"
            name="newsletter"
            className="bg-footer focus:border-footer focus:outline-footer w-full rounded-full border border-white/40 px-6 py-2 text-sm"
          />
          <Button
            type="submit"
            className="w-full max-w-fit rounded-full bg-[#545AE7] text-white hover:bg-white hover:text-[#545AE7]"
          >
            Subcribe
          </Button>
        </form>
      </div>
      <div className="space-y-6">
        <nav className="mx-auto w-full max-w-md">
          <ul className="flex items-center justify-center gap-8">
            {navigationFooter.map((link, index) => (
              <li
                className="border-l border-white/50 pl-5 text-gray-300 first:border-none first:pl-0"
                key={index}
              >
                <a
                  href={link.to}
                  className="text-sm transition hover:text-white"
                >
                  {link.linkName}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mx-auto w-full max-w-fit text-center">
          <p className="text-sm text-gray-300">
            © {year} Class Technologies Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
