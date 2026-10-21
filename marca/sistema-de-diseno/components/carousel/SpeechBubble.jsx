import React from "react";

export function SpeechBubble({ children, color = "var(--ig-terracotta)", textColor = "var(--ig-tape)", size = 54, width = 480, style }) {
  return (
    <div style={{
      width, aspectRatio: "1.2", background: color, color: textColor,
      borderRadius: "50% 50% 4% 50% / 50% 50% 4% 50%", display: "flex", alignItems: "center",
      padding: "0 48px", boxSizing: "border-box", fontFamily: "var(--font-hand)", fontSize: size,
      lineHeight: 1.12, letterSpacing: "var(--ig-tracking-hand)", ...style
    }}>{children}</div>
  );
}
