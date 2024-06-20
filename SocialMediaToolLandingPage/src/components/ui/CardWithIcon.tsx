type CardData = {
  icon: React.ElementType;
  title: string;
  desc: string;
};

type CardWithIconProps = {
  card: CardData;
};
export default function CardWithIcon({ card }: CardWithIconProps) {
  const Icon = card.icon;
  return (
    <div className="group flex w-full max-w-[21rem] flex-col gap-5 rounded-xl px-6 py-8 font-sourceCodePro transition hover:bg-secondary">
      <div className="flex items-center gap-4">
        <div className="bg-lightPrimary rounded-md p-2 group-hover:bg-white/5">
          {Icon && <Icon className="text-primary group-hover:text-white" />}
        </div>
        <h5 className="text-lg font-semibold group-hover:text-white">
          {card.title}
        </h5>
      </div>
      <p className="text-sm leading-relaxed text-secondary opacity-60 group-hover:text-white">
        {card.desc}
      </p>
    </div>
  );
}
