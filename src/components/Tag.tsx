import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "teal" | "outline";
  size?: "sm" | "md";
}

export function Tag({ children, variant = "default", size = "md" }: TagProps) {
  return (
    <span
      className={cn(
        "tag",
        variant === "teal" && "tag-teal",
        variant === "outline" && "tag-outline",
        size === "sm" && "min-h-6 px-2 text-[0.62rem]",
      )}
    >
      {children}
    </span>
  );
}
