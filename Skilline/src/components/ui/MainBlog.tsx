type MainBlogProps = {
  image: string;
  title: string;
  desc: string;
  tag: string;
};
export default function MainBlog({ image, tag, desc, title }: MainBlogProps) {
  return (
    <div className="flex w-full max-w-md flex-col gap-5">
      <img
        src={image}
        alt={title}
        className="w-full bg-cover bg-center md:max-w-md"
      />
      {/* badge */}
      <div className="bg-blog w-full max-w-fit rounded-full px-7 py-1 text-sm font-medium uppercase">
        {tag}
      </div>
      <a href="#" className="">
        <h4 className="w-full max-w-lg text-xl font-semibold">{title}</h4>
      </a>
      <p className="w-full max-w-md leading-relaxed opacity-80">{desc}</p>
      <a
        href="#"
        className="w-full max-w-fit text-sm underline opacity-80 hover:no-underline"
      >
        Read More
      </a>
    </div>
  );
}
