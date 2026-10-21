import React from "react";

export function Signature({ handle = "@loreflorezb", role = "Psicóloga cristiana", size = 12, color = "var(--size-footer)", align = "center", style }) {
  return (
    <div style={{ display: "flex", gap: "0.5em", alignItems: "baseline", justifyContent: align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start", fontFamily: "var(--font-body)", fontSize: size, color, ...style }}>
      <span style={{ fontWeight: "var(--weight-semibold)" }}>{handle}</span>
      <span style={{ fontWeight: "var(--weight-regular)", opacity: 0.85 }}>{role}</span>
    </div>
  );
}
