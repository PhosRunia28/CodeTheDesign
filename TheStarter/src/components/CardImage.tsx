type CardData = {
  image: string;
  title: string;
  subTitle: string;
};
type CardImageProps = {
  card: CardData;
};

export default function CardImage({ card }: CardImageProps) {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 text-center">
      <img
        src={card.image}
        alt={card.title}
        className="cursor-pointer bg-cover bg-center"
      />
      <div className="flex flex-col gap-2">
        <h5 className="text-lg font-semibold md:text-xl">{card.title}</h5>
        <p className="text-sm opacity-80 md:text-base">{card.subTitle}</p>
      </div>
    </div>
  );
}
