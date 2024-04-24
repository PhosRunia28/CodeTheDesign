type FooterLinkProps = {
  title: string;
  routes: { name: string; link: string }[];
};
export default function FooterLink({ title, routes }: FooterLinkProps) {
  return (
    <div className="flex flex-col gap-4">
      <h5 className="font-medium">{title}</h5>
      {routes.map(({ link, name }) => {
        return (
          <a
            href={link}
            className="inline-block text-sm font-medium text-black/60 hover:text-black"
          >
            {name}
          </a>
        );
      })}
    </div>
  );
}
