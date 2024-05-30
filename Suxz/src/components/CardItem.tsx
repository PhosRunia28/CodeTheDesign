import Btn from "./Btn";
type CardItemProps = {
  image: string;
  title: string;
  description: string;
};
export default function CardItem({ image, title, description }: CardItemProps) {
  return (
    <div className="flex w-full max-w-[14rem] flex-col gap-4 rounded-xl bg-white px-6 py-4">
      <img
        src={image}
        alt="starter"
        className="w-full max-w-[5rem] rounded-lg bg-cover bg-center"
      />
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="w-full max-w-[12rem] text-sm leading-relaxed">
        {description}
      </p>
      <Btn to="#" className="text-center text-sm">
        See Class
      </Btn>
    </div>
  );
}
