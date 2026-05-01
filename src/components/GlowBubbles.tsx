"use client";

import React from "react";

/**
 * Each bubble is defined by its resting position, size, colours and
 * independent animation durations so they never move in sync.
 */
const BUBBLES = [
  // [cx%, cy%, radiusVw, color, driftDuration, pulseDuration, driftDelay, pulseDelay]
  ["12%",  "18%", "28vw", "rgba(227, 211, 183, 0.55)", "18s", "6s",  "0s",    "0s"   ],
  ["82%",  "12%", "26vw", "rgba(184, 155, 98,  0.45)", "22s", "7s",  "-4s",   "-2s"  ],
  ["55%",  "72%", "24vw", "rgba(244, 241, 234, 0.35)", "26s", "8s",  "-9s",   "-3s"  ],
  ["18%",  "82%", "22vw", "rgba(184, 155, 98,  0.40)", "20s", "5.5s","-14s",  "-1.5s"],
  ["70%",  "48%", "20vw", "rgba(227, 211, 183, 0.30)", "24s", "9s",  "-7s",   "-4s"  ],
  ["35%",  "35%", "18vw", "rgba(200, 180, 140, 0.28)", "28s", "6.5s","-11s",  "-5s"  ],
] as const;

export function GlowBubbles() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {BUBBLES.map(([cx, cy, r, color, driftDur, pulseDur, driftDelay, pulseDelay], i) => (
        <div
          key={i}
          className={`glow-bubble glow-bubble-${i}`}
          style={
            {
              "--cx": cx,
              "--cy": cy,
              "--r": r,
              "--color": color,
              "--drift-dur": driftDur,
              "--pulse-dur": pulseDur,
              "--drift-delay": driftDelay,
              "--pulse-delay": pulseDelay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
