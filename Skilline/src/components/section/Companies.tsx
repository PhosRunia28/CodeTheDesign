import { companies } from "@/data";

export default function Companies() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-4 text-center">
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
        </div>
  )
}
