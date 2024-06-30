import { motion } from "framer-motion";
type MarqueeItemProps = {
  images: string[];
  position?: "left" | "right";
};
export default function MarqueeItem({
  images,
  position = "left",
}: MarqueeItemProps) {
  return (
    <div className="flex h-full w-full items-center overflow-hidden">
      <motion.div
        initial={{ x: position === "left" ? 0 : "-100%" }}
        animate={{ x: position === "left" ? "-100%" : 0 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <img
            src={image}
            key={`airway_${index}`}
            alt={`airway_${index}`}
            className="h-40 w-56 pr-20"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: position === "left" ? 0 : "-100%" }}
        animate={{ x: position === "left" ? "-100%" : 0 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <img
            src={image}
            key={`airway_${index}`}
            alt={`airway_${index}`}
            className="h-40 w-56 pr-20"
          />
        ))}
      </motion.div>
    </div>
  );
}
