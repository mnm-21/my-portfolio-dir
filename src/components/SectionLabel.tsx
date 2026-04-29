import Link from "next/link";

interface SectionLabelProps {
  index: string;
  title: string;
  href?: string;
  linkLabel?: string;
}

export function SectionLabel({ index, title, href, linkLabel }: SectionLabelProps) {
  return (
    <div className="section-label">
      <span className="index">{index} /</span>
      <h2 className="section-title">{title}</h2>
      {href && linkLabel ? (
        <Link className="link" href={href}>
          {linkLabel}
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
