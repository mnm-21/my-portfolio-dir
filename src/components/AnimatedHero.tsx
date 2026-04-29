"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/Button";

export function AnimatedHero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      gsap
        .timeline()
        .from(".nav", { opacity: 0, y: -10, duration: 0.4 })
        .from(".hero-eyebrow", { opacity: 0, duration: 0.4 }, 0.2)
        .from(".hero-word", { y: 60, opacity: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" }, 0.4)
        .from(".hero-subline", { x: -20, opacity: 0, duration: 0.45 }, 0.9)
        .from(".hero-lead", { opacity: 0, duration: 0.45 }, 1.1)
        .from(".hero-actions", { opacity: 0, y: 12, duration: 0.45 }, 1.3)
        .from(".scroll-indicator", { opacity: 0, duration: 0.3 }, 1.5);
    },
    { scope },
  );

  return (
    <section className="hero" ref={scope}>
      <video src="/assets/video/laparoscopic_cam_view.mp4" muted loop autoPlay playsInline preload="none" aria-label="Atmospheric laparoscopic surgery camera simulation" />
      <div className="hero-copy">
        <div className="eyebrow hero-eyebrow">
          <span className="status-dot" aria-hidden="true" />
          Available for opportunities / IIT Madras, Class of 2026
        </div>
        <h1 className="hero-title">
          <span className="hero-word">Building</span>{" "}
          <span className="hero-word">Intelligent</span>
          <br />
          <span className="hero-word">Systems.</span>
        </h1>
        <div className="hero-subline">Robotics / Reinforcement Learning / Computer Vision / Computational Imaging</div>
        <p className="hero-lead">
          I build intelligent systems at the intersection of perception, control, and learning - from surgical robots to multi-agent swarms.
        </p>
        <div className="button-row hero-actions">
          <Button href="/projects" icon={ArrowRight}>
            View Projects
          </Button>
          <Button href="/journey" variant="secondary">
            Read Journey
          </Button>
        </div>
      </div>
      <div className="scroll-indicator" aria-hidden="true" />
    </section>
  );
}
