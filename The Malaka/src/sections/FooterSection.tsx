import { linksFooter } from "../data";

export default function FooterSection() {
  return (
    <footer className="rounded-t-3xl bg-dark text-white">
      <div className="container_section relative space-y-16 px-6 pb-20 pt-28 font-dm_sans lg:px-0">
        <div className="flex flex-col justify-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-medium">
              Sudah siap meningkatkan skill kamu?
            </h4>
            <p className="mx-auto w-full max-w-sm text-sm leading-relaxed opacity-80 md:mx-0 lg:max-w-md">
              Mulai belajar hari ini Multinity, atau dapatkan jawab atas
              pertanyaan kamu di halaman bantuan.
            </p>
          </div>
          <div className="flex justify-center gap-5 md:justify-center">
            <div>
              <a
                role="button"
                href="#"
                className="btn rounded-full border border-gray-700 bg-gray-700 px-8 py-3 text-white shadow-md shadow-gray-700 hover:border-white hover:bg-white hover:text-dark"
              >
                Pusat Bantuan
              </a>
            </div>
            <div>
              <a
                role="button"
                href="#"
                className="btn rounded-full border border-primary bg-primary px-8 py-3 text-white shadow-md shadow-primary hover:border-primary hover:bg-white hover:text-dark"
              >
                Beli Sekarang
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="avatar placeholder">
                <div className="w-10 rounded-full bg-primary text-xl text-white">
                  <span>M</span>
                </div>
              </div>
              <h3 className="">The Malaka</h3>
            </div>
            <p className="w-full max-w-md text-sm leading-relaxed opacity-80">
              Malaka adalah situs penyedia kursus ilmu komputer berbahasa
              indonesia, mulai dari pengembangan hingga desain grafis
            </p>
          </div>
          <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:gap-14 md:justify-normal lg:gap-20">
            {linksFooter.map((link) => {
              return (
                <div className="flex flex-col gap-4">
                  <h5 className="text-sm uppercase tracking-widest opacity-80">
                    {link.title}
                  </h5>
                  <ul className="flex flex-col gap-3">
                    {link.links.map((link) => {
                      return (
                        <li>
                          <a
                            href={link.to}
                            className="text-white transition hover:text-primary"
                          >
                            {link.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        {/* copyright */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <p className=" text-center text-sm uppercase tracking-widest text-white/80">
            Copyright @ 2024{" "}
            <span className="text-medium text-primary">Tedy Nugroho</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
