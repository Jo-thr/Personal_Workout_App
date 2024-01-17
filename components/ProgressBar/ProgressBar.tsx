import React from "react";

export type ProgressBarProps = {
  current: number;
  total: number;
  className?: string;
};

const ProgressBar = ({ current, total, className }: ProgressBarProps) => {
  const percentage = (current / total) * 100;

  return (
    <div className={`${className} pt-1`}>
      <div className="mb-2 flex items-center justify-between">
        <div className="text-right">
          <span className="inline-block text-xs font-semibold text-primary ">
            {`${Math.floor(percentage)}%`}
          </span>
        </div>
      </div>
      <div className="mb-4 flex h-2 overflow-hidden rounded-full bg-black-base text-xs">
        <div
          style={{ width: `${percentage.toFixed(2)}%` }}
          className="text-white flex flex-col justify-center whitespace-nowrap rounded-full bg-primary text-center shadow-none"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
