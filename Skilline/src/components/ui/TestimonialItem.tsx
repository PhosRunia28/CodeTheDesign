type itemData = {
  image: string;
  title: string;
  author: string;
  star: number;
  reviewer: number;
};
type TestimonialItemProps = {
  item: itemData;
};
export default function TestimonialItem({ item }: TestimonialItemProps) {
  return (
    <div className="relative w-full max-w-md cursor-grab md:max-w-sm lg:max-w-md">
      <img
        src={item.image}
        alt={item.author}
        className="w-full bg-cover bg-center"
      />
      {/* testimonial */}
      <div className="absolute bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 rounded-lg bg-white shadow-xl">
        <div className="relative flex flex-col gap-6 px-6 py-4">
          <div className="absolute left-0 top-0 h-full w-[7px] rounded-l-lg bg-red-500/80"></div>
          <p className="w-full max-w-md border-l-2 pl-4 leading-relaxed opacity-80">
            {item.title}
          </p>
          <div className="flex items-center justify-between">
            <h5 className="font-semibold">{item.author}</h5>
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2">
                {Array.from({ length: item.star }, (_, index) => (
                  <img
                    src="./icon/star.svg"
                    alt="star"
                    className="w-full max-w-[18px] bg-cover bg-center"
                    key={index}
                  />
                ))}
              </div>
              <p className="text-sm opacity-80">
                {item.reviewer} reviews at Yelp
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
