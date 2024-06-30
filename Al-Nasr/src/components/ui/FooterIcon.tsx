import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
type props = {
  path: string;
  icon: "facebook" | "instagram" | "twitter" | "youtube";
};
export default function FooterIcon({ path, icon }: props) {
  let IconComponent;
  switch (icon) {
    case "facebook":
      IconComponent = Facebook;
      break;
    case "instagram":
      IconComponent = Instagram;
      break;
    case "twitter":
      IconComponent = Twitter;
      break;
    case "youtube":
      IconComponent = Youtube;
      break;
    default:
      IconComponent = Instagram; // Default to Instagram if no valid icon provided
  }
  return (
    <a
      href={path}
      className="group inline-block rounded-xl border border-white bg-white p-2 transition hover:bg-primary"
    >
      <IconComponent className="text-primary group-hover:text-white" />
    </a>
  );
}
