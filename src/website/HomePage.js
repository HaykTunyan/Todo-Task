import React from "react";
import TableList from "../components/TableList";
import HeaderTable from "../components/HeaderTable";
import BannerTable from "../components/BannerTable";

const HomePage = () => {
  return (
    <>
      <div className="">
        <HeaderTable />
      </div>
      <div className="container ">
        <div className="mt-4">
          <BannerTable />
          <div className="py-1" />
          <TableList />
        </div>
      </div>
    </>
  );
};

export default HomePage;
