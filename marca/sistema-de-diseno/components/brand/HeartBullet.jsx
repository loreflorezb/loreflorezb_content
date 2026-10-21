import React from "react";

const SRC = {
  light: "../../assets/icons/heart-light.png",
  magenta: "../../assets/icons/heart-magenta.png"
};

export function HeartBullet({ tone = "magenta", size = 16, style }) {
  return <img src={SRC[tone]} alt="" aria-hidden="true" style={{ width: size, height: size, flex: "0 0 auto", ...style }} />;
}
