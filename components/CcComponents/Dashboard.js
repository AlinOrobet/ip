import React from "react";
import LayoutDashboard from "../../layout/layoutDashboard";
import sidebarCc from "../../data/sidebarCc";
import Link from "next/link";
import Card from "./Card";
import HistoryCC from "../AdminComponents/HistoryCC";
function Dashboard() {
  const news = [{}, {}, {}];
  return (
    <LayoutDashboard data={sidebarCc} title="Creator Continut">
      <div className="mt-20">
        <div className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {news.reverse().map((item) => (
            <Link key={item.id} href={`/cc/posts/${item.id}`}>
              <Card item={item} />
            </Link>
          ))}
        </div>
        <div className="px-5">
          <HistoryCC max={10} link={"/cc/posts"} />
        </div>
      </div>
    </LayoutDashboard>
  );
}

export default Dashboard;
// export async function getServerSideProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   return {
//     props: {
//       news: data.slice(data.length - 3, data.length),
//     },
//   };
// }
