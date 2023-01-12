import {AiOutlineClose} from "react-icons/ai";
import {FiMoreVertical} from "react-icons/fi";
import {GrAdd} from "react-icons/gr";
import {useRouter} from "next/router";
import Link from "next/link";
function Content({title, iconRight, styled, link}) {
  const router = useRouter();
  return (
    <div className="border-r">
      <div className="flex justify-between items-center">
        <div className="items-center p-6">
          <h1 className={`font-semibold ${styled}`}>{title}</h1>
        </div>
        <div>
          {iconRight ? (
            <div className="flex pr-4 text-gray-600 ">
              <FiMoreVertical size={40} className="p-2 hover:bg-gray-200" />
              <AiOutlineClose
                size={40}
                className="p-2 hover:bg-gray-200"
                onClick={() => router.push(`/${link}`)}
              />
            </div>
          ) : (
            <div className="pr-4 space-x-3 text-gray-600 ">
              <Link href={`/${link}/edit`}>
                <GrAdd size={40} className="p-2 hover:bg-gray-200" />
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="border-b" />
    </div>
  );
}

export default Content;
