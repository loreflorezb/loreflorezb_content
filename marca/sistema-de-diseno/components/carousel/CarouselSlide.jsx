import React from "react";

const BG = { blush: "var(--ig-blush)", salmon: "var(--ig-salmon)", paper: "var(--ig-paper)" };
const META = { blush: "var(--ig-meta-blush)", salmon: "var(--ig-meta-salmon)", paper: "var(--ig-meta-paper)" };

function MetaRow({ series, label, handle, color, style }) {
  const t = { fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "var(--ig-size-meta)", letterSpacing: "-0.03em", textTransform: "uppercase", color, whiteSpace: "nowrap" };
  return (
    <div style={{ position: "absolute", left: 109, right: 109, display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 3, ...style }}>
      <span style={t}>{series}</span><span style={t}>{label}</span><span style={t}>{handle}</span>
    </div>
  );
}

export function CarouselSlide({ children, background = "blush", backgroundImage, series = "Serie 1/7", label = "Psicóloga cristiana", handle = "@loreflorezb", meta = true, metaColor, align = "center", justify = "center", padding = "250px 109px 240px", width = 1080, height = 1440, style }) {
  const color = metaColor || META[background] || "var(--ig-meta-blush)";
  return (
    <div style={{
      position: "relative", width, height, overflow: "hidden", boxSizing: "border-box",
      background: BG[background] || background,
      backgroundImage: backgroundImage ? "url(" + backgroundImage + ")" : undefined,
      backgroundSize: "cover", backgroundPosition: "center",
      display: "flex", flexDirection: "column", alignItems: align, justifyContent: justify,
      padding, gap: 34, isolation: "isolate", fontFamily: "var(--font-body)", color: "var(--ig-wine)", ...style
    }}>
      {meta ? <MetaRow series={series} label={label} handle={handle} color={color} style={{ top: 104 }} /> : null}
      {children}
      {meta ? <MetaRow series={series} label={label} handle={handle} color={color} style={{ bottom: 104 }} /> : null}
    </div>
  );
}
