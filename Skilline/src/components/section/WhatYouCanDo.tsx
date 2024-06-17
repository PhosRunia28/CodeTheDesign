export default function WhatYouCanDo() {
  return (
    <section className="section_container pb-16 pt-14">
      <div className="flex flex-col-reverse justify-between gap-8 md:flex-row">
        <div className="relative flex flex-1 flex-col gap-8">
          <h4 className="w-full max-w-md text-2xl font-semibold text-accent lg:text-3xl lg:leading-snug">
            EveryThing you can do in a physical classroom,
            <span className="text-primary">you can do with skilline</span>
          </h4>
          <div className="relative inline-block w-full max-w-md text-sm leading-relaxed opacity-80 md:text-base md:leading-[1.8]">
            <p>
              Skilline's school management software helps traditional <br /> and
              online schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            {/* bubble */}
            <div className="absolute right-4 top-0 -z-10 rounded-full bg-primary/70 p-3 sm:top-2 lg:top-0"></div>
          </div>
          <a
            href="#"
            className="w-full max-w-fit border-b border-black text-sm transition hover:border-white md:text-base"
          >
            Learn more
          </a>
          {/* bubble */}
          <div className="absolute -left-3 -top-1 -z-10 rounded-full bg-primary/70 p-5 lg:p-6"></div>
        </div>
        <div className="relative mx-auto w-full max-w-xl flex-1 rounded-xl md:mx-0">
          <img
            src="/classroom.png"
            alt="classroom image"
            className="h-full w-full bg-cover bg-center"
          />
          {/* box background image */}
          <div className="absolute -left-4 -top-4 -z-10 h-20 w-20 rounded-2xl bg-secondary/70 sm:h-28 sm:w-28 lg:-left-6 lg:-top-6 lg:h-32 lg:w-32"></div>
          <div className="absolute -bottom-4 -right-4 -z-10 h-20 w-20 rounded-2xl bg-primary/70 sm:h-28 sm:w-28 lg:-bottom-6 lg:-right-6 lg:h-40 lg:w-40"></div>
        </div>
      </div>
    </section>
  );
}
