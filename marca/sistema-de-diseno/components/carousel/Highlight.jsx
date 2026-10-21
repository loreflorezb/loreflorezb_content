import React from "react";

export function Highlight({ children, color = "var(--ig-highlight)", style }) {
  return <mark style={{ background: color, color: "inherit", padding: "0 0.08em", boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone", ...style }}>{children}</mark>;
}
