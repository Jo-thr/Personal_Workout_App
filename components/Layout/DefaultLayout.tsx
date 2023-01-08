import { ReactNode } from "react";

export interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="h-screen w-screen p-10 md:p-40 bg-black text-white flex items-center justify-center overflow-y-scroll overflow-x-hidden md:overflow-hidden">
      {children}
    </div>
  );
};
