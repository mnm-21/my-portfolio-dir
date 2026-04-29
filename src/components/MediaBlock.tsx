import Image from "next/image";

interface MediaBlockProps {
  src?: string;
  type: "image" | "video" | "abstract";
  alt: string;
  className?: string;
  priority?: boolean;
}

export function MediaBlock({ src, type, alt, className = "", priority }: MediaBlockProps) {
  if (type === "video" && src) {
    return (
      <div className={`media-block ${className}`}>
        <video src={src} muted loop autoPlay playsInline preload="none" aria-label={alt} />
      </div>
    );
  }

  if (type === "image" && src) {
    return (
      <div className={`media-block ${className}`}>
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" priority={priority} />
      </div>
    );
  }

  return (
    <div className={`abstract-media ${className}`} role="img" aria-label={alt}>
      <span>{alt}</span>
    </div>
  );
}
