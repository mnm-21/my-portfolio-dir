"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, FileDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";

const ROLES = [
  "a Robotics Engineer",
  "an RL Engineer",
  "a Computer Vision Engineer",
];

function useTypedRoles() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setText(ROLES[0]);
      return;
    }

    const current = ROLES[roleIndex];
    const isComplete = text === current;
    const isEmpty = text.length === 0;
    const delay = isComplete && !deleting ? 1400 : deleting ? 34 : 58;

    const timeout = window.setTimeout(() => {
      if (!deleting && isComplete) {
        setDeleting(true);
        return;
      }

      if (deleting && isEmpty) {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % ROLES.length);
        return;
      }

      setText((value) => (deleting ? current.slice(0, Math.max(0, value.length - 1)) : current.slice(0, value.length + 1)));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, roleIndex, text]);

  return text;
}

export function AnimatedHero() {
  const scope = useRef<HTMLElement>(null);
  const typedRole = useTypedRoles();

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      gsap
        .timeline()
        .from(".nav", { opacity: 0, y: -10, duration: 0.4 })
        .from(".hero-greeting", { y: 28, opacity: 0, duration: 0.65, ease: "power3.out" }, 0.25)
        .from(".hero-type-line", { y: 18, opacity: 0, duration: 0.5, ease: "power3.out" }, 0.55)
        .from(".hero-subline", { x: -20, opacity: 0, duration: 0.45 }, 0.85)
        .from(".hero-lead", { opacity: 0, duration: 0.45 }, 1.05)
        .from(".hero-actions", { opacity: 0, y: 12, duration: 0.45 }, 1.25);
    },
    { scope },
  );

  return (
    <section className="hero" ref={scope}>
      <div className="hero-copy">
        <h1 className="hero-title hero-greeting">
          <span>Hello, I&apos;m</span>
          <span className="hero-name">Mayank Chandak</span>
        </h1>
        <div className="hero-type-line" aria-label={`I am ${typedRole}`}>
          <span>I&apos;m </span>
          <span className="typed-role">{typedRole}</span>
          <span className="type-cursor" aria-hidden="true" />
        </div>
        {/* <div className="hero-subline">Robotics / Reinforcement Learning / Computer Vision / Computational Imaging</div>
        <p className="hero-lead">
          I build intelligent systems at the intersection of perception, control, and learning - from surgical robots to multi-agent swarms.
        </p> */}
        <div className="button-row hero-actions">
          <Button href="/projects" icon={ArrowRight}>
            View Projects
          </Button>
          <Button href="/Mayank_CV.pdf" external variant="secondary" icon={FileDown}>
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}
