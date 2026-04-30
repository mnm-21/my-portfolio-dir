import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "teal";
  size?: "xs" | "sm" | "md" | "lg";
  icon?: LucideIcon;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
}

export function Button({
  children,
  href,
  external,
  variant = "primary",
  size = "md",
  icon: Icon,
  loading,
  disabled,
  type = "button",
  className,
}: ButtonProps) {
  const classes = cn(
    "button",
    `button-${variant}`,
    size === "xs" && "min-h-8 px-2.5 text-[0.75rem]",
    size === "sm" && "min-h-9 px-3",
    size === "lg" && "min-h-14 px-7",
    disabled && "button-disabled",
    className,
  );
  const content = (
    <>
      {loading ? <span className="spinner" aria-hidden="true" /> : null}
      <span>{children}</span>
      {Icon && !loading ? <Icon size={16} aria-hidden="true" /> : null}
    </>
  );

  if (href && !disabled) {
    if (external) {
      return (
        <a className={classes} href={href} target="_blank" rel="noreferrer">
          {content}
        </a>
      );
    }

    return (
      <Link className={classes} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} disabled={disabled || loading}>
      {content}
    </button>
  );
}
