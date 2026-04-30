"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/journey", label: "Journey" },
];

export function Nav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 60));

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header className={cn("nav", scrolled && "scrolled")}>
        <div className="container nav-inner">
          <Link className="brand" href="/" onClick={() => setOpen(false)}>
            Mayank Chandak
          </Link>
          <nav className="nav-links" aria-label="Primary navigation">
            {LINKS.map((link) => (
              <Link className={cn(isActive(link.href) && "active")} href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <Link className="nav-hire" href="/contact">
            Contact Me -&gt;
          </Link>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <nav className={cn("mobile-menu", open && "open")} aria-label="Mobile navigation">
        {LINKS.map((link) => (
          <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
