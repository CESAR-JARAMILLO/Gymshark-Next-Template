import React, { ReactNode } from "react";
import HeaderOne from "../Header/HeaderOne";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <HeaderOne />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
