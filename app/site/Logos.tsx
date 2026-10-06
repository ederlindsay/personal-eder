import { logoSrc, type Logo } from "./content";

/** Monochrome, discreet logos of the companies and institutions cited. */
export function Logos({ items }: { items: Logo[] }) {
  if (!items.length) return null;
  return (
    <span className="logos">
      {items.map((l) => (
        <img key={l.id} className={`logo${l.tall ? " tall" : ""}`} src={logoSrc(l)} alt={l.name} title={l.name} loading="lazy" />
      ))}
    </span>
  );
}
