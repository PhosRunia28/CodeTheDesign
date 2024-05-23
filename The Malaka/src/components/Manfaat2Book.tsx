export default function Manfaat2Book() {
  return (
    <div className="flex flex-col-reverse justify-between md:flex-row-reverse md:items-center md:gap-8 lg:items-start">
      {/* left side */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-wide text-primary">
            -- Selain Itu
          </p>
          <h3 className="mx-auto w-full max-w-md text-2xl font-medium md:mx-0">
            Buku dengan studi kasus nyata, juga komunitas yang ramah
          </h3>
          <p className="mx-auto w-full max-w-md text-sm leading-relaxed text-black/70 md:mx-0">
            Buku ini diakhiri dengan membangun website yang responsive dengan
            Tailwind. Selain itu kamu juga kamu dapat bergabung ke komunitas
            untuk bertanya ketika mengalami kesulitan.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {/* box1 */}
          <div className="flex items-center gap-5 rounded-lg border bg-white px-5 py-4 shadow-lg">
            <img
              src="./demo.svg"
              alt="live demo project"
              className="bg-cover bg-center"
            />
            <div className="flex flex-col gap-2">
              <h5 className="text-lg font-medium text-primary">
                Live Demo Project
              </h5>
              <p className="w-full max-w-md text-sm font-light text-black/70">
                Lihat live demo project yang akan kamu buat di akhir buku ini.
              </p>
            </div>
            <a href="#" className="inline-block rounded-full bg-lightBlue p-3">
              <img
                src="./arrow-right.svg"
                alt="arrow right"
                className="w-full bg-cover bg-center"
              />
            </a>
          </div>
          {/* box2 */}
          <div className="flex items-center gap-5 rounded-lg border bg-white px-5 py-4 shadow-lg">
            <img
              src="./message.svg"
              alt="dukungan komunitas"
              className="bg-cover bg-center"
            />
            <div className="flex flex-col gap-2">
              <h5 className="text-lg font-medium text-primary">
                Dukungan Komunitas
              </h5>
              <p className="w-full max-w-md text-sm font-light text-black/70">
                Sebuah server Discord berisi teman-teman yang akan membantu
                kamu.
              </p>
            </div>
            <a href="#" className="inline-block rounded-full bg-lightBlue p-3">
              <img
                src="./arrow-right.svg"
                alt="arrow right"
                className="w-full bg-cover bg-center"
              />
            </a>
          </div>
        </div>
      </div>
      {/* right side */}
      <div>
        <img src="./book2.png" alt="book1" className="bg-cover bg-center" />
      </div>
    </div>
  );
}
