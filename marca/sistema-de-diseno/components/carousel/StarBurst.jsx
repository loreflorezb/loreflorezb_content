import React from "react";

const BASE = "../../assets/illustrations/star-8pt-";

export function StarBurst({ size = 260, tone = "blush", rotate = 0, base = BASE, style }) {
  return <img aria-hidden="true" alt="" src={base + tone + ".png"} style={{ display: "block", width: size, height: size, transform: "rotate(" + rotate + "deg)", pointerEvents: "none", ...style }} />;
}
