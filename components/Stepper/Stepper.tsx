import { Tabs } from "@components/Tabs/Tabs";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
export interface StepperProps {
  data: Record<string, any>;
}

export const Stepper = ({ data }: StepperProps) => {
  return (
    <div
      className={"flex w-full justify-center items-center border h-80 flex-col"}
    >
      <Tabs tabs={data?.works} />

      {/* 
      <div className="flex flex-row flex-nowrap justify-center gap-2">
        {data?.works.map((item: { id: number | null | undefined }) => (
          <>
            <div
              key={item.id}
              className="h-1 w-10 bg-amber-400 first:opacity-100 opacity-40"
            />
            <div>{item.name}</div>
          </>
        ))}
      </div>*/}
    </div>
  );
};
