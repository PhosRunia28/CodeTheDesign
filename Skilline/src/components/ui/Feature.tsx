import { cn } from "@/lib/utils";

type FeatureProps = {
  image: string;
  title: string;
  highlightText: string;
  description: string;
  imageLeft?: boolean;
};

export default function Feature({
  image,
  title,
  highlightText,
  description,
  imageLeft = true,
}: FeatureProps) {
  const parts = title.split(new RegExp(`(${highlightText})`, "gi"));
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-6 md:justify-between lg:gap-10",
        imageLeft ? "md:flex-row" : "md:flex-row-reverse",
      )}
    >
      <img
        src={image}
        alt={title}
        className="w-full max-w-md bg-cover bg-center md:max-w-sm lg:max-w-md"
      />
      <div className="flex flex-col gap-6">
        <h3 className="w-full max-w-sm text-2xl font-semibold text-accent md:text-3xl">
          {parts.map((part, index) =>
            part.toLowerCase() === highlightText.toLowerCase() ? (
              <span key={index} className="text-primary">
                {part}
              </span>
            ) : (
              part
            ),
          )}
        </h3>
        <p className="w-full max-w-sm leading-relaxed opacity-70">
          {description}
        </p>
      </div>
    </div>
  );
}
