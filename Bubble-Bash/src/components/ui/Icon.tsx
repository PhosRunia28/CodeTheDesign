import { ReactElement } from "react";

type IconProps = {
  icon: ReactElement;
  link?: string;
};
export default function Icon({ icon, link = "#" }: IconProps) {
  return (
    <a
      href={link}
      className="group rounded-full border border-black bg-black p-1 transition hover:bg-white"
    >
      {icon}
    </a>
  );
}
