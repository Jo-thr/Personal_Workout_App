//@ts-nocheck
import Chrono from "@components/Chrono/Chrono";
import { Circles } from "@components/Chrono/Circles";
import { Stats } from "@components/Stats/Stats";
import {
  ArrowPathIcon,
  FireIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import ctl from "@netlify/classnames-template-literals";
import { useState } from "react";

//Helper functions
function padTime(time: number) {
  return time.toString().padStart(2, "0");
}

export type BottomStepProps = {
  tab: Record<string, any>;
};

export const BottomStep = ({ tab }: BottomStepProps) => {
  const time = tab.duration.time;
  const [timeLeft, setTimeLeft] = useState(time);
  const [isRunning, setIsRunning] = useState(false);

  console.log(tab);

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
    setIsRunning(true);
  }

  return (
    <>
      {/* TIMER */}
      <div className="relative flex h-52 w-52">
        {tab?.duration?.time && (
          <div
            onClick={timeLeft === 0 ? resetTimer : startTimer}
            className="relative flex h-full w-full items-center justify-center text-white hover:cursor-pointer"
          >
            <div className="absolute top-20 mt-1 flex justify-center text-4xl font-extrabold">
              {timeLeft === tab.duration.time && <>Start</>}
              {tab.duration.time > timeLeft && (
                <>
                  <span>{minutes}</span>
                  <span>:</span>
                  <span>{seconds}</span>
                </>
              )}
            </div>
            <Circles percentage={percentage} colour="#5856FF" />
            <div className="absolute top-14 mt-1 flex justify-center text-sm text-primary">
              {tab.duration.object}
            </div>
          </div>
        )}
        {tab?.rest && <Chrono time={tab.rest?.time} title={tab.rest?.object} />}
      </div>
      {/* STATS */}
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-3">
        {tab?.repetition && (
          <>
            {tab.repetition.map((item, index) => (
              <Stats
                key={index}
                object={item?.object}
                icon={"fire"}
                number={item?.number}
                mesure={item?.mesure}
              />
            ))}
          </>
        )}
        {tab?.duration && (
          <Stats
            object={tab.duration?.object}
            icon={"time"}
            number={tab.duration?.time}
            mesure={tab.duration?.mesure}
          />
        )}
        {tab?.rest && (
          <Stats
            object={tab.rest?.object}
            icon={"rest"}
            number={tab.rest?.time}
            mesure={tab.rest?.mesure}
          />
        )}
      </div>
      {/* BUTTON */}
      <div
        onClick={timeLeft === 0 ? resetTimer : startTimer}
        className={ctl(
          `flex h-10 w-full items-center justify-center gap-2 rounded-lg text-sm font-extrabold text-white
      ${
        tab.duration.time > timeLeft && timeLeft > 0 ? "bg-gray" : "bg-primary"
      }`
        )}
      >
        {timeLeft === tab.duration.time && (
          <>
            START <PlayCircleIcon className="h-5 w-5" />
          </>
        )}
        {tab.duration.time > timeLeft && timeLeft > 0 && (
          <>
            GO GO GO <FireIcon className="h-5 w-5" />
          </>
        )}
        {timeLeft === 0 && (
          <>
            RESTART <ArrowPathIcon className="h-5 w-5" />
          </>
        )}
      </div>
    </>
  );
};
