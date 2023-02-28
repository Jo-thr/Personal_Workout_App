//@ts-nocheck
import cn from "clsx";
import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { BottomStep } from "./BottomStep";
import Video from "@components/Video/Video";

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
            `h-screen w-full flex-col items-center justify-center overflow-hidden md:flex-row ${
              tab.id === activeTab ? "flex" : "hidden"
            }`
          )}
        >
          {/* TOP INFORMATIONS */}
          <div className="relative flex h-1/2 w-full bg-orange-100 md:h-full md:w-1/2">
            {/* BACK HOME */}
            <Link
              href="/"
              className="absolute top-0 z-20 w-max items-center p-10 text-dark-gray hover:cursor-pointer "
            >
              <ArrowLeftCircleIcon className="h-8 w-8" />
            </Link>
            {/* INFO */}
            <div className="absolute bottom-0 z-20 flex w-full items-center p-10 text-white md:hidden">
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
                <div className="flex flex-col items-center ">
                  <h2 className="text-center uppercase">{tab.name}</h2>
                  <h4 className="text-center">
                    {tab?.series?.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-row items-center justify-center gap-1"
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
            <div className="absolute bottom-0 z-10 h-40 w-full bg-gradient-to-t from-black to-transparent md:hidden" />
            <div className="right-0 z-10 hidden h-screen w-40 bg-gradient-to-l from-black to-transparent md:absolute md:flex" />

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
          <div className="relative flex h-1/2 w-full flex-col items-center justify-between bg-black px-10 pb-10 md:h-full md:w-1/2 md:py-40 md:px-28">
            {/* INFO */}
            <div className="absolute top-0 z-20 hidden w-full items-center p-10 text-white md:relative md:flex">
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
                <div className="flex flex-col items-center ">
                  <h2 className="text-center uppercase">{tab.name}</h2>
                  <h4 className="text-center">
                    {tab?.series?.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-row items-center justify-center gap-1"
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
            <BottomStep tab={tab} />
          </div>
        </div>
      ))}
      <div className="absolute right-0 z-40 flex w-full flex-row items-center justify-center gap-1 md:bottom-12 md:w-1/2 ">
        {tabs?.map((item, index) => (
          <div
            className={`flex h-2 w-2 rounded-full ${
              index === activeTab - 1 ? "h-3 w-3 bg-primary" : "bg-gray"
            }
            ${index > activeTab - 1 && "bg-lighten-gray"}`}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
