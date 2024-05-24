import TitleWithBadge from "./TitleWithBadge";

export default function Prantinjau() {
  return (
    <div className="flex flex-col gap-14">
      <TitleWithBadge
        badge="Pratinjau"
        title="Sebelum membeli, kamu dapat melihat beberapa halaman pratinjau isi di
          dalam buku ini"
        description="Klik pada gambar halaman di sebelah kanan buku untuk melihat lebih
          detail halaman buku tersebut dan membaca isinya."
        classNameBadge="text-primary bg-primary/20"
      />
      {/* group image preview */}
      <div className="flex flex-col gap-6">
        <div className="relative flex">
          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col gap-3 lg:bottom-4">
            <p className="text-black/80">Halaman 1 dari 257</p>
            <a
              role="button"
              href="#"
              className="btn mx-auto w-full max-w-fit rounded-full border bg-white px-6 py-2 text-dark hover:border-white hover:bg-dark hover:text-white md:inline-flex"
            >
              Preview
            </a>
          </div>
          <div>
            <img src="./book3.png" alt="book" className="bg-cover bg-center" />
          </div>
          <div className="hidden sm:block">
            <img
              src="./preview-book.png"
              alt="preview book"
              className="bg-cover bg-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
