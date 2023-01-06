//@ts-nocheck
import ctl from "@netlify/classnames-template-literals";
import cn from "clsx";
import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

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
      {/* TAB NAV */}
      <div className="absolute top-[26vh] left-[50%] -translate-x-[50%]">
        <div className="flex justify-center gap-2 items-center">
          {tabs.map((tab) => (
            <div key={tab.name}>
              <div
                href={tab.href}
                onClick={() => setActiveTab(tab.id)}
                className={ctl(`w-12 h-1 items-center
                    ${
                      tab.id === activeTab
                        ? "bg-amber-400 "
                        : "bg-amber-400 opacity-30 "
                    }
                    ${tab.id < activeTab && "bg-gray-600"}
                    `)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* TAB CONTENT */}
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={cn(
            `mt-40 flex-col items-center gap-6 rounded-lg h-[50vh] p-4 ${
              tab.id === activeTab ? "flex" : "hidden"
            }`
          )}
        >
          <div className="absolute top-[16vh] left-[50%] -translate-x-[50%] text-center ">
            <h1 className="mb-1">{title}</h1>
            <span className="text-amber-400">{tab.name}</span>
          </div>
          <p className="text-xs w-4/5">{tab.description}</p>
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
            <div className="rounded-full hover:cursor-pointer font-bold w-20 h-20 bg-amber-400 flex items-center justify-center">
              Play
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
        </div>
      ))}
    </div>
  );
};
