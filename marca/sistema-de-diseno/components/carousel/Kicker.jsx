import React from "react";

export function Kicker({ children, size = "var(--ig-size-kicker)", color = "var(--plum-900)", uppercase = true, style }) {
  return (
    <div style={{
      fontFamily: "var(--font-body)", fontWeight: 700, fontSize: size, lineHeight: 0.95,
      letterSpacing: "var(--ig-tracking-kicker)", color, textTransform: uppercase ? "uppercase" : "none",
      marginBottom: "-0.3em", position: "relative", zIndex: 1, ...style
    }}>{children}</div>
  );
}
