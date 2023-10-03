import React from "react";
import Lottie from "react-lottie";
import animationData from "./66205-coding.json";

function CodeAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} width={500} height={500} />;
}

export default CodeAnimation;
