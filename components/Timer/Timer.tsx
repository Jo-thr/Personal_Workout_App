//@ts-nocheck
import { useRef, useState } from "react";
import Pie, { MobilePie } from "./Pie";

//Helper functions
function padTime(time: number) {
  return time.toString().padStart(2, "0");
}

export type TimerProps = {
  time?: number;
  title?: string;
};

export default function Timer({ time, title }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(time);
  const [isRunning, setIsRunning] = useState(false);

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

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
    setIsRunning(true);
  }

  return (
    <div className="relative flex justify-center -mt-2 md:mt-5 w-52">
      <div className="absolute top-20 mt-1 flex justify-center text-xl">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className="absolute hidden md:flex justify-center top-0 w-full">
        <Pie percentage={(timeLeft * 100) / time} colour="#BBF247" />
      </div>
      <div className="absolute flex md:hidden justify-center top-0 w-full">
        <MobilePie percentage={(timeLeft * 100) / time} colour="#BBF247" />
      </div>
      <div className="relative mt-12 w-full buttons flex justify-between">
        {!isRunning && (
          <button
            className="absolute hover:cursor-pointer left-[50%] leading-4 uppercase font-bold top-9 -translate-x-[50%] bg-black px-3"
            onClick={startTimer}
          >
            Start
            <br />
            <span className="text-sm text-accent lowercase">{title}</span>
          </button>
        )}
        {timeLeft === 0 && (
          <button
            className="absolute left-[50%] hover:cursor-pointer py-4 uppercase top-6 font-bold -translate-x-[50%] bg-black px-1 md:px-5"
            onClick={resetTimer}
          >
            Replay
          </button>
        )}
      </div>
    </div>
  );
}
