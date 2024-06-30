import { galleries } from "@/data/Galleries";
import { Package } from "lucide-react";

export default function GallerySection() {
  return (
    <section className="bg-veryLightPrimary py-20 font-nunito">
      <div className="section_container flex flex-col gap-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h3
            className="mx-auto w-full max-w-md text-center font-kufam text-3xl font-bold text-destructive sm:max-w-lg sm:text-4xl lg:max-w-2xl lg:text-[2.6rem]"
            style={{ lineHeight: 1.3 }}
          >
            Gallery Footage In Saudi Arabia
          </h3>
          <p className="mx-auto w-full max-w-md text-center font-semibold leading-relaxed text-destructive-foreground md:max-w-lg md:text-lg">
            We provide comfort for our customers, with the various facilities we
            provide that we provide
          </p>
        </div>
        <div className="relative grid grid-cols-2 justify-between justify-items-center gap-5 sm:grid-cols-3 md:grid-cols-4 md:justify-items-start">
          {galleries.map((gallery, index) => (
            <img
              key={index}
              src={gallery}
              alt={`gallery ${index}`}
              className="h-full w-full rounded-xl bg-cover bg-center first:col-span-2 first:row-span-2"
            />
          ))}
          <a
            href="#"
            className="absolute bottom-0 right-0 z-20 flex w-full max-w-fit items-center gap-6 rounded-lg bg-primary px-7 py-4 text-sm text-white opacity-80 transition hover:opacity-100 md:bottom-10 md:right-6"
          >
            <Package />
            Show All Photos
          </a>
        </div>
      </div>
    </section>
  );
}
