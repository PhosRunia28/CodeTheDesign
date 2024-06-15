import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import { CardColor } from "../../constant";
type CardData = {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
  color: CardColor;
};
type CardRoundedImageProps = {
  card: CardData;
};
export default function CardRoundedImage({ card }: CardRoundedImageProps) {
  const Icon = card.icon;
  return (
    <div className="flex w-full max-w-xs flex-col justify-between rounded-lg px-8 py-8 shadow-xl">
      <div
        className={cn(`mx-auto -mt-14 w-full max-w-fit rounded-full p-4`, {
          "bg-primary": card.color === "primary",
          "bg-accent": card.color === "accent",
          "bg-secondary": card.color === "secondary",
        })}
      >
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h5 className="mx-auto w-full max-w-[15rem] pb-5 pt-7 text-2xl font-semibold text-accent">
        {card.title}
      </h5>
      <p className="text-sm leading-relaxed opacity-80 md:text-base md:leading-relaxed">
        {card.description}
      </p>
    </div>
  );
}
