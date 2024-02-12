// @ts-nocheck

import ProgressBar from "@components/ProgressBar/ProgressBar";
import Timer from "@components/Timer/Timer";
import datas from "@data/datas";
import Placeholder from "@public/placeholder.jpg";
import { Check, ChevronLeft, Info, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function WorkPage() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [idSelected, setIdSelected] = useState(1);
  const handlePrevClick = () => {
    if (idSelected > 1) {
      setIdSelected(idSelected - 1);
    }
  };

  const [data] = datas.workouts.filter(
    (work) => work.slug === router.query.slug
  );

  const handleNextClick = () => {
    if (idSelected < data.works.length) {
      setIdSelected(idSelected + 1);
    }
  };
  const [playPauseState, setPlayPauseState] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const handlePlayPauseClick = () => {
    setPlayPauseState((prevState) => !prevState);
  };
  const handleIsRunningChange = (newIsRunning: boolean) => {
    setIsRunning(newIsRunning);
  };

  return (
    <>
      {data?.works
        .filter((item) => item.id === idSelected)
        .map((work) => (
          <div
            key={work.id}
            className="relative mx-auto flex h-screen min-h-screen w-full max-w-3xl flex-col items-center justify-between overflow-hidden bg-black-light"
          >
            <button
              onClick={handleBack}
              className="absolute top-4 left-4 z-30 rounded-full bg-black-base p-2"
            >
              <ChevronLeft className="mr-px h-6 w-6" />
            </button>
            <div className="absolute top-[41%] z-20 h-40 w-full bg-gradient-to-t from-black-base to-transparent" />

            {/* IMAGE / VIDEO / GIF */}
            <div className="relative top-0 z-10 h-[56%] w-full">
              <Image
                src={work?.image?.src || Placeholder}
                alt=""
                priority
                quality={50}
                fill={true}
                className="relative z-0 h-full w-full bg-cover bg-bottom bg-no-repeat object-cover"
              />
            </div>

            <div className="absolute bottom-0 z-20 aspect-square w-full rounded-t-3xl bg-black-base shadow-lg">
              <ProgressBar
                current={idSelected}
                total={data?.works.length}
                className={"absolute -top-16 left-[5%] z-20 w-[90%]"}
              />
              {work.repetition || work.timer ? (
                <div
                  className={`flex h-full w-full flex-col justify-between px-6 py-10`}
                >
                  {/* MAIN INFO */}
                  <div className="flex flex-row items-center justify-between">
                    <h2>{work.name}</h2>
                    <Info />
                  </div>
                  {/* TIMER AND REPS */}
                  {work.repetition && work.timer ? (
                    <div className="flex flex-col gap-2">
                      {work.timer && (
                        <Timer
                          duration={work.timer}
                          playPauseClick={playPauseState}
                          onIsRunningChange={handleIsRunningChange}
                        />
                      )}
                      <div className="mt-4 flex w-full flex-row items-center justify-center gap-4">
                        <div className="text-center font-krona text-2xl text-primary">
                          X{work.repetition}
                        </div>
                        {work.object && (
                          <div className="text-center font-krona">
                            {work.object}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      {work.repetition && (
                        <div className="text-center font-krona text-4xl text-primary">
                          X{work.repetition}
                        </div>
                      )}
                      {work.timer && (
                        <Timer
                          duration={work.timer}
                          playPauseClick={playPauseState}
                          onIsRunningChange={handleIsRunningChange}
                        />
                      )}
                      {work.object && (
                        <div className="text-center font-krona">
                          {work.object}
                        </div>
                      )}
                    </div>
                  )}
                  {/* CONTROLS */}
                  <div className="flex flex-row items-center justify-center font-krona text-xs">
                    <button
                      className={`${
                        idSelected === 1
                          ? "text-black-dark"
                          : "text-white-light"
                      } py-10 px-16`}
                      onClick={handlePrevClick}
                    >
                      Prev
                    </button>
                    {work.timer ? (
                      <button
                        className="rounded-lg bg-primary p-6 text-black-base"
                        onClick={handlePlayPauseClick}
                      >
                        {isRunning ? <Pause /> : <Play />}
                      </button>
                    ) : (
                      <button
                        className="rounded-lg bg-primary p-6 text-black-base"
                        onClick={handleNextClick}
                      >
                        <Check />
                      </button>
                    )}
                    <button
                      className={`${
                        idSelected === data.works.length
                          ? "text-black-dark"
                          : "text-white-light"
                      } py-10 px-16`}
                      onClick={handleNextClick}
                    >
                      Next
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-6">
                  <div className="font-krona text-4xl text-primary">💪</div>
                  <div className="text-center font-krona text-5xl text-primary">
                    {work.name}
                  </div>
                  <button
                    onClick={handleBack}
                    className="flex flex-row items-center rounded-full bg-black-base p-2"
                  >
                    <ChevronLeft className="mr-px h-6 w-6" /> Retour à l'accueil
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
    </>
  );
}
