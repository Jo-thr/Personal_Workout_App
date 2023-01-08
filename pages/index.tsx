import datas from "@data/datas";
import { DefaultLayout } from "@components/Layout/DefaultLayout";
import { Card } from "@components/Card/Card";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <div className="flex w-full flex-col items-center gap-4">
          <div className="mb-2 flex w-full flex-col items-center border-b border-accent md:mb-20">
            <h1 className="mb-4 whitespace-nowrap text-center ">HELLO !</h1>
            {/* <Select /> */}
          </div>
          <div className="flex w-full flex-wrap justify-around gap-4 md:gap-8">
            <Card data={datas.warmup} key={datas.warmup.name} />
            <Card data={datas.session} key={datas.session.name} />
            <Card data={datas.stretching} key={datas.stretching.name} />
            <Card data={datas.mobility} key={datas.mobility.name} />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
