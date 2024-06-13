type TitleProps = {
  title: string;
  description: string;
  center?: boolean;
};
export default function Title({ title, description, center }: TitleProps) {
  return (
    <div
      className={`flex flex-col gap-1 ${center ? "text-center" : "text-left"}`}
    >
      <h4 className="font-IBMPlexMono text-xl font-semibold sm:text-2xl">
        {title}
      </h4>
      <p className="opacity-80">{description}</p>
    </div>
  );
}
