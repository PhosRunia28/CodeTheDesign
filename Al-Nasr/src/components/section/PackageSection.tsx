import { Card, CardContent } from "@/components/ui/card";
import { cardPrograms } from "@/data/Cards";
import CardPackage from "../ui/CardPackage";
export default function PackageSection() {
  return (
    <section className="section_container flex flex-col gap-14 py-20 font-nunito">
      <div className="flex flex-col justify-center gap-4 text-center">
        <h3
          className="mx-auto w-full max-w-md font-kufam text-3xl font-bold text-destructive sm:max-w-lg sm:text-4xl lg:max-w-xl lg:text-[2.6rem]"
          style={{ lineHeight: 1.3 }}
        >
          Al Nasr Special Umrah and Hajj Packages
        </h3>
        <p className="mx-auto w-full max-w-md font-semibold leading-relaxed text-destructive-foreground">
          Choose your package according to your needs, guaranteed cheap and
          complete
        </p>
      </div>
      <div className="grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:justify-between">
        {cardPrograms.map((card, index) => (
          <CardPackage card={card} key={index} />
        ))}
        <Card className="flex h-[32rem] w-full items-center justify-center shadow-xl shadow-veryLightPrimary sm:h-full">
          <CardContent>
            <h3 className="text-center font-kufam text-lg font-semibold text-primary">
              Coming Soon
            </h3>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
