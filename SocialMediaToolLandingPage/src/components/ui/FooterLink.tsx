type Links = {
  to: string;
  linkName: string;
};
type LinkData = {
  title: string;
  links: Links[];
};
type FooterLinkProps = {
  link: LinkData;
};
export default function FooterLink({ link }: FooterLinkProps) {
  return (
    <div className="flex flex-col gap-5">
      <h5 className="font-bold uppercase tracking-wide">{link.title}</h5>
      <ul className="flex flex-col gap-3">
        {link.links.map((link, index) => (
          <li key={index}>
            <a href={link.to} className="text-sm transition hover:text-primary">
              {link.linkName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
