import ctl from "@netlify/classnames-template-literals";
import cn from "clsx";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useState } from "react";
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
  tabs: Array<Record<string, any>>;
  title: string;
};

export const Tabs = ({ tabs, title }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const dataLength = tabs.length;

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
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={cn(
            `flex-col items-center gap-4 md:gap-6 rounded-lg h-[86vh] md:p-4 ${
              tab.id === activeTab ? "flex" : "hidden"
            }`
          )}
        >
          {/* PREV / TITLE / NEXT */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2 md:gap-12">

            <div
              onClick={handleClickedLess}
              className="hover:cursor-pointer p-4 text-right hidden md:flex items-center w-max rounded-md text-xs text-gray-500"
            >
              {tab.id > 1 && (
                <>
                  <ChevronLeftIcon className="mr-2 w-4 h-4" />
                  Preview
                </>
              )}
            </div>

            <div className="relative text-center w-full md:w-80">
              <h1 className="mb-1">{title}</h1>
              <h2 className="text-accent uppercase">{tab.name}</h2>
            </div>

            <div
              onClick={handleClickedMore}
              className="hover:cursor-pointer p-4 w-max text-left hidden md:flex items-center rounded-md text-xs text-gray-300"
            >
              {tab.id !== dataLength && (
                <>
                  Next <ChevronRightIcon className="ml-2 w-4 h-4" />
                </>
              )}
            </div>

            <div className="flex flex-row items-center justify-around md:hidden"><div
              onClick={handleClickedLess}
              className="hover:cursor-pointer p-4 text-right flex items-center w-max rounded-md text-xs text-gray-500"
            >
              {tab.id > 1 && (
                <>
                  <ChevronLeftIcon className="mr-2 w-4 h-4" />
                  Preview
                </>
              )}
            </div><div
              onClick={handleClickedMore}
              className="hover:cursor-pointer p-4 w-max text-left flex items-center rounded-md text-xs text-gray-300"
            >
              {tab.id !== dataLength && (
                <>
                  Next <ChevronRightIcon className="ml-2 w-4 h-4" />
                </>
              )}
            </div></div>
          </div>

          {/* STATS */}
          <div className="w-full md:min-w-[60%] flex bg-gray-600 bg-opacity-10 border border-gray-700 rounded-3xl shadow-blur py-3 md:py-6 px-5 md:px-10 flex-wrap md:flex-row items-center justify-start md:justify-center gap-y-4 gap-x-5 md:gap-x-20 md:mt-6">
            {tab.series && (
              <div className="flex flex-row items-center justify-start gap-2 md:gap-4">
                <div className="p-3 mb-2 border border-white rounded-full">
                  <ArrowPathIcon className="w-4 md:w-7 h-4 md:h-7" />
                </div>
                <div className="flex flex-col gap-1">
                  {tab.series.map((item: { number: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; mesure: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; object: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
                    <div
                      key={index}
                      className={ctl(
                        `flex gap-1 ${
                          tab.series.length > 1 ? "flex-row" : "flex-col"
                        } `
                      )}
                    >
                      <span className="text-accent text-sm md:text-lg font-bold leading-4">
                        {item?.number} {item?.mesure}
                      </span>
                      <span className="text-xs md:text-sm">{item?.object}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tab.repetition && (
              <div className="hidden md:flex flex-row items-center justify-start gap-2 md:gap-4">
                <div className="p-3 mb-2 border border-white rounded-full">
                  <FireIcon className="w-4 md:w-7 h-4 md:h-7" />
                </div>
                <div className="flex flex-col gap-1">
                  {tab.repetition.map((item: { number: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; mesure: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; object: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
                    <div
                      key={index}
                      className={ctl(
                        `flex max-w-[14rem] gap-1 ${
                          tab.repetition.length > 1 ? "flex-row" : "flex-col"
                        } `
                      )}
                    >
                      <span className="text-accent text-sm md:text-lg font-bold leading-4">
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
                <div className="p-3 mb-2 border border-white rounded-full">
                  <ClockIcon className="w-4 md:w-7 h-4 md:h-7" />
                </div>
                <div className="flex flex-col">
                  <span className="text-accent text-sm md:text-lg font-bold leading-4">
                    {tab.duration?.time} {tab.duration?.mesure}
                  </span>
                  <span className="text-xs md:text-sm">{tab.duration?.object}</span>
                </div>
              </div>
            )}
            {tab.rest && (
              <div className="flex flex-row items-center justify-start gap-2 md:gap-4">
                <div className="p-3 mb-2 border border-white rounded-full">
                  <SunIcon className="w-4 md:w-7 h-4 md:h-7" />
                </div>
                <div className="flex flex-col min-w-max">
                  <span className="text-accent text-sm md:text-lg font-bold leading-4">
                    {tab.rest?.time} {tab.rest?.mesure}
                  </span>
                  <span className="text-xs md:text-sm">{tab.rest?.object}</span>
                </div>
              </div>
            )}
            {tab.repetition && (
              <div className="flex md:hidden flex-row items-center justify-start gap-2 md:gap-4">
                <div className="p-3 mb-2 border border-white rounded-full">
                  <FireIcon className="w-4 md:w-7 h-4 md:h-7" />
                </div>
                <div className="flex flex-col gap-1">
                  {tab.repetition.map((item: { number: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; mesure: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; object: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
                    <div
                      key={index}
                      className={ctl(
                        `flex max-w-[14rem] gap-1 ${
                          tab.repetition.length > 1 ? "flex-row" : "flex-col"
                        } `
                      )}
                    >
                      <span className="text-accent text-sm md:text-lg font-bold leading-4">
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
          <div className="w-full md:w-3/5 md:min-w-[60%] flex flex-col md:flex-row md:justify-around items-center md:items-start">
          <div className="hidden md:flex relative w-full md:w-96 h-36 md:h-52 bg-amber-100 object-center mt-6 object-cover overflow-hidden">
              <Image
                src={tab?.image?.src}
                quality={100}
                alt={tab?.image?.title}
              />
            </div>

            {(tab.duration?.time || tab.rest) && (
              <>
                <div className="flex flex-row w-full justify-center md:w-auto -mt-6 md:mt-0">
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

<div className="flex md:hidden relative w-full md:w-96 h-36 md:h-52 bg-amber-100 object-center mt-36 object-cover overflow-hidden">
              <Image
                src={tab?.image?.src}
                quality={100}
                alt={tab?.image?.title}
              />
            </div>
          </div>
        </div>
      ))}

      {/* TAB NAV */}
      <div className="relative">
        <div className="flex justify-center gap-1 md:gap-2 items-center mb-4 md:mb-0">
          {tabs.map((tab, index) => (
            <div
              key={tab.name}
              ref={tab.href}
              onClick={() => setActiveTab(tab.id)}
              className="hover:cursor-pointer"
            >
              <div
                className={ctl(
                  `text-[0.6rem] w-12 hidden md:flex justify-center mb-1 ${
                    tab.id === activeTab ? "text-accent" : "text-black"
                  } `
                )}
              >
                {index + 1} / {tabs.length}
              </div>
              <div
                className={ctl(`w-3 md:w-12 md:rounded-none rounded-full h-1 items-center
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
