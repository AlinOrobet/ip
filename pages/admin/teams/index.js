import React from "react";
import LayoutPagesAdmin from "../../../layout/layoutPagesAdmin";
function Teams() {
  const teams = [
    {id: 1, name: "Echipa 1"},
    {id: 2, name: "Echipa 2"},
    {id: 3, name: "Echipa 3"},
  ];
  return (
    <LayoutPagesAdmin
      data={teams}
      pageTitle="Echipe"
      link="admin/teams"
      type="team"
      title="Administrator"
    ></LayoutPagesAdmin>
  );
}

export default Teams;
// export async function getServerSideProps() {
//   const response = await fetch("http://localhost:8080/api/player/players");
//   const data = await response.json();
//   return {
//     props: {
//       teams: data,
//     },
//   };
// }
