interface ProjectMediaProps {
  src?: string
  alt: string
  className?: string
}

export default function ProjectMedia({ src, alt, className }: ProjectMediaProps) {
  if (!src) {
    return (
      <div className={`${className ?? ''} abstract-project-media`} role="img" aria-label={alt}>
        <span />
        <span />
        <span />
      </div>
    )
  }

  const isVideo = /\.(mp4|webm|mov)$/i.test(src)

  if (isVideo) {
    return (
      <video
        className={className}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={alt}
      >
        <source src={src} type="video/mp4" />
      </video>
    )
  }

  return <img className={className} src={src} alt={alt} loading="lazy" />
}
