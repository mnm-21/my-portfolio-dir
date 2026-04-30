import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "teal" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export function Tag({ children, variant = "default", size = "md", className }: TagProps) {
  return (
    <span
      className={cn(
        "tag w-fit",
        variant === "teal" && "tag-teal",
        variant === "outline" && "tag-outline",
        size === "sm" && "min-h-6 px-2 text-[0.62rem]",
        className,
      )}
    >
      {children}
    </span>
  );
}
