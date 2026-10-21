import React from "react";

const SRC = {
  community: "../../assets/illustrations/hearts-community.png",
  armchairs: "../../assets/illustrations/hearts-armchairs.png",
  running: "../../assets/illustrations/heart-running.png",
  "heart-arrows": "../../assets/illustrations/heart-arrows.png",
  eva: "../../assets/illustrations/eva-sticker.png",
  "man-arms-crossed": "../../assets/illustrations/man-arms-crossed.png",
  "woman-hands-face": "../../assets/illustrations/woman-hands-face.png"
};

export function Illustration({ name = "community", width = "100%", src, alt = "", style }) {
  return <img src={src || SRC[name]} alt={alt} style={{ width, height: "auto", display: "block", ...style }} />;
}
