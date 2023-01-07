//@ts-nocheck
import ctl from "@netlify/classnames-template-literals";
import cn from "clsx";
import { useState } from "react";
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

export type TabsProps = {
  tabs: Record<string, any>;
  title: string;
};

export const Tabs = ({ tabs, title }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const dataLength = tabs.length;

  console.log(dataLength);

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
            `flex-col items-center gap-6 rounded-lg h-[86vh] p-4 ${
              tab.id === activeTab ? "flex" : "hidden"
            }`
          )}
        >
          {/* PREV / PLAY / NEXT */}
          <div className="w-full flex justify-center items-center gap-12">
            <div
              onClick={handleClickedLess}
              className="hover:cursor-pointer text-right flex items-center w-20 rounded-md text-xs text-gray-500"
            >
              {tab.id > 1 && (
                <>
                  <ChevronLeftIcon className="mr-2 w-4 h-4" />
                  Preview
                </>
              )}
            </div>
            <div className="relative text-center w-64 ">
              <h1 className="mb-1">{title}</h1>
              <span className="text-accent uppercase">{tab.name}</span>
            </div>
            <div
              onClick={handleClickedMore}
              className="hover:cursor-pointer w-20 text-left flex items-center rounded-md text-xs text-gray-300"
            >
              {tab.id !== dataLength && (
                <>
                  Next <ChevronRightIcon className="ml-2 w-4 h-4" />
                </>
              )}
            </div>
          </div>

          {/* NUMBER  */}
          <div className="min-w-[60%] flex bg-gray-600 bg-opacity-10 border border-gray-700 rounded-3xl shadow-blur py-6 px-10 flex-row items-center justify-center gap-y-4 gap-x-20 mt-6 ">
            {tab.series && (
              <div className="flex flex-row items-center justify-start gap-4">
                <div className="p-3 mb-2 border border-white rounded-full">
                  <ArrowPathIcon className="w-7 h-7" />
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
                      <span className="text-accent text-lg font-bold leading-4">
                        {item?.number} {item?.mesure}
                      </span>
                      <span className="text-sm">{item?.object}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tab.repetition && (
              <div className="flex flex-row items-center justify-start gap-4">
                <div className="p-3 mb-2 border border-white rounded-full">
                  <FireIcon className="w-7 h-7" />
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
                      <span className="text-accent text-lg font-bold leading-4">
                        {item?.number} {item?.mesure}
                      </span>
                      <span className="text-sm">{item?.object}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tab.duration && (
              <div className="flex flex-row items-center justify-start gap-4">
                <div className="p-3 mb-2 border border-white rounded-full">
                  <ClockIcon className="w-7 h-7" />
                </div>
                <div className="flex flex-col">
                  <span className="text-accent text-lg font-bold leading-4">
                    {tab.duration?.time} {tab.duration?.mesure}
                  </span>
                  <span className="text-sm">{tab.duration?.object}</span>
                </div>
              </div>
            )}
            {tab.rest && (
              <div className="flex flex-row items-center justify-start gap-4">
                <div className="p-3 mb-2 border border-white rounded-full">
                  <SunIcon className="w-7 h-7" />
                </div>
                <div className="flex flex-col min-w-max">
                  <span className="text-accent text-lg font-bold leading-4">
                    {tab.rest?.time} {tab.rest?.mesure}
                  </span>
                  <span className="text-sm">{tab.rest?.object}</span>
                </div>
              </div>
            )}
          </div>

          {/* DESCRIPTION */}
          {tab.description && (
            <Collapse title={"Description"} content={tab.description} />
          )}
          {tab.duration?.time && (
            <Timer time={tab.duration?.time} title={tab.duration?.object} />
          )}
          {tab.rest && <Timer time={tab.rest?.time} title={tab.rest?.object} />}
        </div>
      ))}

      {/* TAB NAV */}
      <div className="relative">
        <div className="flex justify-center gap-2 items-center">
          {tabs.map((tab) => (
            <div key={tab.name}>
              <div
                href={tab.href}
                onClick={() => setActiveTab(tab.id)}
                className={ctl(`w-12 h-1 items-center
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
