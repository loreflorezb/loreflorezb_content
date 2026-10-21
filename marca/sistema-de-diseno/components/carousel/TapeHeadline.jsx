import React from "react";

const TONE = {
  cream: { tape: "var(--ig-tape)", ink: "var(--ig-lavender)" },
  lavender: { tape: "var(--ig-lavender)", ink: "var(--ig-tape)" },
  none: { tape: "transparent", ink: "var(--ig-lavender)" }
};

export function TapeHeadline({ lines = [], tone = "cream", size = "var(--ig-size-headline)", tilt = -1.2, align = "center", color, style }) {
  const t = TONE[tone] || TONE.cream;
  const taped = tone !== "none";
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: align, gap: 0, transform: "rotate(" + (taped ? tilt : 0) + "deg)", ...style }}>
      {lines.map((l, i) => (
        <span key={i} style={{
          display: "block", background: t.tape, color: color || t.ink,
          fontFamily: "var(--font-headline)", fontSize: size, lineHeight: "var(--ig-leading-headline)",
          textTransform: "uppercase", letterSpacing: "-0.01em", whiteSpace: "nowrap",
          padding: taped ? "0.1em 0.14em 0.04em" : 0,
          marginLeft: taped && i % 2 ? "-0.12em" : 0,
          transform: taped && i % 2 ? "rotate(0.6deg)" : "none"
        }}>{l}</span>
      ))}
    </div>
  );
}
