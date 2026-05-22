import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ANSET Assurances · À vos côtés, à tout moment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          background: "linear-gradient(135deg, #0a1f44 0%, #14305c 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            color: "#D36F6B",
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          Assurances
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 120,
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginBottom: 36,
          }}
        >
          ANSET
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 38,
            fontWeight: 600,
            lineHeight: 1.3,
            maxWidth: "85%",
            marginBottom: 44,
          }}
        >
          L'assurance simple, claire et humaine.
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 56, height: 3, background: "#D36F6B" }} />
          <div
            style={{
              color: "#D36F6B",
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            À vos côtés · à tout moment
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}