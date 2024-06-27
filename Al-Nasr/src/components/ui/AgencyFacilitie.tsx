type AgencyFacilitieProps = {
  image: string;
  desc: string;
  alt: string;
};
export default function AgencyFacilitie({
  image,
  alt,
  desc,
}: AgencyFacilitieProps) {
  return (
    <div className="flex items-center gap-5">
      <div className="rounded-lg bg-lightPrimary p-2">
        <img src={image} alt={alt} className="w-full bg-cover bg-center" />
      </div>
      <p className="text-destructive-foreground">{desc}</p>
    </div>
  );
}
