import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const runtime = "edge";
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #050d1a 0%, #06121f 40%, #082435 100%)",
          color: "#e2e8f0",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: 72,
          position: "relative",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(56,189,248,0.25) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            color: "#94a3b8",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
              border: "1px solid #1e293b",
              background: "rgba(15, 23, 42, 0.6)",
              color: "#7dd3fc",
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}
          >
            SM
          </div>
          <span>Senior Full Stack Engineer · Portfolio</span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.02,
              color: "#f8fafc",
              display: "flex",
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 56,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              backgroundImage:
                "linear-gradient(135deg, #f8fafc 0%, #38bdf8 60%, #f8fafc 100%)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
            }}
          >
            {profile.title}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: "#cbd5e1",
              lineHeight: 1.4,
              maxWidth: 980,
              display: "flex",
            }}
          >
            {profile.tagline.length > 200
              ? `${profile.tagline.slice(0, 197)}…`
              : profile.tagline}
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#94a3b8",
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            <span>Django</span>
            <span style={{ color: "#475569" }}>·</span>
            <span>FastAPI</span>
            <span style={{ color: "#475569" }}>·</span>
            <span>Rails</span>
            <span style={{ color: "#475569" }}>·</span>
            <span>Next.js</span>
            <span style={{ color: "#475569" }}>·</span>
            <span>AWS</span>
          </div>
          <div style={{ display: "flex" }}>saimmalik.dev</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
