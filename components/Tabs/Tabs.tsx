//@ts-nocheck
import ctl from "@netlify/classnames-template-literals";
import cn from "clsx";
import { Key, useState } from "react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ClockIcon,
  SunIcon,
  ArrowPathIcon,
  FireIcon,
} from "@heroicons/react/24/outline";
import { Collapse } from "@components/Collapse/Collapse";
import Timer from "@components/Timer/Timer";
import Image from "next/image";

export type TabsProps = {
  tabs: Record<string, any>[];
  title: string;
};

export const Tabs = ({ tabs, title }: TabsProps) => {
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
    <div className="w-full">
      {/* TAB CONTENT */}
      {tabs?.map((tab) => (
        <div
          key={tab.name}
          className={cn(
            `h-[86vh] flex-col items-center gap-4 rounded-lg md:gap-6 md:p-4 ${
              tab.id === activeTab ? "flex" : "hidden"
            }`
          )}
        >
          {/* PREV / TITLE / NEXT */}
          <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row md:gap-12">
            <div
              onClick={handleClickedLess}
              className="hidden w-max items-center rounded-md p-4 text-right text-xs text-gray-500 hover:cursor-pointer md:flex"
            >
              {tab.id > 1 && (
                <>
                  <ChevronLeftIcon className="mr-2 h-4 w-4" />
                  Preview
                </>
              )}
            </div>

            <div className="relative w-full text-center md:w-80">
              <h1 className="mb-1">{title}</h1>
              <h2 className="uppercase text-accent">{tab.name}</h2>
            </div>

            <div
              onClick={handleClickedMore}
              className="hidden w-max items-center rounded-md p-4 text-left text-xs text-gray-300 hover:cursor-pointer md:flex"
            >
              {tab.id !== dataLength && (
                <>
                  Next <ChevronRightIcon className="ml-2 h-4 w-4" />
                </>
              )}
            </div>

            <div className="flex flex-row items-center justify-around md:hidden">
              <div
                onClick={handleClickedLess}
                className="flex w-max items-center rounded-md p-4 text-right text-xs text-gray-500 hover:cursor-pointer"
              >
                {tab.id > 1 && (
                  <>
                    <ChevronLeftIcon className="mr-2 h-4 w-4" />
                    Preview
                  </>
                )}
              </div>
              <div
                onClick={handleClickedMore}
                className="flex w-max items-center rounded-md p-4 text-left text-xs text-gray-300 hover:cursor-pointer"
              >
                {tab.id !== dataLength && (
                  <>
                    Next <ChevronRightIcon className="ml-2 h-4 w-4" />
                  </>
                )}
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="flex w-full flex-wrap items-center justify-start gap-y-4 gap-x-5 rounded-3xl border border-gray-700 bg-gray-600 bg-opacity-10 py-3 px-5 shadow-blur md:mt-6 md:min-w-[60%] md:flex-row md:justify-center md:gap-x-20 md:py-6 md:px-10">
            {tab.series && (
              <div className="flex flex-row items-center justify-start gap-2 md:gap-4">
                <div className="mb-2 rounded-full border border-white p-3">
                  <ArrowPathIcon className="h-4 w-4 md:h-7 md:w-7" />
                </div>
                <div className="flex flex-col gap-1">
                  {tab.series.map((item, index) => (
                    <div
                      key={index}
                      className={ctl(
                        `flex gap-1 ${
                          tab.series.length > 1 ? "flex-row" : "flex-col"
                        } `
                      )}
                    >
                      <span className="text-sm font-bold leading-4 text-accent md:text-lg">
                        {item?.number} {item?.mesure}
                      </span>
                      <span className="text-xs md:text-sm">{item?.object}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tab.repetition && (
              <div className="hidden flex-row items-center justify-start gap-2 md:flex md:gap-4">
                <div className="mb-2 rounded-full border border-white p-3">
                  <FireIcon className="h-4 w-4 md:h-7 md:w-7" />
                </div>
                <div className="flex flex-col gap-1">
                  {tab.repetition.map((item, index) => (
                    <div
                      key={index}
                      className={ctl(
                        `flex max-w-[14rem] gap-1 ${
                          tab.repetition.length > 1 ? "flex-row" : "flex-col"
                        } `
                      )}
                    >
                      <span className="text-sm font-bold leading-4 text-accent md:text-lg">
                        {item?.number} {item?.mesure}
                      </span>
                      <span className="text-xs md:text-sm">{item?.object}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tab.duration && (
              <div className="flex flex-row items-center justify-start gap-2 md:gap-4">
                <div className="mb-2 rounded-full border border-white p-3">
                  <ClockIcon className="h-4 w-4 md:h-7 md:w-7" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold leading-4 text-accent md:text-lg">
                    {tab.duration?.time} {tab.duration?.mesure}
                  </span>
                  <span className="text-xs md:text-sm">
                    {tab.duration?.object}
                  </span>
                </div>
              </div>
            )}
            {tab.rest && (
              <div className="flex flex-row items-center justify-start gap-2 md:gap-4">
                <div className="mb-2 rounded-full border border-white p-3">
                  <SunIcon className="h-4 w-4 md:h-7 md:w-7" />
                </div>
                <div className="flex min-w-max flex-col">
                  <span className="text-sm font-bold leading-4 text-accent md:text-lg">
                    {tab.rest?.time} {tab.rest?.mesure}
                  </span>
                  <span className="text-xs md:text-sm">{tab.rest?.object}</span>
                </div>
              </div>
            )}
            {tab.repetition && (
              <div className="flex flex-row items-center justify-start gap-2 md:hidden md:gap-4">
                <div className="mb-2 rounded-full border border-white p-3">
                  <FireIcon className="h-4 w-4 md:h-7 md:w-7" />
                </div>
                <div className="flex flex-col gap-1">
                  {tab.repetition.map((item, index) => (
                    <div
                      key={index}
                      className={ctl(
                        `flex max-w-[14rem] gap-1 ${
                          tab.repetition.length > 1 ? "flex-row" : "flex-col"
                        } `
                      )}
                    >
                      <span className="text-sm font-bold leading-4 text-accent md:text-lg">
                        {item?.number} {item?.mesure}
                      </span>
                      <span className="text-xs md:text-sm">{item?.object}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* DESCRIPTION */}
          {tab.description && (
            <Collapse title={"Description"} content={tab.description} />
          )}

          {/* IMAGE & TIMER */}
          <div className="flex w-full flex-col items-center md:w-3/5 md:min-w-[60%] md:flex-row md:items-start md:justify-around">
            <div className="relative mt-6 hidden h-52 w-96 overflow-hidden md:flex">
              <div
                style={{
                  backgroundImage: tab?.image?.src
                    ? `url("${tab?.image?.src}")`
                    : `url("https://aandacht.be/wp-content/uploads/placeholder-2.png")`,
                }}
                className="h-full w-full bg-cover bg-bottom bg-no-repeat object-cover"
              />
            </div>

            {(tab.duration?.time || tab.rest) && (
              <>
                <div className="-mt-6 flex w-full flex-row justify-center md:mt-0 md:w-auto">
                  {tab.duration?.time && (
                    <Timer
                      time={tab.duration?.time}
                      title={tab.duration?.object}
                    />
                  )}
                  {tab.rest && (
                    <Timer time={tab.rest?.time} title={tab.rest?.object} />
                  )}
                </div>
              </>
            )}

            <div
              className={ctl(
                `relative h-48 min-h-[10rem] w-full overflow-hidden rounded-3xl md:hidden ${
                  tab.duration?.time || tab.rest ? "mt-36" : "mt-6"
                }`
              )}
            >
              <div
                style={{
                  backgroundImage: tab?.image?.src
                    ? `url("${tab?.image?.src}")`
                    : `url("https://aandacht.be/wp-content/uploads/placeholder-2.png")`,
                }}
                className="h-full w-full bg-cover bg-center bg-no-repeat object-cover"
              />
            </div>
          </div>
        </div>
      ))}

      {/* TAB NAV */}
      <div className="relative">
        <div className="mb-4 flex items-center justify-center gap-1 md:mb-0 md:gap-2">
          {tabs?.map((tab, index) => (
            <div
              key={tab.name}
              ref={tab.href}
              onClick={() => setActiveTab(tab.id)}
              className="hover:cursor-pointer"
            >
              <div
                className={ctl(
                  `mb-1 hidden w-12 justify-center text-[0.6rem] md:flex ${
                    tab.id === activeTab ? "text-accent" : "text-black"
                  } `
                )}
              >
                {index + 1} / {tabs.length}
              </div>
              <div
                className={ctl(`h-1 w-3 items-center rounded-full md:w-12 md:rounded-none
                    ${
                      tab.id === activeTab
                        ? "bg-accent "
                        : "bg-accent opacity-30 "
                    }
                    ${tab.id < activeTab && "bg-gray-600"}
                    `)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
