import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="section_container pb-24 pt-14 font-nunito">
      <div className="flex flex-col gap-12 sm:flex-row-reverse sm:justify-between sm:gap-8">
        <div className="mx-auto w-full max-w-2xl flex-1">
          <img
            src="./image/hero_image.png"
            alt="hero image"
            className="w-full bg-cover bg-center lg:mx-auto lg:max-w-[80%]"
          />
        </div>
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          <div className="space-y-4">
            {/* badge */}
            <div className="w-full max-w-fit rounded-full bg-lightPrimary px-10 py-2 text-sm font-medium text-primary">
              No 1 Indonesia
            </div>
            <h2
              style={{ lineHeight: 1.4 }}
              className="w-full max-w-md font-kufam text-2xl font-bold text-destructive md:text-3xl lg:text-[2.60rem]"
            >
              Make it easy for your Umrah worship with Al Nasr Travel
            </h2>
          </div>
          <p className="w-full max-w-md font-semibold leading-relaxed text-destructive">
            Facilitate your Umrah pilgrimage with us, we already have hundreds
            of thousands of customers, you can go for Umrah to Mecca and Medina
          </p>
          <Button
            variant="secondary"
            className="w-full max-w-fit rounded-xl font-semibold lg:px-10 lg:py-7"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
