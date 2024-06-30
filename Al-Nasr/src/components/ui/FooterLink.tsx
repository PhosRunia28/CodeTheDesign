type LinkFooter = {
  path: string;
  linkName: string;
};
type LinkData = {
  title: string;
  links: LinkFooter[];
};
type props = {
  links: LinkData;
};
export default function FooterLink({ links }: props) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg font-bold">{links.title}</h4>
      <ul className="flex flex-col gap-2">
        {links.links.map((link, index) => (
          <li key={index}>
            <a
              href={link.path}
              className="font-medium opacity-80 transition hover:text-secondary hover:opacity-100"
            >
              {link.linkName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
