import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function SectionContact() {
  return (
    <section className="font-opensSans bg-primary text-white">
      <div className="section_container flex flex-col items-center justify-center gap-6 px-5 py-16 text-center md:px-8 lg:px-0">
        <h3 className="w-full max-w-2xl text-3xl font-medium leading-snug sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
          Have a project idea and want to make it come true?
        </h3>
        <p className="w-full max-w-md text-base text-secondary sm:text-sm">
          Please contact us and we will discuss about your project, don't forget
          we are always here for you
        </p>
        <Button type="button" variant="inlineIcon" size="lg">
          Contact Us <ArrowRight />
        </Button>
      </div>
    </section>
  );
}
