import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1A2E40",
          padding: "72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#C57B45",
              display: "flex",
            }}
          />
          <div style={{ color: "#F2F2F2", fontSize: 28, letterSpacing: 1, display: "flex" }}>
            ANCHORTECH INNOVATIONS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#F2F2F2",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.1,
              display: "flex",
              maxWidth: 980,
            }}
          >
            Templates and tools, not another course.
          </div>
          <div
            style={{
              color: "#9FB0BF",
              fontSize: 30,
              lineHeight: 1.4,
              display: "flex",
              maxWidth: 900,
            }}
          >
            Buy once, download instantly, use as many times as you need.
          </div>
        </div>

        <div style={{ display: "flex", color: "#7C8A97", fontSize: 24 }}>
          anchortech.org/products
        </div>
      </div>
    ),
    { ...size }
  );
}
