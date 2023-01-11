import datas from "@data/datas";
import { Card } from "@components/Card/Card";
import Link from "next/link";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center">
        {/* TOP INFORMATIONS */}
        <div className="relative flex h-1/2 w-full bg-orange-100">
          {/* INFO */}
          <div className="absolute bottom-0 z-20 flex w-full items-center text-white">
            <div className="flex w-full flex-row items-center justify-center">
              {/* TITLE - SERIES */}
              <div className="flex flex-col items-center">
                <h2 className="uppercase">{datas.home.title}</h2>
                <h4>{datas.home.subtitle}</h4>
              </div>
            </div>
          </div>

          {/* GRADIENT */}
          <div className="absolute bottom-0 z-10 h-40 w-full bg-gradient-to-t from-black to-transparent" />

          {/* BG IMAGE */}
          <div
            style={{
              backgroundImage: datas.home?.image?.src
                ? `url("${datas.home?.image?.src}")`
                : `url("https://aandacht.be/wp-content/uploads/placeholder-2.png")`,
            }}
            className="relative z-0 h-full w-full bg-cover bg-bottom bg-no-repeat object-cover"
          />
        </div>

        {/* BOTTOM INFORMATIONS */}
        <div className="relative flex h-1/2 w-full flex-row gap-10 overflow-x-scroll bg-black px-24 py-16">
          <Card data={datas.warmup} key={datas.warmup.name} />
          <Card data={datas.session} key={datas.session.name} />
          <Card data={datas.stretching} key={datas.stretching.name} />
          <Card data={datas.mobility} key={datas.mobility.name} />
        </div>
      </div>
    </>
  );
}
