import React from "react";
import LayoutPagesAdmin from "../../../layout/layoutPagesAdmin";
function Players() {
  return (
    <LayoutPagesAdmin
      data={posts}
      pageTitle="Articole"
      link="cc/posts"
      type="post"
      title="Creator Continut"
    ></LayoutPagesAdmin>
  );
}

export default Players;
const posts = [{id: 1, title: "Articol 1"}];
// export async function getServerSideProps() {
//   const response = await fetch("http://localhost:8080/api/player/players");
//   const data = await response.json();
//   return {
//     props: {
//       players: data,
//     },
//   };
// }
