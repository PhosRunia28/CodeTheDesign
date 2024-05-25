import Card from "../components/Card";
import { cards } from "../data";

export default function CardSection() {
  return (
    <section className="container_section mb-20 mt-24 px-6 font-dm_sans lg:px-0">
      <div className="flex flex-col gap-5 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex  flex-col gap-2">
          <p className="text-xs font-bold uppercase tracking-wide text-primary">
            -- Buku ini untuk Siapa
          </p>
          <h3 className="mx-auto w-full max-w-sm text-2xl font-medium md:mx-0">
            Buku yang cocok dibaca untuk front-end dan back-end, bahkan UI
            designer!
          </h3>
        </div>
        <div className="">
          <p className="mx-auto max-w-md text-[0.9rem] leading-[1.8] text-black/80 md:mx-0">
            Buku ini bukan hanya untuk front-end developer yang ingin
            meningkatkan skill, buku ini juga cocok untuk back-end developer dan
            UI designer agar dapat menulis style tanpa harus menulis kode CSS
            dan tanpa mengandalkan front-end developer!
          </p>
        </div>
      </div>
      <div className="mt-16 flex w-full flex-wrap justify-center gap-8">
        {cards.map((card, index) => {
          return <Card card={card} index={index} />;
        })}
      </div>
    </section>
  );
}
