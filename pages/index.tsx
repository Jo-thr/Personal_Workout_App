import datas from "@data/datas";
import { DefaultLayout } from "@components/Layout/DefaultLayout";
import { Select } from "@components/Select/Select";
import { Card } from "@components/Card/Card";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <div className="flex flex-col gap-4 items-center w-full">
          <div className="flex flex-col items-center border-b border-accent mb-2 md:mb-20 w-full">
            <h1 className="whitespace-nowrap mb-4 text-center ">HELLO !</h1>
            {/* <Select /> */} 
          </div>
          <div className="flex flex-wrap w-full justify-around gap-8">
            {datas.workout?.map((item) => (
              <Card data={item} key={item.name} />
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
