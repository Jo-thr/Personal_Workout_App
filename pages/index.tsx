import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { DefaultLayout } from "@components/Layout/DefaultLayout";

export default function Home() {
  return (
    <>
      <DefaultLayout>HELLO !</DefaultLayout>
    </>
  );
}
