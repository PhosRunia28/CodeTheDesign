type TestimonialData = {
  image: string;
  rating: number;
  packageName: string;
  name: string;
  testimonial: string;
};

type props = {
  testimonial: TestimonialData;
};
export default function TestimonialCard({ testimonial }: props) {
  return (
    <div className="mr-10 flex w-full max-w-lg gap-7 px-8 py-5 shadow-md0">
      <div className="flex flex-1 flex-col gap-5">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="mx-auto h-28 w-32 rounded-xl bg-cover bg-center"
        />
        <div className="mx-auto flex w-full max-w-fit items-center gap-2 rounded-full bg-lightPrimary px-5 py-1.5">
          <img
            src="./icon/star.svg"
            alt="star"
            className="w-5 bg-cover bg-center"
          />
          <p className="text-sm font-semibold">{testimonial.rating}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex w-full max-w-fit items-center gap-2 rounded-full bg-lightPrimary px-7 py-2">
          <p className="text-sm font-semibold">{testimonial.packageName}</p>
        </div>
        <div className="space-y-1">
          <h4 className="font-kufam text-[1.6rem] font-semibold leading-normal text-destructive">
            {testimonial.name}
          </h4>
          <p className="w-full max-w-xs text-sm font-medium leading-relaxed">
            {testimonial.testimonial}
          </p>
        </div>
      </div>
    </div>
  );
}
