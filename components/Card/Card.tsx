import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export interface CardProps {
  data: Record<string, any>;
}

export const Card = ({ data }: CardProps) => {
  return (
    <Link href={data.slug}>
      <div className="group relative flex flex-col justify-end shadow-blur w-[500px] h-52 rounded-lg overflow-hidden hover:cursor-pointer">
        <div className="absolute w-full h-2/3 z-0 bottom-0 bg-gradient-to-t from-gray-800 to-transparent" />

        <div className="aboslute bottom-0 object-bottom object-cover w-full group-hover:w-[110%] group-hover:-ml-[5%] transition-all duration-500">
          <Image
            src={data?.image?.src}
            quality={100}
            alt={data?.image?.title}
          />
        </div>
        <div className="absolute w-full z-10 items-end flex flex-row justify-between text-white p-4">
          <div>
            <div className="text-[0.6rem] text-accent">{data?.categorie}</div>
            <div className="font-bold uppercase">{data?.name}</div>
            <div className="font-light text-xs text-gray-400">
              {data.series} {data.series > 1 ? <> séries</> : <>série</>} /{" "}
              {data?.numberWork} exercices
            </div>
          </div>
          <ArrowRightCircleIcon className="w-6 h-6 group-hover:scale-125 transition-all group-hover:text-accent group-hover:rotate-45 duration-500" />
        </div>
      </div>
    </Link>
  );
};
