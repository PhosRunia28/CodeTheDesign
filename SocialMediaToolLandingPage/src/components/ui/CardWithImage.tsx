type CardData = {
  image: string;
  title: string;
  desc: string;
};
type CardWithImageProps = {
  card: CardData;
};
export default function CardWithImage({ card }: CardWithImageProps) {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 xl:max-w-[22rem]">
      <a
        href="#"
        className="flex w-full items-center justify-center rounded-2xl bg-secondary/5 py-12"
      >
        <img src={card.image} alt={card.title} className="bg-cover bg-center" />
      </a>
      <a href="#" className="">
        <h4 className="text-xl font-semibold">{card.title}</h4>
      </a>
      <p className="text-sm leading-[1.8] text-secondary opacity-60">
        {card.desc}
      </p>
    </div>
  );
}
