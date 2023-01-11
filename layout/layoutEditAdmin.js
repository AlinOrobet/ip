import React from "react";
import sidebarAdmin from "../data/sidebarAdmin";
import LayoutDashboard from "../layout/layoutDashboard";
function LayoutEditAdmin({title, children}) {
  return (
    <LayoutDashboard data={sidebarAdmin}>
      <div className="lg:grid lg:grid-cols-10 grid lg:gap-0">{children}</div>
    </LayoutDashboard>
  );
}

export default LayoutEditAdmin;
