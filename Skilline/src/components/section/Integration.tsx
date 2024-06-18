import { Button } from "../ui/button";

export default function Integration() {
  return (
    <section className="section_container flex flex-col items-center gap-8 pb-24 pt-6 md:flex-row md:justify-between md:gap-14">
        <img
          src="./integrations.png"
          alt="integration"
          className="w-full max-w-sm bg-cover bg-center md:max-w-xs lg:max-w-sm"
        />
        <div className="flex flex-col gap-8 lg:gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4 opacity-80">
              <div className="h-[1px] w-14 bg-accent"></div>
              <h4 className="text-sm uppercase tracking-widest text-accent">
                Integration
              </h4>
            </div>
            <h3 className="w-full max-w-md text-2xl font-semibold text-accent sm:text-3xl sm:leading-snug">
              200+ educational tools and platform
              <span className="text-primary"> integrations</span>
            </h3>
          </div>
          <p className="w-full max-w-md leading-relaxed opacity-80 lg:leading-loose">
            Schoology has every tool your classroom needs and comes
            pre-integrated with more than 200+ tools, student information
            systems (SIS), and education platforms.
          </p>
          <Button
            className="max-w-fit rounded-full border-primary px-8 py-6 text-primary hover:bg-primary hover:text-white"
            variant="outline"
          >
            See All Integrations
          </Button>
        </div>
      </section>
  )
}
