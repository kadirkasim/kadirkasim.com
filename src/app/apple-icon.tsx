import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1d1d1f",
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: 96,
            fontWeight: 600,
            letterSpacing: -4,
          }}
        >
          K
        </div>
      </div>
    ),
    size,
  );
}
