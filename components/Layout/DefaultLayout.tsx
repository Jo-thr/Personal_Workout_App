import { Metadata } from "helpers/metadata";
import { ReactNode, useEffect, useRef } from "react";

export interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Metadata title="Workout App" />
      <div className="flex h-screen w-screen items-center justify-center overflow-x-hidden overflow-y-scroll bg-black p-10 text-white md:overflow-hidden md:p-40">
        {children}
      </div>
    </>
  );
};
