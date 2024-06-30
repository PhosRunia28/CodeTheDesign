import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
type TestimonialData = {
  image: string;
  rating: number;
  packageName: string;
  name: string;
  testimonial: string;
};
type MarqueeItemProps = {
  testimonials: TestimonialData[];
  position?: "left" | "right";
};
export default function MarqueeCard({
  testimonials,
  position = "left",
}: MarqueeItemProps) {
  return (
    <div className="flex h-full w-full items-center overflow-hidden">
      <motion.div
        initial={{ x: position === "left" ? 0 : "-100%" }}
        animate={{ x: position === "left" ? "-100%" : 0 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard testimonial={testimonial} key={index} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: position === "left" ? 0 : "-100%" }}
        animate={{ x: position === "left" ? "-100%" : 0 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard testimonial={testimonial} key={index} />
        ))}
      </motion.div>
    </div>
  );
}
