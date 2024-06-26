import datas from "@data/datas";
import { ChevronsRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isSelected, setIsSelected] = useState("");
  return (
    <div className="mx-auto flex h-screen w-full max-w-3xl flex-col items-start p-6">
      <div className="w-full border-b border-white-light py-2">
        {datas.home.programTitle}
      </div>
      <div className="lfex-row mt-4 flex gap-2">
        {datas.home.categories.map((item) => (
          <button
            onClick={() =>
              setIsSelected((prevState) =>
                prevState === item.name ? "" : item.name
              )
            }
            className={`${
              isSelected === item.name
                ? "border-primary bg-primary/80 !font-semibold"
                : "border-primary/25 bg-transparent"
            } flex flex-row items-center gap-2 rounded-full border px-3 py-2 text-xs font-light uppercase`}
          >
            {item.name}
            {isSelected === item.name && <X className="h-4 w-4" />}
          </button>
        ))}
      </div>
      <div className="flex w-full flex-col gap-4 py-8">
        {datas.home.works
          .filter((work) => isSelected === "" || work.categorie === isSelected)
          .map((work) => (
            <Link
              href={work.slug}
              className="flex w-full flex-row items-center justify-between gap-4 rounded-lg bg-black-darken p-6"
            >
              <div className="flex flex-row items-center gap-4">
                <div className="relative h-16 w-16 rounded-full bg-black-base p-4">
                  <Image src={work.picto} alt={work.title} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-krona text-xs text-primary ">
                    {work.categorie}
                  </span>
                  <h4 className="font-krona text-lg">{work.title}</h4>
                </div>
              </div>
              <button className="flex h-12 w-12 items-center justify-center rounded-md bg-primary p-2 text-black-base">
                <ChevronsRight />
              </button>
            </Link>
          ))}
      </div>
    </div>
  );
}
