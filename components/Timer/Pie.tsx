//@ts-nocheck
import React from "react";

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"0.6rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const MobileCircle = ({ colour, pct }) => {
  const r = 50;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={60}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"0.4rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Pie = ({ percentage, colour }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={200} height={200} className="">
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="rgb(75 85 99)" />
        <Circle colour="#BBF247" pct={pct} />
      </g>
    </svg>
  );
};

export const MobilePie = ({ percentage, colour }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={120} height={155} className="">
      <g transform={`rotate(-90 ${"100 100"})`}>
        <MobileCircle colour="rgb(75 85 99)" />
        <MobileCircle colour="#BBF247" pct={pct} />
      </g>
    </svg>
  );
};

export default Pie;
