type TitleProps = {
  leftTitle: string;
  rightTitle: string;
  description: string;
};
export default function Title({
  leftTitle,
  rightTitle,
  description,
}: TitleProps) {
  return (
    <div className="flex flex-col gap-4 text-center">
      <h4 className="text-3xl font-semibold">
        {leftTitle} <span className="text-primary">{rightTitle}</span>
      </h4>
      <p className="mx-auto w-full max-w-[26rem] text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
