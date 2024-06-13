type CardData = {
    icon: string;
    title:string;
    level:string;
}
type CardItemProps = {
    card: CardData
}
export default function CardItem({card}:CardItemProps) {
  return (
    <div className="flex w-full max-w-[18rem] gap-6 bg-white px-5 py-5 shadow-2xl">
        <img
        src={card.icon}
        alt={card.title}
        className="w-full max-w-[3rem] rounded-full bg-cover bg-center"
        />
        <div className="flex flex-col gap-1">
        <h5 className="font-semibold">{card.title}</h5>
        <p className="text-sm opacity-80">{card.level}</p>
        </div>
    </div>
  )
}
