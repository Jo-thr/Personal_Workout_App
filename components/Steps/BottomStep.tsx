//@ts-nocheck
import { Circles, DoubleCircles } from "@components/Circles/Circles";
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
  const WorkTime = tab.duration?.time;
  const RestTime = tab.rest?.time;

  const [timeLeft, setTimeLeft] = useState(WorkTime);
  const [restTimeLeft, setRestTimeLeft] = useState(RestTime);

  const [isRunning, setIsRunning] = useState(false);
  const [isRestRunning, setIsRestRunning] = useState(false);

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);
  const percentage = (timeLeft * 100) / WorkTime;

  const restMinutes = padTime(Math.floor(restTimeLeft / 60));
  const restSeconds = padTime(restTimeLeft - restMinutes * 60);
  const restPercentage = (restTimeLeft * 100) / RestTime;

  function startWorkTimer() {
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
    setTimeout(() => setIsRunning(false), WorkTime * 1000);
    //setTimeout(() => setTimeLeft(time), time * 1000);
  }

  function resetWorkTimer() {
    setTimeLeft(WorkTime);
    setIsRunning(true);
  }

  function startRestTimer() {
    setIsRunning(true);
    setInterval(() => {
      setRestTimeLeft((restTimeLeft) => {
        if (restTimeLeft >= 1) {
          return restTimeLeft - 1;
        }

        return 0;
      });
      // setTimeLeft(timeLeft -1)
    }, 1000);
    setTimeout(() => setIsRestRunning(false), RestTime * 1000);
    //setTimeout(() => setTimeLeft(time), time * 1000);
  }

  function resetRestTimer() {
    setTimeLeft(RestTime);
    setIsRestRunning(true);
  }

  return (
    <>
      {/* TIMER */}
      <div className="relative flex h-52 w-full ">
        {tab?.duration?.time && (
          <div
            onClick={timeLeft === 0 ? resetWorkTimer : startWorkTimer}
            className="relative mx-auto flex h-full w-52 min-w-[50%] items-center justify-center text-white hover:cursor-pointer"
          >
            <div className="absolute top-20 mt-1 flex items-center justify-center text-4xl font-extrabold">
              {timeLeft === tab.duration.time && (
                <>
                  <span>{minutes}</span>
                  <span>:</span>
                  <span>{seconds}</span>
                </>
              )}
              {tab.duration.time > timeLeft && (
                <>
                  <span>{minutes}</span>
                  <span>:</span>
                  <span>{seconds}</span>
                </>
              )}
            </div>
            {tab.duration?.time && tab.rest?.time ? (
              <div className="relative flex h-full w-full items-center justify-center">
                <DoubleCircles percentage={percentage} colour="#5856FF" />
              </div>
            ) : (
              <Circles percentage={percentage} colour="#5856FF" />
            )}
            <div className="absolute top-14 mt-3 flex justify-center text-xs !text-primary">
              {tab.duration.object}
            </div>
          </div>
        )}
        {tab?.rest && (
          <div
            onClick={restTimeLeft === 0 ? resetRestTimer : startRestTimer}
            className="relative mx-auto flex h-full w-52 min-w-[50%] items-center justify-center text-white hover:cursor-pointer"
          >
            <div className="absolute top-20 mt-1 flex items-center justify-center text-4xl font-extrabold">
              {restTimeLeft === tab.rest.time && (
                <>
                  <span>{restMinutes}</span>
                  <span>:</span>
                  <span>{restSeconds}</span>
                </>
              )}
              {tab.rest.time > restTimeLeft && (
                <>
                  <span>{restMinutes}</span>
                  <span>:</span>
                  <span>{restSeconds}</span>
                </>
              )}
            </div>
            {tab.duration?.time && tab.rest?.time ? (
              <DoubleCircles percentage={restPercentage} colour="#65B1AD" />
            ) : (
              <Circles percentage={restPercentage} colour="#65B1AD" />
            )}
            <div className="absolute top-14 mt-3 flex justify-center text-xs !text-secondary">
              {tab.rest.object}
            </div>
          </div>
        )}
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
      <div className="flex w-full flex-row gap-3">
        {tab.duration && (
          <div
            onClick={timeLeft === 0 ? resetWorkTimer : startWorkTimer}
            className={ctl(
              `flex h-10 w-full items-center justify-center gap-2 rounded-lg text-sm font-extrabold text-white
      ${
        tab.duration.time > timeLeft && timeLeft > 0 ? "bg-gray" : "!bg-primary"
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
        )}
        {tab.rest && (
          <div
            onClick={restTimeLeft === 0 ? resetRestTimer : startRestTimer}
            className={ctl(
              `flex h-10 w-full items-center justify-center gap-2 rounded-lg text-sm font-extrabold text-white
      ${
        tab.rest.time > restTimeLeft && restTimeLeft > 0
          ? "bg-gray"
          : "!bg-secondary"
      }`
            )}
          >
            {restTimeLeft === tab.rest.time && (
              <>
                START <PlayCircleIcon className="h-5 w-5" />
              </>
            )}
            {tab.rest.time > restTimeLeft && restTimeLeft > 0 && (
              <>
                GO GO GO <FireIcon className="h-5 w-5" />
              </>
            )}
            {restTimeLeft === 0 && (
              <>
                RESTART <ArrowPathIcon className="h-5 w-5" />
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};
