import { cardWithIcon } from "@/data";
import { CircleArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import CardWithIcon from "../ui/CardWithIcon";

export default function WhyUs() {
  return (
    <section className="bg-lightPrimary/30">
      <div className="section_container pb-40">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* content */}
          <div className="flex flex-col gap-8 font-sourceCodePro">
            <div className="space-y-4">
              {/* sub title */}
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 rounded-full bg-primary"></div>
                <h5 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Kenapa Sih?
                </h5>
              </div>
              <h3 className="w-full max-w-lg text-3xl font-bold leading-normal">
                Kenapa Kami Tidak Memberikan Insight Apapun?
              </h3>
            </div>
            <p className="w-full max-w-md text-sm leading-[1.8] text-secondary opacity-60">
              Di sini kita akan klarifikasi mengapa kita tidak memberikan
              insight apapun di tool ini kepada kamu. Pada dasarnya hal ini kami
              lakukan semata-mata ingin menyelamatkan planet bumi.
            </p>
            <Button
              variant="secondary"
              className="w-full max-w-fit rounded-full px-7 py-7 font-DMSans font-bold"
            >
              Pelajari Lebih Lanjut
              <CircleArrowRight className="ml-4" />
            </Button>
          </div>
          {/* card */}
          <div className="grid justify-center justify-items-center gap-4 sm:grid-cols-2">
            {cardWithIcon.map((card, index) => (
              <CardWithIcon card={card} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
