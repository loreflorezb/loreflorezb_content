import React from "react";

export function CarouselText({ children, size = "var(--ig-size-body)", color = "var(--ig-wine)", align = "left", maxWidth = 820, style }) {
  return (
    <p style={{
      margin: 0, fontFamily: "var(--font-body)", fontWeight: 400, fontSize: size,
      lineHeight: "var(--ig-leading-body)", letterSpacing: "var(--ig-tracking-body)",
      color, textAlign: align, maxWidth, textWrap: "pretty", ...style
    }}>{children}</p>
  );
}
