import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { SetStateAction, useState } from "react";
import cn from "clsx";

export interface CollapseProps {
  iconPosition?: "left" | "right";
  title?: string;
  content?: string;
}

export const Collapse = ({
  iconPosition = "right",
  title,
  content,
}: CollapseProps) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="relative hidden h-auto w-full origin-center gap-3 rounded-xl border border-gray-700 md:grid md:w-3/5">
      <div>
        <div
          className={cn(
            `relative inset-x-0 top-0 flex flex-row items-center bg-gray-600 bg-opacity-10 px-4 py-2 text-xs md:py-3 md:text-base
            ${clicked === true ? "rounded-t-lg" : "rounded-lg"}
            ${iconPosition === "left" ? "justify-start" : "justify-between"}`
          )}
          onClick={() => setClicked(!clicked)}
        >
          {title}
          {clicked === true ? (
            <MinusIcon className="ml-2 h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
          ) : (
            <PlusIcon className="ml-2 h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
          )}
        </div>
        {clicked === true && (
          <div className="relative rounded-b-lg border-t border-t-gray-600 bg-gray-600 bg-opacity-10 p-4 text-sm text-gray-400">
            {content}
          </div>
        )}
      </div>
    </div>
  );
};
