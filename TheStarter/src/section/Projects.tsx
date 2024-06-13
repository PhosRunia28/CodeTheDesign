import CardImage from "../components/CardImage";
import Title from "../components/Title";
import { cardImage } from "../data";

export default function Projects() {
  return (
    <section id="project" className="section_container pb-32 pt-24">
    <div className="flex flex-col gap-14">
        <Title
        title="Projects"
        description="Beberapa proyek bikinan saya."
        center
        />
        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
        {cardImage.map((card, index) => (
            <CardImage card={card} key={index} />
        ))}
        </div>
    </div>
    </section>
  )
}
