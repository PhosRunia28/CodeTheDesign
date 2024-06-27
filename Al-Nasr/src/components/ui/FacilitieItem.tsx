type FacilitieData = {
  icon: string;
  title: string;
  desc: string;
};
type FacilitieItemProps = {
  facilitie: FacilitieData;
};
export default function FacilitieItem({ facilitie }: FacilitieItemProps) {
  return (
    <div className="flex w-full max-w-sm gap-3 rounded-lg bg-white p-5 shadow-xl sm:max-w-[16.5rem]">
      <div className="h-full max-h-fit w-full max-w-9 rounded-lg bg-lightPrimary p-2">
        <img
          src={facilitie.icon}
          alt={`facilities_${facilitie.title}`}
          className="w-full bg-cover bg-center"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-kufam text-xl font-semibold">{facilitie.title}</h4>
        <p className="text-[0.8rem] font-medium leading-normal">
          {facilitie.desc}
        </p>
      </div>
    </div>
  );
}
