import React from "react";

const TONE = {
  pink: { fill: "var(--sticker-fill)", text: "var(--sticker-text)" },
  rose: { fill: "var(--sticker-fill-alt)", text: "var(--white)" },
  plum: { fill: "var(--plum-900)", text: "var(--pink-50)" },
  coral: { fill: "var(--coral-500)", text: "var(--plum-900)" }
};

export function StickerLabel({ children, tone = "pink", tilt = "var(--tilt-sticker)", size = "var(--size-label)", uppercase = true, as: Tag = "div", style }) {
  const t = TONE[tone] || TONE.pink;
  return (
    <Tag style={{
      display: "inline-block", background: t.fill, color: t.text,
      fontFamily: "var(--font-display)", fontWeight: "var(--weight-extrabold)",
      fontSize: size, lineHeight: "var(--leading-snug)",
      textTransform: uppercase ? "uppercase" : "none",
      letterSpacing: uppercase ? "var(--tracking-label)" : "var(--tracking-normal)",
      padding: "var(--space-3) var(--space-5)", borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-hard-sm)", transform: `rotate(${tilt})`,
      ...style
    }}>{children}</Tag>
  );
}
