type TitleWithBadgeProps = {
  badge: string;
  title: string;
  description: string;
  classNameBadge?: string;
};
export default function TitleWithBadge({
  classNameBadge,
  badge,
  title,
  description,
}: TitleWithBadgeProps) {
  return (
    <div className={`relative z-40 flex flex-col gap-5 text-center`}>
      <div
        className={`mx-auto max-w-fit rounded-full px-6 py-2 ${classNameBadge}`}
      >
        <h5 className="text-xs font-bold uppercase tracking-widest">{badge}</h5>
      </div>
      <h3 className="mx-auto w-full max-w-[39rem] text-[1.7rem] font-medium leading-snug">
        {title}
      </h3>
      <p className="mx-auto w-full max-w-lg leading-relaxed opacity-80">
        {description}
      </p>
    </div>
  );
}
