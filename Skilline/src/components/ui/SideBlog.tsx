type SideBlogProps = {
  image: string;
  title: string;
  desc: string;
  tag: string;
};
export default function SideBlog({ image, title, desc, tag }: SideBlogProps) {
  return (
    <div className="flex w-full max-w-fit flex-col gap-6 lg:max-w-none lg:flex-row">
      {/* image */}
      <div className="relative w-full max-w-fit lg:max-w-[11rem]">
        <img
          src={image}
          alt={title}
          className="mx-auto w-full max-w-sm bg-cover bg-center lg:mx-0 lg:max-w-none"
        />
        {/* badge */}
        <div className="bg-blog absolute bottom-4 right-2 w-full max-w-fit rounded-full px-2 py-1 text-xs font-medium uppercase">
          {tag}
        </div>
      </div>
      {/* content */}
      <div className="flex w-full max-w-xs flex-col gap-4 lg:max-w-none">
        <a href="#" className="">
          <h4 className="font-semibold">{title}</h4>
        </a>
        <p className="w-full max-w-xs leading-relaxed opacity-80">{desc}</p>
      </div>
    </div>
  );
}
