import HeadingTitle from "@/components/ui/HeadingTitle";
import Service from "@/components/ui/Service";
import { services } from "@/data/service";

export default function SectionServices() {
  return (
    <section className="font-openSans bg-secondary px-5 py-14 md:px-8 lg:px-0">
      <div className="section_container flex flex-col gap-6">
        <HeadingTitle
          title="Our Services"
          description="We Provide What You Need"
        />
        <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-3">
          {services.map((service, index) => {
            return (
              <Service
                key={index}
                title={service.title}
                description={service.description}
                img={service.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
