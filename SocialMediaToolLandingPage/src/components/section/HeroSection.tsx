import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="section_container relative z-40">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-10 pb-16 pt-16 text-center font-sourceCodePro text-white">
        <div className="space-y-3">
          <h5 className="text-sm font-semibold uppercase tracking-wide text-primary">
            MANA SAYA TAU SAYA KAN PENCURRY
          </h5>
          <h2 className="mx-auto w-full max-w-[34rem] text-3xl leading-snug sm:text-4xl sm:leading-snug lg:max-w-3xl lg:text-5xl lg:leading-tight">
            Social Media Tool Yang Tidak Akan Memberikan Kamu Insight Apapun
          </h2>
        </div>
        <p className="mx-auto w-full max-w-lg text-sm leading-[1.8] lg:leading-loose">
          Adalah benar apa yang kamu baca barusan. Tool yang mainstream akan
          memberikan kamu pelbagai insight, karena kami anti-mainstream maka
          kami akan melakukan sebaliknya.
        </p>
        <div className="flex flex-col items-center justify-center gap-7 font-DMSans sm:flex-row sm:gap-5">
          <Button className="rounded-full px-10 py-7 shadow-lg shadow-primary">
            Memulai Sekarang
          </Button>
          <Button variant="link" className="text-white">
            Pelajarin Dulu
          </Button>
        </div>
      </div>
      <div className="hidden w-full pb-24 pt-16 sm:inline-block">
        <img
          src="./image/heroImage.png"
          alt="hero image"
          className="w-full bg-cover bg-center"
        />
      </div>
    </section>
  );
}
