import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 36,
          background:
            "linear-gradient(135deg, #06121f 0%, #0c2440 50%, #082435 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#7dd3fc",
          fontWeight: 800,
          letterSpacing: "-0.05em",
          fontFamily: "system-ui, -apple-system, sans-serif",
          borderRadius: 12,
        }}
      >
        SM
      </div>
    ),
    {
      ...size,
    },
  );
}
