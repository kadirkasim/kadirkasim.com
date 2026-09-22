import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Kadir Kasim";

async function markDataUrl() {
  const file = await readFile(
    path.join(process.cwd(), "public/brand/icon-transparent-white-512.png"),
  );
  return `data:image/png;base64,${file.toString("base64")}`;
}

export default async function OpenGraphImage() {
  const mark = await markDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          padding: "72px 80px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 78% 28%, rgba(59,130,246,0.22), transparent 55%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mark} width={96} height={96} alt="" />
          <div
            style={{
              color: "#8a8a8a",
              fontSize: 28,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 92,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            Kadir Kasim
          </div>
          <div
            style={{
              color: "#8a8a8a",
              fontSize: 34,
              lineHeight: 1.35,
              maxWidth: 820,
            }}
          >
            Websites, apps, and games — built end to end.
          </div>
        </div>
        <div style={{ color: "#5c5c5c", fontSize: 24 }}>kadirkasim.com</div>
      </div>
    ),
    { ...size },
  );
}
