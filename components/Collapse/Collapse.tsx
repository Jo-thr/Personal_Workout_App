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
    <div className="relative grid h-auto w-3/5 border border-gray-700 rounded-xl  origin-center gap-3">
      <div>
        <div
          className={cn(
            `relative inset-x-0 top-0 flex flex-row items-center px-4 py-3 bg-gray-600 bg-opacity-10
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
          <div className="relative text-sm text-gray-400 rounded-b-lg border-t border-t-gray-600 bg-gray-600 bg-opacity-10 p-4">
            {content}
          </div>
        )}
      </div>
    </div>
  );
};
