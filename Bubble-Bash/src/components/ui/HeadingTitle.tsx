type HeadingTitleProps = {
  title: string;
  description: string;
};
export default function HeadingTitle({
  title,
  description,
}: HeadingTitleProps) {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="text-black/50">{title}</h4>
      <h3 className="text-3xl font-medium">{description}</h3>
    </div>
  );
}
