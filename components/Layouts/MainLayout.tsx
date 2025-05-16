import React, { ReactNode } from "react";
import HeaderOne from "../Header/HeaderOne";
import AnnouncementBar from "../AnnouncementBar/AnnouncementBar";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <HeaderOne />
      <AnnouncementBar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
