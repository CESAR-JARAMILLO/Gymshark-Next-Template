import React from "react";

const MainLayout = (props: any) => {
  return (
    <>
      <main>{props.children}</main>
    </>
  );
};

export default MainLayout;
