import React from "react";
import Sidebar from "../components/Commons/DashboardComponents/Sidebar";
function layoutDashboard({data, title, children}) {
  return (
    <div className="flex">
      <div className="h-screen sticky top-0">
        <Sidebar data={data} title={title} />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default layoutDashboard;
