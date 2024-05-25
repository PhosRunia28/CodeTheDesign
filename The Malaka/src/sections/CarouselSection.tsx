import CarouselItem from "../components/CarouselItem";

export default function CarouselSection() {
  return (
    <section className="container_section space-y-14 rounded-box bg-lightBlue px-6 pb-24 pt-24 font-dm_sans lg:px-0">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-5 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex  flex-col gap-2">
          <p className="text-xs font-bold uppercase tracking-wide text-primary">
            -- Testimonial
          </p>
          <h3 className="mx-auto w-full max-w-sm text-3xl font-medium md:mx-0">
            Apa kata orang-orang yang membaca buku ini?
          </h3>
        </div>
        <div className="">
          <p className="mx-auto max-w-md text-[0.9rem] leading-[1.8] text-black/80 md:mx-0">
            Kalo seandainya kamu belum percaya dengan buku ini maka tidak
            apa-apa, karena yang patut kamu percayai adalah Tuhan. Tapi, mungkin
            beberapa ulasan ini bisa membangkitkan hasratmu untuk membeli buku
            ini.
          </p>
        </div>
      </div>
      {/* carousel */}
      <div className="relative">
        <div className="carousel w-full space-x-4 rounded-box bg-neutral p-4">
          <div className="carousel-item">
            <CarouselItem />
          </div>
          <div className="carousel-item">
            <CarouselItem />
          </div>
          <div className="carousel-item">
            <CarouselItem />
          </div>
          <div className="carousel-item">
            <CarouselItem />
          </div>
        </div>
        <div className="absolute -bottom-12 left-8 right-8 flex transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </section>
  );
}
