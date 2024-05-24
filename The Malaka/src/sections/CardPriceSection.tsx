import CardPrice from "../components/CardPrice";
import TitleWithBadge from "../components/TitleWithBadge";
import { bukuDigital, bukuDigitalFisik, bukuFisik } from "../data";

export default function CardPriceSection() {
  return (
    <section className="relative -mt-20 bg-lightBlue py-48 text-white">
      <div className="absolute inset-0 -bottom-20 -skew-y-[6deg] rounded-bl-[5rem] rounded-tr-[2rem] bg-dark"></div>
      <div className="mx-auto w-full max-w-5xl space-y-16 overflow-hidden px-6 font-dm_sans lg:px-0">
        <TitleWithBadge
          badge="HARGA BUKU"
          title="Kamu dapat membeli buku fisik atau buku elektronik untuk dibaca di perangkat kamu"
          description="Dilarang memperjualbelikan atau memperbanyak tanpa seizin penulis. Hak cipta dilindungi undang-undang."
          classNameBadge="text-primary bg-primary/10"
        />
        <div className="flex flex-wrap justify-center gap-8">
          <CardPrice
            title="Buku Digital"
            price="Rp100.000"
            offerPrice={bukuDigital}
          />
          <CardPrice
            title="Buku Fisik"
            price="Rp185.000"
            offerPrice={bukuFisik}
          />
          <CardPrice
            title="Buku Digital + FIsik"
            price="Rp250.000"
            offerPrice={bukuDigitalFisik}
          />
        </div>
        <p className="mx-auto max-w-md text-center leading-relaxed opacity-80">
          *Buku digital akan dikirimkan ke alamat email kamu *Buku fisik dikirim
          7 hari setelah pemesanan
        </p>
      </div>
    </section>
  );
}
