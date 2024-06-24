import { ArrowRight } from "lucide-react";
type AlternativeItemProps = {
  image: string;
  title: string;
  link: string;
};
export default function AlternativeItem({
  image,
  title,
  link,
}: AlternativeItemProps) {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <img src={image} alt={title} className="bg-cover bg-center" />
      <p className="leading-relaxed">{title}</p>
      <a
        href={link}
        className="mt-auto flex w-full max-w-fit items-center gap-2 border-b border-white text-sm font-semibold transition hover:border-black"
      >
        Learn More <ArrowRight />
      </a>
    </div>
  );
}
