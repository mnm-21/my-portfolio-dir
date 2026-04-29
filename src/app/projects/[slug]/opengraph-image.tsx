import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/data/projects";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#080A0D",
          color: "#EDF0F4",
          fontFamily: "Arial",
        }}
      >
        <div style={{ color: "#00E5CC", fontSize: 28 }}>{project?.category || "Project"}</div>
        <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 0.98 }}>{project?.shortTitle || "Mayank Chandak"}</div>
        <div style={{ color: "#9BA8BA", fontSize: 26 }}>Mayank Chandak / Robotics / RL / Vision</div>
      </div>
    ),
    size,
  );
}
