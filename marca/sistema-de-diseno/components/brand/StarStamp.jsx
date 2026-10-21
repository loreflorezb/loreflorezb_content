import React from "react";

const SRC = {
  textured: "../../assets/illustrations/star-textured.png",
  outline: "../../assets/illustrations/star-outline.png"
};

export function StarStamp({ variant = "textured", size = 56, rotate = -14, opacity = 1, src, style }) {
  return (
    <img
      src={src || SRC[variant]}
      alt=""
      aria-hidden="true"
      style={{ width: size, height: "auto", transform: `rotate(${rotate}deg)`, opacity, pointerEvents: "none", ...style }}
    />
  );
}
