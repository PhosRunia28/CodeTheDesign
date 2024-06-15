import { Play } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="section_container relative z-40 font-poppins">
      <div className="flex flex-col-reverse gap-10 md:flex-row lg:pt-16">
        {/* content */}
        <div className="mx-auto flex w-full max-w-md flex-col gap-7 md:mx-0 md:pb-10 md:pt-14 lg:pb-0">
          <h3 className="w-full max-w-sm text-3xl font-bold text-accent md:text-[2rem] md:leading-snug lg:max-w-md lg:text-4xl lg:leading-snug">
            <span className="text-primary">Studying</span> Online is now much
            easier
          </h3>
          <p className="w-full max-w-sm text-sm leading-relaxed opacity-80">
            Skilline is an interesting platform that will teach you in more an
            interactive way
          </p>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <Button className="w-full max-w-fit rounded-full px-8 text-white">
              Join For Free
            </Button>
            {/* play button */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="w-full max-w-[3rem] rounded-full border border-white bg-white p-3 transition hover:border-primary"
              >
                <Play className="text-secondary" />
              </button>
              <p className="text-sm">Watch how it works</p>
            </div>
          </div>
        </div>
        <div className="mx-auto -mt-12 w-full max-w-sm sm:-mt-16 md:-mt-12 md:max-w-lg lg:-mt-28 lg:max-w-xl">
          <img
            src="/heroPic.png"
            alt="Hero Picture"
            className="bg-cover bg-center"
          />
        </div>
      </div>
    </section>
  );
}
