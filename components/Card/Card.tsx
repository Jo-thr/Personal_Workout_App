import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

export interface CardProps {
  data: Record<string, any>;
}

export const Card = ({ data }: CardProps) => {
  return (
    <Link href={data.slug} className="h-full w-full min-w-[14rem]">
      <div className="group relative flex h-full w-full flex-col justify-end overflow-hidden rounded-lg border border-primary shadow-blur hover:cursor-pointer md:h-52 md:w-[500px]">
        <div className="absolute top-0 z-10 h-2/3 w-full bg-gradient-to-b from-black to-transparent mix-blend-multiply" />

        <div className="relative h-full w-full transition-all duration-500 group-hover:-ml-[5%] group-hover:w-[110%]">
          <div
            style={{
              backgroundImage: data?.image?.src
                ? `url("${data?.image?.src}")`
                : `url("https://aandacht.be/wp-content/uploads/placeholder-2.png")`,
            }}
            className="h-full w-full bg-cover bg-center bg-no-repeat object-cover"
          />
        </div>

        <div className="absolute top-0 z-10 flex w-full flex-col items-center justify-between p-4 pt-6 text-white">
          <div className="text-xs text-primary">{data?.categorie}</div>
          <div className="font-bold uppercase">{data?.name}</div>
          <div className="text-gray-400 text-[0.65rem] font-light  text-lighten-gray">
            {data.series} {data.series > 1 ? <> séries</> : <>série</>} /{" "}
            {data?.numberWork} exercices
          </div>{" "}
        </div>
      </div>
      <div className="relative -top-4 z-20 mx-auto flex w-4/5 flex-row items-center justify-center gap-2 rounded-lg bg-primary py-1 text-xs font-extrabold uppercase text-white shadow-blur">
        Start <PlayCircleIcon className="h-5 w-5" />
      </div>
    </Link>
  );
};
