type Props = {
  href: string;
  title: string;
};

export function AppStoreBadge({ href, title }: Props) {
  return (
    <a
      href={href}
      className="inline-block no-underline"
      rel="noreferrer"
      target="_blank"
    >
      <img
        src="/badges/app-store-us.svg"
        alt={`Download ${title} on the App Store`}
        width={149}
        height={50}
        className="h-[50px] w-auto"
      />
    </a>
  );
}
