import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = `${profile.name} | ${profile.title}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          color: "#f5f5f7",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 40,
          }}
        >
          <div style={{ width: 4, height: 90, backgroundColor: "#f5f5f7" }} />
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -2,
            }}
          >
            {`${profile.name}.`}
          </div>
          <div style={{ width: 4, height: 90, backgroundColor: "#f5f5f7" }} />
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#86868b",
            textTransform: "uppercase",
            letterSpacing: 10,
          }}
        >
          {profile.title}
        </div>
        <div style={{ fontSize: 28, color: "#86868b", marginTop: 16 }}>
          {profile.slogan}
        </div>
      </div>
    ),
    { ...size }
  );
}
