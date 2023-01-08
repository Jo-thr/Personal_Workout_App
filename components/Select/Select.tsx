//@ts-nocheck
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import cn from "clsx";
import { useState } from "react";
import Image from "next/image";
export interface SelectProps {
  status?: boolean;
  check?: boolean;
}

const week = [
  { name: "Semaine 01 à Semaine 08" },
  { name: "Semaine 09 à Semaine 12" },
];

export const Select = ({ status, check }: SelectProps) => {
  const [active, setActive] = useState(week[0].name);
  const [show, setShow] = useState(false);

  console.log(active);

  const contactSelected = week.find((person) => person.name === active);

  return (
    <div className={"flex w-64  flex-col"}>
      <label htmlFor="contact" className="hidden ml-2 text-xs text-gray-700">
        Contact
      </label>
      <div
        onClick={() => setShow(!show)}
        className="mt-1 flex w-full items-center justify-between gap-6 rounded-md border border-gray-300 py-2 px-4 text-base sm:text-sm"
      >
        <div className="flex items-center gap-2">
          {status === true && (
            <div
              className={cn(
                `h-2 w-2 rounded-full ${
                  contactSelected?.status === true
                    ? "bg-emerald-400"
                    : "bg-gray-200"
                }`
              )}
            />
          )}
          {active}
        </div>
        {show === true ? (
          <ChevronDownIcon className="h-4 w-4 rotate-180 stroke-2 transition duration-200 ease-in-out" />
        ) : (
          <ChevronDownIcon className="h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
        )}
      </div>

      {show === true && (
        <div className="absolute z-10 mt-10 flex w-64 flex-col rounded-md border border-gray-300 bg-white text-sm">
          {week.map((person) => (
            <div
              className={cn(
                `flex cursor-pointer items-center text-gray-900 justify-between py-2 px-4 hover:bg-gray-100 ${
                  active === person.name &&
                  "cursor-default bg-emerald-100 !text-emerald-600 hover:bg-emerald-100"
                }`
              )}
              key={person.id}
              onClick={() => {
                setShow(!show);
                setActive(person.name);
              }}
            >
              <div className="flex items-center gap-2">
                {status === true && (
                  <div
                    className={cn(
                      `h-2 w-2 rounded-full  ${
                        person.status === true
                          ? "bg-emerald-400"
                          : "bg-gray-200"
                      }`
                    )}
                  />
                )}
                {person.name}
              </div>
              {person.name === active && check === true && (
                <CheckIcon className="h-4 w-4 stroke-2 text-emerald-600" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
