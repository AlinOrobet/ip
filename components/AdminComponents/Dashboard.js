import React from "react";
import LayoutDashboard from "../../layout/layoutDashboard";
import sidebarAdmin from "../../data/sidebarAdmin";
import Link from "next/link";

import Card from "./Card";
import HistoryCC from "./HistoryCC";
import HistoryAdmin from "./HistoryAdmin";
function Dashboard() {
  return (
    <LayoutDashboard data={sidebarAdmin} title="Administrator">
      <div className="mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-5 lg:py-10">
          <Link href="/admin/jucatori">
            <Card title={"Jucatori Definiti"} nr={32} />
          </Link>
          <Card title={"Articole Publicate"} nr={153} />
          <Card title={"Meciuri Publicate"} nr={23} />
        </div>
        <div className="px-5 lg:grid lg:grid-cols-10 grid gap-7">
          <HistoryCC max={15} link={"/admin/posts"} />
          <HistoryAdmin max={15} />
        </div>
      </div>
    </LayoutDashboard>
  );
}

export default Dashboard;
