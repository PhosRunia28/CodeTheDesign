type CardData = {
  title: string;
  description: string;
  img: string;
};

type CardProps = {
  index: number;
  card: CardData;
};

export default function Card({ card, index }: CardProps) {
  return (
    <div
      className="card w-full max-w-xs bg-base-100 shadow-xl"
      key={card.title}
    >
      <figure className="">
        <img src={card.img} alt={`card ${index}`} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{card.title}</h2>
        <p className="text-sm leading-relaxed text-black/80">
          {card.description}
        </p>
      </div>
    </div>
  );
}
