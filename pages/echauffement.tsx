import datas from "@data/datas";
import { DefaultLayout } from "@components/Layout/DefaultLayout";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Tabs } from "@components/Tabs/Tabs";
import { Step } from "@components/Tabs/Step";

export default function WarmupPage() {
  const data = datas.warmup;

  console.log(data);

  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <Step tabs={data.works} title={data.name} />
      </div>
    </>
  );
}
