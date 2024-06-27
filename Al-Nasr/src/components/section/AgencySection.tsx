import AgencyFacilitie from "../ui/AgencyFacilitie";
import { Button } from "../ui/button";

export default function AgencySection() {
  return (
    <section className="bg-veryLightPrimary py-20 font-nunito">
      <div className="section_container flex flex-col gap-12 sm:flex-row sm:items-center sm:justify-between sm:gap-8 lg:items-start">
        <div>
          <img
            src="./image/agency.png"
            alt="agency"
            className="bg-cover bg-center"
          />
        </div>
        <div className="flex flex-col gap-9">
          <h3
            style={{ lineHeight: 1.4 }}
            className="w-full max-w-lg font-kufam text-3xl font-bold text-destructive md:text-4xl lg:text-[2.6rem]"
          >
            A Wonderful Agency To Fulfill your Dreams
          </h3>
          <p className="w-full max-w-lg text-lg leading-relaxed text-destructive-foreground">
            The Hajj and Umrah pilgrimages are smooth, the heart is clean. we
            have been trusted since 2006 and have obtained a license from SAUDI
            ARABIA to become this travel agency.
          </p>
          <div className="flex flex-col gap-4 md:gap-5">
            <AgencyFacilitie
              image="./icon/flight.svg"
              alt="flight"
              desc="Flight Jakarta Saudi - Saudi Jakarta"
            />
            <AgencyFacilitie
              image="./icon/ticket.svg"
              alt="ticket"
              desc="Tickets are included in the cost"
            />
            <AgencyFacilitie
              image="./icon/building.svg"
              alt="building"
              desc="Comfortable hotel with a rating of 4"
            />
            <AgencyFacilitie
              image="./icon/visa.svg"
              alt="visa"
              desc="We cover the Visa Fee and it's Included"
            />
          </div>
          <div className="flex flex-col gap-8 sm:flex-row">
            <Button variant="secondary" className="font-bold md:px-12 md:py-7">
              Learn More
            </Button>
            <Button
              variant="outline"
              className="bg-veryLightPrimary border-secondary font-bold hover:bg-secondary md:px-12 md:py-7"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
