import React from "react";

const TONE = {
  peach: { bg: "var(--ig-peach-box)", text: "var(--ig-rosewood)" },
  lavender: { bg: "var(--ig-lavender)", text: "var(--white)" }
};

export function VerseBox({ children, reference, tone = "peach", size = "var(--ig-size-body)", maxWidth = 760, style }) {
  const t = TONE[tone] || TONE.peach;
  return (
    <figure style={{ margin: 0, background: t.bg, color: t.text, borderRadius: 32, padding: "40px 28px 30px", maxWidth, boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 18, ...style }}>
      <blockquote style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 400, fontSize: size, lineHeight: "var(--ig-leading-body)", letterSpacing: "var(--ig-tracking-body)", textWrap: "pretty" }}>"{children}"</blockquote>
      {reference ? <figcaption style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "calc(" + (typeof size === "number" ? size + "px" : size) + " * 1.2)", letterSpacing: "var(--ig-tracking-kicker)", lineHeight: 1 }}>{reference}</figcaption> : null}
    </figure>
  );
}
