import CardItem from '../components/CardItem'
import Title from '../components/Title'
import { cardItem } from '../data'

export default function Skill() {
  return (
    <section id="skill" className="bg-gray-100">
        <div className="section_container py-32">
          <Title title="Skills" description="Beberapa kemampuan saya." center />
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            {cardItem.map((card, index) => (
              <CardItem card={card} key={index} />
            ))}
          </div>
        </div>
      </section>
  )
}
