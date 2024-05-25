import TitleWithBadge from "../components/TitleWithBadge";

export default function BuySection() {
  return (
    <section className="container_section space-y-10 px-6 py-28 font-dm_sans lg:px-0">
      <TitleWithBadge
        badge="BELI BUKU"
        title="Anda ingin segera memesan buku ini?"
        description="Otak Kita butuh asupan nutrisi juga, tidak hanya perut saja."
        classNameBadge="text-primary bg-primary/10"
      />
      <div className="flex flex-col-reverse items-center justify-center gap-8 sm:flex-row-reverse ">
        <div>
          <a
            role="button"
            href="#"
            className="btn rounded-full border border-primary bg-primary px-8 py-3 text-white shadow-md shadow-primary hover:border-primary hover:bg-white hover:text-dark"
          >
            Beli Sekarang
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <p className="uppercase tracking-wider opacity-60">Sudah terjual</p>
          <h4 className="text-center text-2xl font-bold uppercase">501,234+</h4>
        </div>
      </div>
    </section>
  );
}
