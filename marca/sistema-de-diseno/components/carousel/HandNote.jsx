import React from "react";

export function HandNote({ children, size = "var(--ig-size-hand)", color = "var(--ig-raspberry)", uppercase = false, align = "left", maxWidth = 820, style }) {
  return (
    <p style={{
      margin: 0, fontFamily: "var(--font-hand)", fontSize: size, lineHeight: "var(--ig-leading-hand)",
      letterSpacing: "var(--ig-tracking-hand)", color, textAlign: align, maxWidth,
      textTransform: uppercase ? "uppercase" : "none", textWrap: "pretty", ...style
    }}>{children}</p>
  );
}
