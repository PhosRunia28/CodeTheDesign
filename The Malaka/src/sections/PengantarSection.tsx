export default function PengantarSection() {
  return (
    <section className="mt-28 bg-primary py-20 font-dm_sans text-white">
      <div className="container_section px-6 lg:px-0">
        <div className="flex flex-col gap-5 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex flex-col">
            <p className="text-xs font-medium uppercase tracking-wide">
              -- Buku ini untuk Siapa
            </p>
            <h3 className="mx-auto my-5 w-full max-w-md border-white/60 text-2xl font-bold md:mx-0 md:max-w-xs md:border-b md:pb-10 md:text-3xl">
              Kata Pengantar Dari Penulis Buku
            </h3>
            <div className="mb-8 flex items-center justify-center gap-4 md:mb-0 md:mt-8 md:justify-normal">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="flex flex-col gap-1 text-left">
                <h4 className="text-xl font-medium">Muhamad Nauval Azhar</h4>
                <p className="text-sm">@mhdnauvalazhar</p>
              </div>
            </div>
          </div>
          <div className="">
            <p className="mx-auto max-w-lg leading-[2.4] text-white/90 md:mx-0">
              "Tailwind sangat memungkinkan kamu untuk membangun sebuah desain
              website yang unik dan tanpa kamu perlu menulis kode CSS
              sedikitpun. Mungkin kamu akan berpikir bahwa kamu akan membutuhkan
              waktu yang lebih lama ketika membangun sebuah website dengan
              utility-first framework ketimbang dengan framework UIkit. Ya,
              benar. Karena kamu harus memikirkan desain dan mengimplementasikan
              desain tersebut dari awal sendiri. Namun, kamu perlu ingat
              manfaat-manfaat yang diberikan oleh utility-first framework,
              sehingga kamu dapat mempertimbangkannya. Dalam buku ini, kita akan
              mempelajari framework Tailwind CSS. Mulai dari konsep, workflow,
              hingga membuat sebuah website responsive dengan TailwindCSS. Buku
              ini tidak untuk semua orang, setidaknya kamu memahami cara
              mengoperasikan komputer, memahami HTML, memahami CSS, atau bisa
              dibilang kamu sudah pernah membangun website sebelumnya dan ingin
              mempelajari hal baru untuk meningkatkan skill."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
