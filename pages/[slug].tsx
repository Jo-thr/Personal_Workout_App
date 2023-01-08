import { DefaultLayout } from "@components/Layout/DefaultLayout";
import { useRouter } from "next/router";
import datas from "@data/datas";
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
        <div className="flex w-full flex-col items-center">
          <Link
            href="/"
            className="fixed -bottom-14 left-[5.5rem] mb-10 flex w-max items-center p-10 text-xs text-gray-400 hover:cursor-pointer md:-bottom-5 md:left-40"
          >
            <ArrowLeftCircleIcon className="mr-2 h-5 w-5" /> Retour à l'accueil
          </Link>
          <Tabs tabs={data?.works} title={data?.name} />
        </div>
      </DefaultLayout>
    </>
  );
}
