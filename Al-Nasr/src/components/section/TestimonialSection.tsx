import { Testimonials } from "@/data/Testimonials";
import MarqueeCard from "../ui/MarqueeCard";

export default function TestimonialSection() {
  return (
    <section className="section_container py-20 font-nunito">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-end gap-4">
          <h3
            className="w-full max-w-md text-right font-kufam text-3xl font-bold text-destructive sm:max-w-lg sm:text-4xl lg:text-[2.6rem]"
            style={{ lineHeight: 1.3 }}
          >
            Testimonials from our customers
          </h3>
          <p className="w-full max-w-md text-right font-semibold leading-relaxed text-destructive-foreground md:max-w-lg md:text-lg">
            We have 100.000+ customers, here are our customer testimonials
          </p>
        </div>
        <div className="flex flex-col">
          <MarqueeCard testimonials={Testimonials.slice(0, 3)} />
          <MarqueeCard testimonials={Testimonials.slice(3)} position="right" />
        </div>
      </div>
    </section>
  );
}
