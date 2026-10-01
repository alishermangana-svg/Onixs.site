import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "#ffffff",
          color: "#0b0d10",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg,#2ec4ab,#17b8a0)",
              color: "#060908",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            O
          </div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>Onixs</div>
        </div>
        <div style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
          London digital studio for websites, apps & AI
        </div>
        <div style={{ marginTop: 28, fontSize: 24, color: "#17b8a0" }}>onixs.ai</div>
      </div>
    ),
    { ...size },
  );
}
