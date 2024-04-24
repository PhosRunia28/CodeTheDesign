type ClientProps = {
  project: string;
  comment: string;
  image: string;
  client: string;
  job: string;
};
export default function Client({
  project,
  comment,
  image,
  client,
  job,
}: ClientProps) {
  return (
    <div className="flex cursor-pointer flex-col gap-4 border-2 border-black/50 px-5 py-7">
      <h5 className="text-xl font-semibold">{project}</h5>
      <p className="w-full text-sm font-medium leading-relaxed text-black/60 sm:max-w-xs">
        {comment}
      </p>
      <div className="mt-auto flex items-center gap-2">
        <img
          src={image}
          alt={client}
          className="w-full max-w-[3.5rem] rounded-full bg-cover bg-center"
        />
        <div className="flex flex-col gap-1">
          <h5 className="text-sm font-medium">{client}</h5>
          <p className="text-sm text-black/60">{job}</p>
        </div>
      </div>
    </div>
  );
}
