import { ReactNode } from "react";

export interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="h-screen w-screen p-40 bg-black text-white flex items-center justify-center overflow-hidden">
      {children}
    </div>
  );
};
