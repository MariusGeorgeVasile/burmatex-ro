import type { MouseEvent, ReactNode } from "react";
import { Link as WouterLink, useLocation } from "wouter";

// Link that also handles "/page#section" targets: scrolls in place when already on that page,
// and works with both browser routing (burmatex.ro) and hash routing (hosted preview).
export function Link({ href, children, className, onClick, ...rest }: { href: string; children?: ReactNode; className?: string; onClick?: (e: MouseEvent<HTMLAnchorElement>) => void; "aria-label"?: string }) {
  const [location] = useLocation();
  const [path, id] = href.split("#");
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (!id || (path && path !== location)) return;
    const el = document.getElementById(id);
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth" }); }
  };
  return <WouterLink href={path ? href : `${location}#${id}`} className={className} onClick={handle} {...rest}>{children}</WouterLink>;
}
