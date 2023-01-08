import Head from "next/head";
export interface MetadataProps {
  title: string;
}
export const Metadata = ({ title }: MetadataProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="apple-mobile-web-app-capable" content="yes" />
    </Head>
  );
};
