//@ts-nocheck
import { useState } from "react";
import { Circles } from "./Circles";

//Helper functions
function padTime(time: number) {
  return time.toString().padStart(2, "0");
}

export type ChronoProps = {
  time?: number;
  title?: string;
  play?: boolean;
};

export default function Chrono({ time, title, play }: ChronoProps) {
  const [timeLeft, setTimeLeft] = useState(time);
  const [isRunning, setIsRunning] = useState(false);

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  const percentage = (timeLeft * 100) / time;

  function startTimer() {
    setIsRunning(true);
    setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) {
          return timeLeft - 1;
        }

        return 0;
      });
      // setTimeLeft(timeLeft -1)
    }, 1000);
    setTimeout(() => setIsRunning(false), time * 1000);
    //setTimeout(() => setTimeLeft(time), time * 1000);
  }

  function resetTimer() {
    setTimeLeft(time);
  }
  return (
    <div
      onClick={timeLeft === 0 ? resetTimer : startTimer}
      className="relative flex h-full w-full items-center justify-center text-white hover:cursor-pointer"
    >
      <div className="absolute top-20 mt-1 flex justify-center text-4xl font-extrabold">
        {timeLeft === time && <>Start</>}
        {time > timeLeft && timeLeft > 0 && (
          <>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
          </>
        )}
        {timeLeft === 0 && <>Restart</>}
      </div>
      <Circles percentage={percentage} colour="#5856FF" />
      <div className="absolute top-14 mt-1 flex justify-center text-sm text-primary">
        {title}
      </div>
    </div>
  );
}
