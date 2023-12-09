// MainContainer.jsx
import React from "react";
import { useFindTrailer } from "../hooks/MovieTrailer";

import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  // Use the custom hook directly
  useFindTrailer();

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
