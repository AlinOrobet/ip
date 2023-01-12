import React from "react";
import LayoutPagesAdmin from "../../../layout/layoutPagesAdmin";
function Staff({coaches}) {
  return (
    <LayoutPagesAdmin
      data={coaches}
      pageTitle="Staff"
      link="admin/staff"
      type="player"
      title="Administrator"
    ></LayoutPagesAdmin>
  );
}

export default Staff;
export async function getServerSideProps() {
  const response = await fetch("http://localhost:8080/api/coach/coaches");
  const data = await response.json();
  return {
    props: {
      coaches: data,
    },
  };
}
