export default function AuthorSection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-24 pt-[15rem] font-dm_sans lg:px-0">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center lg:gap-10">
        <div>
          <img src="./author.png" alt="author" className="bg-cover bg-center" />
        </div>
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-sm uppercase text-primary">PENULIS BUKU</p>
          <h3 className="mx-auto w-full max-w-md text-3xl font-medium md:mx-0">
            Tak kenal maka tak kenal. Berkenalan dengan penulis buku ini
          </h3>
          <p className="mx-auto w-full max-w-md leading-loose opacity-80 md:mx-0">
            “Halo, saya Nauval. Mungkin nama ini terdengar asing di telinga
            kamu. Namun, kedepannya saya berharap nama ini tidak lagi terdengar
            asing di telinga kamu sebagai orang yang rajin berbagi hal-hal baik
            untuk masyarakat, khususnya dalam ilmu komputer. Saya seorang web
            developer yang masuk kategori
            apa-aja-dikerjain-selagi-ada-manfaat-nya. Meski begitu, saya lebih
            senang fokus di front-end development, karena --menurut saya-- ini
            lebih sederhana saja. Di front-end development pada dasarnya hanya
            perlu menguasai tiga bahasa: HTML, CSS, dan JavaScript. Sudah jelas
            ini sederhana, yang bikin ribet itu kamu sendiri, sudah tau kamu
            cocoknya pake jQuery, malah maksa pake React.”
          </p>
        </div>
      </div>
    </section>
  );
}
