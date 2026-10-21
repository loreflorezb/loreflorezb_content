import React from "react";

export function CTABlock({ headline, body, note, tone = "plum", align = "left", style }) {
  const dark = tone === "plum";
  return (
    <section style={{
      background: dark ? "var(--plum-900)" : "var(--pink-300)",
      color: dark ? "var(--text-on-dark)" : "var(--plum-900)",
      borderRadius: "var(--radius-xl)", padding: "var(--space-8)", textAlign: align,
      display: "flex", flexDirection: "column", gap: "var(--space-3)", ...style
    }}>
      <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: "var(--weight-extrabold)", fontSize: "var(--size-lead)", lineHeight: "var(--leading-snug)", textTransform: "uppercase", letterSpacing: "var(--tracking-tight)" }}>{headline}</h3>
      {body ? <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "var(--size-body)", lineHeight: "var(--leading-normal)", textWrap: "pretty" }}>{body}</p> : null}
      {note ? <p style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)", fontSize: "var(--size-body-sm)", color: dark ? "var(--pink-300)" : "var(--magenta-900)" }}>{note}</p> : null}
    </section>
  );
}
