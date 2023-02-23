import React, { useRef, useEffect } from "react";

type Props = {
  src: string;
};

const Video: React.FC<Props> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.autoplay = true;
    video.loop = true;
  }, []);

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full object-cover"
        src={src}
        autoPlay
      />
    </div>
  );
};

export default Video;
