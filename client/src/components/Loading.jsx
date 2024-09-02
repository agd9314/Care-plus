import medvid from '../assets/Male patient medical record.mp4'
import React from 'react';

const Example = () => {
  return (
    <div>
      <CutoutTextLoader
        height="100vh"
        background="white"
        // Use an online medical GIF for the background
        imgUrl="https://i.makeagif.com/media/9-19-2021/7MdxBZ.gif" // Example GIF URL
      />
    </div>
  );
};

const CutoutTextLoader = ({
  height,
  background,
  imgUrl,
}) => {
  return (
    <div className="relative" style={{ height }}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        style={{ background }}
        className="absolute inset-0 animate-pulse z-10"
      />
      <span
        className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontSize: "clamp(3rem, 12vw, 10rem)",
          lineHeight: height,
        }}
      >
        CARE +
      </span>
    </div>
  );
};

export default Example;
