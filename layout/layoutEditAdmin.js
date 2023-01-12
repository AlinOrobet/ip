import React from "react";
import sidebarAdmin from "../data/sidebarAdmin";
import sidebarCC from "../data/sidebarCC";
import LayoutDashboard from "../layout/layoutDashboard";
function LayoutEditAdmin({title, children}) {
  let sidebarData;
  if (title === "Creator Continut") {
    sidebarData = sidebarCC;
  } else {
    sidebarData = sidebarAdmin;
  }
  return (
    <LayoutDashboard data={sidebarData} title={title}>
      <div className="lg:grid lg:grid-cols-10 grid lg:gap-0">
        <div className="col-span-3">{children}</div>
      </div>
    </LayoutDashboard>
  );
}

export default LayoutEditAdmin;
