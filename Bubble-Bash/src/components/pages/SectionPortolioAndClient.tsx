import Client from "@/components/ui/Client";
import HeadingTitle from "@/components/ui/HeadingTitle";
import Project from "@/components/ui/Project";
import { clients } from "@/data/clients";
import { projects } from "@/data/projects";

export default function SectionPortolioAndClient() {
  return (
    <section className="font-openSans section_container bg-white px-5 py-24 md:px-8 lg:px-0">
      <div className="space-y-24">
        <div className="flex flex-col gap-8">
          <HeadingTitle
            title="Our Portofolio's"
            description="Recent Projects"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project, index) => {
              return (
                <Project
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <HeadingTitle
            title="Client Reviews"
            description="What Our Happy Client Say About Us"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {clients.map((client, index) => {
              return (
                <Client
                  image={client.image}
                  project={client.project}
                  comment={client.comment}
                  client={client.client}
                  job={client.job}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
