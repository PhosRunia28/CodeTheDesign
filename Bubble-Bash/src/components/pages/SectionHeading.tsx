import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar";
import { ArrowRight } from "lucide-react";

export default function SectionHeading() {
  return (
    <section className="font-openSans bg-primary py-8 text-white ">
      <header className="section_container mb-44 mt-28 px-5 md:px-8 xl:px-5">
        <Navbar />
        <div className="flex flex-col items-center justify-center gap-7 text-center">
          <h2 className="w-full max-w-3xl text-4xl font-bold leading-tight tracking-normal md:text-5xl md:leading-tight">
            Create Amazing Digital Product For Your Business
          </h2>
          <p className="w-full max-w-2xl text-sm font-light leading-relaxed text-secondary">
            We are a professional digital agency that has been established since
            2016, we present a variety of digital services that can help you
            solve problems in your business
          </p>
          <Button type="button" variant="inlineIcon" size="lg">
            Get Started <ArrowRight />
          </Button>
        </div>
      </header>
    </section>
  );
}
