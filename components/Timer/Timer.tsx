import React, { useState, useEffect } from "react";
export type TimerProps = {
  duration: number;
  playPauseClick: boolean;
  onIsRunningChange: (newIsRunning: boolean) => void;
};

const Timer = ({ duration, playPauseClick, onIsRunningChange }: TimerProps) => {
  const [time, setTime] = useState(duration);
  const [isRunning, setIsRunning] = useState(playPauseClick);

  useEffect(() => {
    setIsRunning(playPauseClick);
  }, [playPauseClick]);

  useEffect(() => {
    let timer: any;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      setIsRunning(false);
      setTime(duration);
    }

    // Appeler la fonction de rappel lorsque isRunning change
    onIsRunningChange(isRunning);

    return () => clearInterval(timer);
  }, [isRunning, time, duration, onIsRunningChange]);

  const formatTime = (time: any) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="font-krona text-4xl text-primary">{formatTime(time)}</div>
      <div className="relative min-h-[2px] w-full overflow-hidden rounded-full">
        <div className="h-2 min-h-[2px] w-full bg-black-dark " />
        <div
          className="absolute top-0 left-0 h-2 min-h-[2px] bg-primary"
          style={{ width: `${((duration - time) / duration) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Timer;
