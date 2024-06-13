export default function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 pt-32 text-center text-white">
      <div className="flex flex-col gap-6 md:gap-10">
        <h3 className="font-IBMPlexMono text-xl md:text-2xl md:leading-normal">
          Saya seorang front-end engineer, back-end engineer, dan juga UI
          designer
        </h3>
        <p className="mx-auto w-full max-w-sm opacity-80">
          Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
          design.
        </p>
        <a
          href="#"
          className="mx-auto inline-block w-full max-w-fit rounded-full border border-lightYellow bg-lightYellow px-10 py-2 font-semibold text-black transition hover:border-white hover:bg-white hover:text-black"
        >
          Pelajari
        </a>
      </div>
    </section>
  );
}
