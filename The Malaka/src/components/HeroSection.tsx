import { techs } from "../data";

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:gap-8">
      {/* left side (content)*/}
      <div className="flex-1 text-center lg:text-left">
        <h4 className="mx-auto max-w-sm text-4xl leading-snug lg:mx-0">
          Sebuah framework CSS untuk developer yang memiliki phobia terhadap CSS
        </h4>
        <p className="mx-auto mb-9 mt-4 max-w-md text-sm leading-loose text-white/80 lg:mx-0">
          Buku ini akan mengajarkan kamu konsep utility-first pada CSS dan
          diakhiri dengan membangun sebuah website yang responsive dengan
          Tailwind CSS.
        </p>
        <div className="mb-20 flex items-center justify-center gap-8 lg:justify-normal">
          <div>
            <a
              role="button"
              href="#"
              className="btn rounded-full border border-primary bg-primary px-6 py-2 text-white shadow-md shadow-primary hover:border-primary hover:bg-dark"
            >
              Beli Sekarang
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-wider text-white/60">
              Sudah terjual
            </p>
            <h4 className="text-center text-lg font-bold uppercase">
              501,234+
            </h4>
          </div>
        </div>
        <div className="mb-6 flex flex-col gap-4 lg:mb-0">
          <h5 className="text-sm uppercase text-white/40">
            ---- TEKNOLOGI YANG DIGUNAKAN
          </h5>
          <div className="flex justify-center gap-6 lg:justify-normal">
            {techs.map((tech, index) => (
              <img
                key={index}
                src={tech}
                alt={`Tech ${index}`}
                className="h-6 w-6 bg-cover bg-center"
              />
            ))}
          </div>
        </div>
      </div>
      {/* right side (image) */}
      <div className="mx-auto max-w-md lg:mx-0 lg:max-w-full lg:flex-1">
        <img
          src="./hero-img.png"
          alt="hero image"
          className="max-w-[110%] bg-cover bg-center"
        />
      </div>
    </div>
  );
}
