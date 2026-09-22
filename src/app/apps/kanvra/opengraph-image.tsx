import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { getProduct } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Kanvra";

export default async function OpenGraphImage() {
  const product = getProduct("kanvra", "en");
  const iconFile = await readFile(path.join(process.cwd(), "public", product.icon.replace(/^\//, "")));
  const icon = `data:image/png;base64,${iconFile.toString("base64")}`;

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
              "radial-gradient(ellipse at 80% 20%, rgba(59,130,246,0.18), transparent 50%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              color: "#5c5c5c",
              fontSize: 24,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            App · Kadir Kasim
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={icon}
            width={160}
            height={160}
            alt=""
            style={{ borderRadius: 36, border: "1px solid #1c1c1c" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 780 }}>
            <div
              style={{
                color: "#ffffff",
                fontSize: 84,
                fontWeight: 600,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
              }}
            >
              {product.title}
            </div>
            <div style={{ color: "#8a8a8a", fontSize: 32, lineHeight: 1.4 }}>
              {product.tagline}
            </div>
          </div>
        </div>
        <div style={{ color: "#5c5c5c", fontSize: 24 }}>kadirkasim.com/apps/kanvra</div>
      </div>
    ),
    { ...size },
  );
}
