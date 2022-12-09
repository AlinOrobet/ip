import React from "react";
import sidebarAdmin from "../data/sidebarAdmin";
import LayoutDashboard from "../layout/layoutDashboard";
function layoutEditAdmin({title, children}) {
  return (
    <LayoutDashboard data={sidebarAdmin}>
      <div className="lg:grid lg:grid-cols-10 grid lg:gap-0">
        <div className="md:col-span-3">{children}</div>
      </div>
    </LayoutDashboard>
  );
}

export default layoutEditAdmin;
