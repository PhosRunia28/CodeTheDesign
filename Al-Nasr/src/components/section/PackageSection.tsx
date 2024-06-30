import { Card, CardContent } from "@/components/ui/card";
import { airwayIcon } from "@/data/AirwayIcon";
import { cardPrograms } from "@/data/Cards";
import CardPackage from "../ui/CardPackage";
import MarqueeItem from "../ui/MarqueeItem";
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
      <div className="flex flex-col gap-8 min-[1100px]:flex-row">
        <div className="flex w-full max-w-[14rem] flex-col gap-4">
          <h4
            className="font-kufam text-[1.7rem] font-bold"
            style={{ lineHeight: 1.3 }}
          >
            Airways Accomadation
          </h4>
          <p className="font-semibold">
            We cooperate with several airlines for Umrah and Hajj
          </p>
          <div className="flex w-full max-w-fit items-center gap-2 rounded-full bg-lightPrimary p-2 px-6 text-destructive">
            <img
              src="./icon/star.svg"
              alt="star rating"
              className="bg-cover bg-center"
            />
            <p className="text-sm font-medium">5.0 Rating</p>
          </div>
        </div>
        <div className="w-full">
          <MarqueeItem images={airwayIcon} />
        </div>
      </div>
    </section>
  );
}
