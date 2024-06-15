import { cardItemAllInOne } from "@/data";
import CardRoundedImage from "../ui/CardRoundedImage";
import Title from "../ui/Title";

export default function CardAllinOne() {
  return (
    <div className="flex flex-col justify-center gap-20 text-center">
      <Title
        rightTitle="All-In-One"
        leftTitle="Cloud Software"
        description="Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office"
      />
      <div className="flex flex-wrap justify-center gap-14 lg:gap-10">
        {cardItemAllInOne.map((card, index) => (
          <CardRoundedImage card={card} key={index} />
        ))}
      </div>
    </div>
  );
}
