import React from "react";
import LayoutDashboard from "./layoutDashboard";
import sidebarAdmin from "../data/sidebarAdmin";
import Content from "../components/AdminComponents/Content";
import Link from "next/link";
import DataTitles from "../components/AdminComponents/DataTitles";
function layoutPagesAdmin({ data, pageTitle, link, type }) {
  return (
    <LayoutDashboard data={sidebarAdmin}>
      <div className="lg:grid lg:grid-cols-10 grid gap-20 lg:gap-0">
        <div className="lg:col-span-5 xl:col-span-3 lg:flex lg:flex-col lg:h-screen">
          <Content title={pageTitle} iconRight={false} link={link} />
          <div className="lg:flex-1 lg:overflow-y-auto border-r">
            {data.map((item) => (
              <div key={item.id} className="">
                <Link href={`/admin/${link}/${item.id}`} passHref>
                  <DataTitles type={type} item={item} link={link} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
}

export default layoutPagesAdmin;
