import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "./button";
type CardData = {
  image: string;
  packageName: string;
  typePackage: string;
  level: string;
  price: string;
  days: number;
  facilities: string[];
};
type CardPackageProps = {
  card: CardData;
};
export default function CardPackage({ card }: CardPackageProps) {
  return (
    <Card className="shadow-xl shadow-veryLightPrimary">
      <CardHeader>
        <img
          src={card.image}
          alt={card.typePackage}
          className="mb-4 bg-cover bg-center"
        />
        <div className="relative pb-2">
          <h5 className="font-black tracking-wide text-secondary">
            {card.level}
          </h5>
          <div className="absolute -top-[10px] right-0 rounded-l-full bg-lightPrimary px-8 py-3 text-sm font-bold text-destructive sm:px-5 md:px-8">
            {card.typePackage}
          </div>
        </div>
        <div className="space-y-2 pt-2 font-kufam">
          <h4 className="text-sm font-bold text-destructive">
            {card.packageName} {card.days} Days
          </h4>
          <h5 className="text-lg font-bold text-destructive-foreground">
            $ {card.price} / <span className="text-primary">person</span>
          </h5>
        </div>
      </CardHeader>
      <CardContent className="flex items-center gap-3">
        {card.facilities.map((icon, index) => (
          <div
            className="w-full max-w-9 rounded-lg bg-lightPrimary p-2"
            key={`facilities_${index}`}
          >
            <img
              src={icon}
              alt={`facilities_${index}`}
              className="w-full bg-cover bg-center"
            />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full max-w-fit border-secondary px-9 hover:bg-secondary hover:text-white"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
