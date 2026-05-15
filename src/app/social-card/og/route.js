import { ImageResponse } from "next/og";
import CardContent, { cardWidth, cardHeight } from "../CardContent";

export const runtime = "nodejs";

async function loadInter(weight) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&display=swap`,
    { headers: { "User-Agent": "Mozilla/5.0" } },
  ).then((r) => r.text());
  const match = css.match(/src: url\((https:\/\/[^)]+\.(?:woff2|ttf|otf))\)/);
  if (!match) return null;
  return await fetch(match[1]).then((r) => r.arrayBuffer());
}

export async function GET(request) {
  const url = new URL(request.url);
  const origin = url.origin;
  const headshotSrc = `${origin}/headshot-og.jpg`;
  const scale = Number(url.searchParams.get("scale") || 2);

  const [regular, semibold, bold] = await Promise.all([
    loadInter(400),
    loadInter(600),
    loadInter(700),
  ]);

  const fonts = [
    regular && { name: "Inter", data: regular, weight: 400, style: "normal" },
    semibold && { name: "Inter", data: semibold, weight: 600, style: "normal" },
    bold && { name: "Inter", data: bold, weight: 700, style: "normal" },
  ].filter(Boolean);

  return new ImageResponse(
    <CardContent headshotSrc={headshotSrc} scale={scale} />,
    {
      width: cardWidth * scale,
      height: cardHeight * scale,
      fonts,
    },
  );
}
