//@ts-nocheck
import cn from "clsx";
import { Key, useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { BottomStep } from "./BottomStep";

export type StepProps = {
  tabs: Record<string, any>[];
  title: string;
};

export const Step = ({ tabs }: StepProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const dataLength = tabs?.length;

  const handleClickedMore = () => {
    if (activeTab === dataLength) {
      setActiveTab(activeTab + 0);
    } else {
      setActiveTab(activeTab + 1);
    }
  };
  const handleClickedLess = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
    } else {
      setActiveTab(activeTab + 0);
    }
  };

  return (
    <>
      {tabs?.map((tab) => (
        <div
          key={tab.name}
          className={cn(
            `h-screen w-full flex-col items-center justify-center overflow-hidden ${
              tab.id === activeTab ? "flex" : "hidden"
            }`
          )}
        >
          {/* TOP INFORMATIONS */}
          <div className="relative flex h-1/2 w-full bg-orange-100">
            {/* BACK HOME */}
            <Link
              href="/"
              className="absolute top-0 z-20 w-max items-center p-10 text-dark-gray hover:cursor-pointer "
            >
              <ArrowLeftCircleIcon className="h-8 w-8" />
            </Link>
            {/* INFO */}
            <div className="absolute bottom-0 z-20 flex w-full items-center p-10 text-white">
              <div className="flex w-full flex-row items-center justify-between">
                {/* PREVIEW */}
                <div
                  onClick={handleClickedLess}
                  className="w-max items-center p-4 text-left text-xs hover:cursor-pointer"
                >
                  {tab.id > 1 && (
                    <ChevronLeftIcon className="h-4 w-4 stroke-2" />
                  )}
                </div>
                {/* TITLE - SERIES */}
                <div className="flex flex-col items-center">
                  <h2 className="uppercase">{tab.name}</h2>
                  <h4>
                    {tab.series.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-row items-center gap-1"
                      >
                        <span className="text-xs font-extrabold text-lighten-gray">
                          {item?.number} {item?.mesure} {item?.object}
                        </span>
                      </div>
                    ))}
                  </h4>
                </div>
                {/* NEXT */}
                <div
                  onClick={handleClickedMore}
                  className="w-max items-center p-4 text-left text-xs hover:cursor-pointer"
                >
                  {tab.id !== dataLength && (
                    <ChevronRightIcon className="h-4 w-4 stroke-2" />
                  )}
                </div>
              </div>
            </div>

            {/* GRADIENT */}
            <div className="absolute bottom-0 z-10 h-40 w-full bg-gradient-to-t from-black to-transparent" />

            {/* BG IMAGE */}
            <div
              style={{
                backgroundImage: tab?.image?.src
                  ? `url("${tab?.image?.src}")`
                  : `url("https://aandacht.be/wp-content/uploads/placeholder-2.png")`,
              }}
              className="relative z-0 h-full w-full bg-cover bg-bottom bg-no-repeat object-cover"
            />
          </div>
          {/* BOTTOM INFORMATIONS */}
          <div className="relative flex h-1/2 w-full flex-col items-center justify-between bg-black px-10 pb-10">
            <BottomStep tab={tab} />
          </div>
        </div>
      ))}
    </>
  );
};