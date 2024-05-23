export default function ManfaatBook() {
  return (
    <div className="flex flex-col-reverse justify-between md:flex-row md:items-center md:gap-8 lg:items-start">
      {/* left side */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-wide text-primary">
            -- Manfaat Buku
          </p>
          <h3 className="mx-auto w-full max-w-md text-2xl font-medium md:mx-0">
            Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini
          </h3>
          <p className="mx-auto w-full max-w-md text-sm leading-relaxed text-black/70 md:mx-0">
            "Buku itu seperti cermin: kalau yang berkaca padanya adalah seorang
            yang bodoh, engkau tak bisa berharap yang terpantul adalah seorang
            yang jenius." - J.K Rowling
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {/* item1 */}
          <div className="flex items-center justify-center gap-5 md:justify-normal">
            <img src="./check.svg" alt="check" className="bg-cover bg-center" />
            <p className="w-full max-w-md text-sm leading-relaxed text-black/70">
              Buku ini cocok untuk seorang yang ingin memperdalam front-end
              development agar tidak hanya sekadar Bootstrap
            </p>
          </div>
          {/* item2 */}
          <div className="flex items-center justify-center gap-5 md:justify-normal">
            <img src="./check.svg" alt="check" className="bg-cover bg-center" />
            <p className="w-full max-w-md text-sm leading-relaxed text-black/70">
              Buku ini ditulis berdasarkan dari dokumentasi Tailwind CSS
              langsung, agar meminimalisir terjadinya miskonsepsi
            </p>
          </div>
          {/* item3 */}
          <div className="flex items-center justify-center gap-5 md:justify-normal">
            <img src="./check.svg" alt="check" className="bg-cover bg-center" />
            <p className="w-full max-w-md text-sm leading-relaxed text-black/70">
              Sangat ramah untuk back-end developer yang phobia terhadap CSS dan
              mudah dipahami bagi UI designer
            </p>
          </div>
          {/* item4 */}
          <div className="flex items-center justify-center gap-5 md:justify-normal">
            <img src="./check.svg" alt="check" className="bg-cover bg-center" />
            <p className="w-full max-w-md text-sm leading-relaxed text-black/70">
              Studi kasus membangun sebuah website responsive dengan Tailwind
              CSS tanpa ngoding CSS
            </p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div>
        <img src="./book1.png" alt="book1" className="bg-cover bg-center" />
      </div>
    </div>
  );
}
