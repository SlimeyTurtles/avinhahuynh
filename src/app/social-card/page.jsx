import CardContent, { cardWidth, cardHeight } from "./CardContent";

export const metadata = {
  title: "Social Card Preview",
  robots: { index: false, follow: false },
};

export default function SocialCardPreview() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1a1a1a",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 24,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ color: "#aaa", fontSize: 14, textAlign: "center", maxWidth: 700 }}>
        Preview at exact social-card dimensions ({cardWidth}×{cardHeight}).
        The PNG is generated at <code style={{ color: "#fff" }}>/social-card/og</code> and
        saved to <code style={{ color: "#fff" }}>/public/social-preview.png</code>.
      </div>
      <div
        style={{
          width: cardWidth,
          height: cardHeight,
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
          border: "1px solid #333",
        }}
      >
        <CardContent headshotSrc="/headshot-og.jpg" />
      </div>
      <div style={{ color: "#777", fontSize: 13 }}>
        <a href="/social-card/og" style={{ color: "#fb923c" }}>
          View generated PNG →
        </a>
      </div>
    </div>
  );
}
