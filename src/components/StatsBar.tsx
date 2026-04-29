"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 9.43, suffix: " / 10", label: "GPA" },
  { value: 1, suffix: "", label: "ICCV Publication" },
  { value: 8, suffix: "+", label: "Projects" },
  { value: 1, suffix: "", label: "IIT Madras" },
];

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(1);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      let frame = 0;
      const total = 60;
      const animate = () => {
        frame += 1;
        setProgress(Math.min(frame / total, 1));
        if (frame < total) requestAnimationFrame(animate);
      };
      animate();
      observer.disconnect();
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-bar" ref={ref} aria-label="Portfolio statistics">
      <div className="container stats-grid">
        {STATS.map((stat) => {
          const display = stat.label === "IIT Madras" ? "IIT" : (stat.value * progress).toFixed(stat.value % 1 ? 2 : 0);
          return (
            <div className="stat" key={stat.label}>
              <strong>
                {display}
                {stat.label !== "IIT Madras" ? stat.suffix : ""}
              </strong>
              <span>{stat.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
