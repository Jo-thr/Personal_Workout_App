import { DefaultLayout } from "@components/Layout/DefaultLayout";
import { useRouter } from "next/router";
import datas from "@data/datas";
import { Stepper } from "@components/Stepper/Stepper";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Tabs } from "@components/Tabs/Tabs";

export default function TrainingPage() {
  const router = useRouter();
  const slug = router.query.slug;

  const dataSelected = datas.workout?.filter((item) =>
    //@ts-ignore
    item.slug.includes(slug)
  );

  //@ts-ignore
  const data = dataSelected[0];

  return (
    <>
      <DefaultLayout>
        <div className="flex flex-col items-center w-full">
          <Link
            href="/"
            className="fixed -bottom-14 md:-bottom-5 left-[5.5rem] md:left-40 p-10 w-max flex items-center text-xs mb-10 text-gray-400 hover:cursor-pointer"
          >
            <ArrowLeftCircleIcon className="w-5 h-5 mr-2" /> Retour à l'accueil
          </Link>
          <Tabs tabs={data?.works} title={data?.name} />
        </div>
      </DefaultLayout>
    </>
  );
}
