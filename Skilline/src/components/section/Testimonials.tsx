import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { testimonials } from "@/data";
import "swiper/css";
import TestimonialItem from "../ui/TestimonialItem";
export default function Testimonials() {
  return (
    <section className="section_container pb-24 pt-6">
      <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between lg:gap-16">
        {/* content */}
        <div className="flex flex-col gap-6 lg:gap-7">
          <div className="space-y-4">
            <div className="flex items-center gap-3 opacity-80">
              <div className="h-[1px] w-14 bg-accent"></div>
              <h4 className="text-sm uppercase tracking-widest text-accent">
                TESTIMONIAL
              </h4>
            </div>
            <h3 className="w-full max-w-md text-3xl font-semibold text-accent md:text-4xl">
              What They Say?
            </h3>
          </div>
          <p className="w-full max-w-sm opacity-80">
            Skilline has got more than 100k positive ratings from our users
            around the world.
          </p>
          <p className="w-full max-w-sm opacity-80">
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>
          <p className="w-full max-w-sm opacity-80">
            Are you too? Please give your assessment
          </p>
          <div className="group relative w-full max-w-fit">
            <Button
              className="max-w-fit rounded-full border-primary py-6 pl-8 pr-16 text-primary group-hover:bg-primary group-hover:text-white"
              variant="outline"
            >
              Write your assessment
            </Button>
            <div className="absolute right-0 top-0 cursor-pointer rounded-full border border-primary p-3 transition group-hover:bg-primary">
              <MoveRight className="h-6 w-6 text-primary transition group-hover:text-white" />
            </div>
          </div>
        </div>
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          className="w-full max-w-md sm:p-8 md:max-w-sm lg:max-w-md"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialItem item={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
