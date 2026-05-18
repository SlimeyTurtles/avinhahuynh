export const cardWidth = 1200;
export const cardHeight = 630;

const focusAreas = [
  {
    tag: "MACHINE LEARNING",
    color: "#6d28d9",
    bar: "#8b5cf6",
    text: "Research at SFSU RADLab with Dr. Suri, applying ML to study how the brain represents semantic memory.",
  },
  {
    tag: "DEVOPS",
    color: "#c2410c",
    bar: "#f97316",
    text: "Systems engineer at Arch Insurance, building cloud automation and internal web tools.",
  },
  {
    tag: "FULL STACK",
    color: "#047857",
    bar: "#10b981",
    text: "Solving problems in my day-to-day, and crafting customizable UX/UI that enhances client offerings.",
  },
];

export default function CardContent({ headshotSrc, scale = 1 }) {
  const s = (n) => n * scale;
  return (
    <div
      style={{
        width: cardWidth * scale,
        height: cardHeight * scale,
        display: "flex",
        flexDirection: "column",
        backgroundImage:
          "linear-gradient(135deg, hsl(28, 90%, 92%) 0%, hsl(30, 75%, 94%) 55%, hsl(30, 60%, 97%) 100%)",
        padding: `${s(32)}px ${s(60)}px ${s(40)}px`,
        fontFamily: "Inter",
        color: "hsl(20, 14%, 11%)",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: s(40),
          flex: 1,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1, alignSelf: "stretch" }}>
          <div
            style={{
              fontSize: s(76),
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              marginBottom: s(14),
            }}
          >
            Avinh Huynh
          </div>
          <div
            style={{
              fontSize: s(28),
              color: "hsl(20, 14%, 30%)",
              lineHeight: 1.35,
              marginBottom: 0,
              maxWidth: s(720),
              display: "flex",
            }}
          >
            {"Systems engineer at Arch Insurance · Full Stack Developer · Applied ML Researcher at SFSU RADLab"}
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
          <div style={{ display: "flex", flexDirection: "column", gap: s(22) }}>
            {focusAreas.map((a) => (
              <div
                key={a.tag}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: s(20),
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: s(10),
                    width: s(240),
                    height: s(30),
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: s(16),
                      height: s(2),
                      backgroundColor: a.bar,
                      display: "flex",
                    }}
                  />
                  <div
                    style={{
                      fontSize: s(17),
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      color: a.color,
                      lineHeight: 1,
                      display: "flex",
                    }}
                  >
                    {a.tag}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: s(22),
                    color: "hsl(20, 14%, 20%)",
                    lineHeight: 1.4,
                    display: "flex",
                    flex: 1,
                  }}
                >
                  {a.text}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>

        <div
          style={{
            width: s(220),
            height: s(220),
            display: "flex",
            flexShrink: 0,
            alignSelf: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={headshotSrc}
            alt="Avinh Huynh"
            width={s(220)}
            height={s(220)}
            style={{
              width: s(220),
              height: s(220),
              objectFit: "cover",
              borderRadius: 9999,
              boxShadow: "0 24px 60px -20px rgba(234, 88, 12, 0.45)",
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: s(22),
          color: "hsl(20, 14%, 35%)",
        }}
      >
        <div style={{ display: "flex", fontWeight: 600, color: "hsl(22, 95%, 45%)" }}>
          avinh.net
        </div>
        <div style={{ display: "flex" }}>
          github.com/SlimeyTurtles  ·  linkedin.com/in/avinh-huynh
        </div>
      </div>
    </div>
  );
}
