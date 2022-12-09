import Image from "next/image";
function Card({item}) {
  const {content, title, under_title, created_by, created_on} = item;
  return (
    <div className="rounded overflow-hidden shadow-lg button">
      <img className="w-full h-48" src="/news.jpg" alt="postImage" />
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 font-semibold">{under_title}</p>
        <div className="flex justify-between text-sm italic pt-2">
          <div>{created_by}</div>
          <div>{created_on}</div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #tag3
        </span>
      </div>
    </div>
  );
}
export default Card;
