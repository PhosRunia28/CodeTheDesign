type ServiceProps = {
  title: string;
  description: string;
  img: string;
};
export default function Service({ title, description, img }: ServiceProps) {
  return (
    <div className="flex h-full w-full flex-col gap-2 bg-white p-5 text-center shadow-md md:max-w-xs">
      <img
        src={img}
        alt={title}
        className="mx-auto max-w-[3rem] bg-cover bg-center    "
      />
      <h4 className="text-xl font-medium">{title}</h4>
      <p className="mx-auto w-full max-w-xs text-sm leading-snug text-black/60 md:max-w-[13rem]">
        {description}
      </p>
    </div>
  );
}
