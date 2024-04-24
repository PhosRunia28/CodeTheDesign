import heroImg from "@/img/hero-image.jpg";
export default function SectionHero() {
  return (
    <section className="section_container pb-14 pt-8 font-openSans">
      <div className="-mt-44 w-full">
        <img
          src={heroImg}
          alt="hero img"
          className="mx-auto w-full bg-cover bg-center"
        />
        <div className="grid grid-cols-2 items-center justify-between md:grid-cols-4">
          <div className="flex flex-col gap-1 py-8 text-center">
            <h3 className="text-2xl font-medium">1.2K+</h3>
            <h4 className="text-sm text-black/60">Happy Client</h4>
          </div>
          <div className="flex flex-col gap-1 py-8 text-center">
            <h3 className="text-2xl font-medium">1.1K+</h3>
            <h4 className="text-sm text-black/60">WorldWide Clients</h4>
          </div>
          <div className="flex flex-col gap-1 py-8 text-center">
            <h3 className="text-2xl font-medium">6+</h3>
            <h4 className="text-sm text-black/60">Years of Experience</h4>
          </div>
          <div className="flex flex-col gap-1 py-8 text-center">
            <h3 className="text-2xl font-medium">12+</h3>
            <h4 className="text-sm text-black/60">Award Winning</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
