import { facilities } from "@/data/Facilities";
import FacilitieItem from "../ui/FacilitieItem";

export default function FacilitieSection() {
  return (
    <section className="bg-veryLightPrimary py-20 font-nunito">
      <div className="section_container flex flex-col gap-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h3
            className="mx-auto w-full max-w-md text-center font-kufam text-3xl font-bold text-destructive sm:max-w-lg sm:text-4xl lg:max-w-[40rem] lg:text-[2.6rem]"
            style={{ lineHeight: 1.3 }}
          >
            Facilities We Provide For You
          </h3>
          <p className="mx-auto w-full max-w-md text-center font-semibold leading-relaxed text-destructive-foreground md:max-w-lg md:text-lg">
            We provide comfort for our customers, with the various facilities we
            provide that we provide
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 xl:justify-between">
          {facilities.map((facilitie, index) => (
            <FacilitieItem facilitie={facilitie} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
