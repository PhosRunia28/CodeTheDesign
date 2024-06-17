import { companies } from "@/data";

export default function Companies() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-4 pb-24 pt-14 text-center">
      <p className="">Trusted by 5000+ Companies Worldwide</p>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {companies.map((company) => (
          <div className="w-full max-w-[7rem]" key={company.alt}>
            <img
              src={company.image}
              alt={company.alt}
              className="h-16 w-full bg-cover bg-center"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
