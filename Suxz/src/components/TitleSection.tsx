import React from "react";
type TitleSectionProps = {
  title: string;
  description: string;
  section: string;
};

export default function TitleSection({
  title,
  description,
  section,
}: TitleSectionProps) {
  return (
    <div>
      <h5 className="text-sm font-bold uppercase tracking-wide text-primary">
        {section}
      </h5>
      <h3 className="mb-5 w-full max-w-xs text-2xl font-bold leading-snug md:max-w-sm md:text-3xl">
        {title}
      </h3>
      <p className="w-full max-w-xs text-sm opacity-90 md:max-w-sm md:text-base">
        {description}
      </p>
    </div>
  );
}
