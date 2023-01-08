import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export interface CardProps {
  data: Record<string, any>;
}

export const Card = ({ data }: CardProps) => {
  return (
    <Link href={data.slug}>
      <div className="group relative flex h-36 w-full flex-col justify-end overflow-hidden rounded-lg shadow-blur hover:cursor-pointer md:h-52 md:w-[500px]">
        <div className="absolute bottom-0 z-0 h-2/3 w-full bg-gradient-to-t from-gray-800 to-transparent" />

        <div className="aboslute bottom-0 w-full object-cover object-bottom transition-all duration-500 group-hover:-ml-[5%] group-hover:w-[110%]">
          <Image
            src={data?.image?.src}
            quality={100}
            alt={data?.image?.title}
          />
        </div>
        <div className="absolute z-10 flex w-full flex-row items-end justify-between p-4 text-white">
          <div>
            <div className="text-[0.6rem] text-accent">{data?.categorie}</div>
            <div className="font-bold uppercase">{data?.name}</div>
            <div className="text-xs font-light text-gray-400">
              {data.series} {data.series > 1 ? <> séries</> : <>série</>} /{" "}
              {data?.numberWork} exercices
            </div>
          </div>
          <ArrowRightCircleIcon className="h-6 w-6 transition-all duration-500 group-hover:rotate-45 group-hover:scale-125 group-hover:text-accent" />
        </div>
      </div>
    </Link>
  );
};
