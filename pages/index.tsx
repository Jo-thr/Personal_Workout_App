import datas from "@data/datas";
import { DefaultLayout } from "@components/Layout/DefaultLayout";
import { Select } from "@components/Select/Select";
import { Card } from "@components/Card/Card";

export default function Home() {
  console.log(datas);
  return (
    <>
      <DefaultLayout>
        <div className="flex flex-col gap-4 items-center w-full">
          <div className="flex flex-col items-center mb-20">
            <h1>HELLO !</h1>
            <Select />
          </div>
          <div className="flex flex-wrap w-full justify-around gap-8">
            {datas[0]?.workout?.map((item) => (
              <Card data={item} key={item.name} />
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
