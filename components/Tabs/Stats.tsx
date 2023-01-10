import { ClockIcon, FireIcon, MoonIcon } from "@heroicons/react/24/solid";

export type StatsProps = {
  object: string;
  icon: "fire" | "time" | "rest";
  mesure: string;
  number: number;
};

export const Stats = ({ object, number, mesure, icon }: StatsProps) => {
  return (
    <>
      <div className="flex w-max flex-row flex-nowrap items-center gap-1 rounded-lg bg-dark-gray py-2 px-3 text-xs font-bold text-primary">
        {icon === "fire" && <FireIcon className="h-5 w-5" />}
        {icon === "time" && <ClockIcon className="h-5 w-5" />}
        {icon === "rest" && <MoonIcon className="h-5 w-5" />}
        <div>
          {number} {mesure}
        </div>
        <span className="text-white">{object}</span>
      </div>
    </>
  );
};
