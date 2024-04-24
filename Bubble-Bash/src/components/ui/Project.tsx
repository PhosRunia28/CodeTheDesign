type ProjectProps = {
  title: string;
  description: string;
  image: string;
};

export default function Project({ title, description, image }: ProjectProps) {
  return (
    <div className="flex cursor-pointer flex-col gap-3">
      <img src={image} alt={title} className=" bg-cover bg-center" />
      <h5 className="text-xl font-semibold">{title}</h5>
      <p className="w-full text-sm leading-relaxed text-black/60 sm:max-w-xs">
        {description}
      </p>
    </div>
  );
}
