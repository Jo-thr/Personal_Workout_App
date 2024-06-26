//@ts-nocheck
import React from "react";

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
  const r = 96;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={96}
      cy={104}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"0.7rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

export const Circles = ({ percentage, colour }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg className="relative flex h-full w-52 items-center justify-center">
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="#17171C" />
        <Circle colour={colour} pct={pct} />
      </g>
    </svg>
  );
};

const CircleMini = ({ colour, pct }) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={98}
      cy={84}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"0.7rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

export const DoubleCircles = ({ percentage, colour }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg className="relative flex h-full w-[10.5rem] items-center justify-center">
      <g transform={`rotate(-90 ${"100 100"})`}>
        <CircleMini colour="#17171C" />
        <CircleMini colour={colour} pct={pct} />
      </g>
    </svg>
  );
};
