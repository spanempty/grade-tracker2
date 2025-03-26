"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Bot, Home } from "lucide-react";

const item = [
  {
    title: "home",
    url: "/",
    icon: <Home />,
  },
  {
    title: "   AI   ",
    url: "/",
    icon: <Bot />,
  },
];

function MenuItem({ title, icon, url }: any) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push(url)}
      className="flex flex-row justify-center items-center w-full p-4 text-sm rounded-xl bg-neutral-800 hover:bg-neutral-700 "
    >
      {icon}  {title}
    </button>
  );
}

function Sidebar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {/* ***************** the top right button************  */}
      <button
        onClick={() => {
          setIsOpened((current) => !current);
          console.log(isOpened);
        }}
        className={`
          transition-all absolute m-5 rounded-full cursor-pointer p-2 border-1 ${
            isOpened ? "left-2/12" : "lef-0"
          }`}
      >
        {isOpened ? <ArrowLeft /> : <ArrowRight />}
      </button>
      {/* ************************************************* */}
      <div
        className={`grid grid-rows-[auto_50px] absolute overflow-hidden min-h-screen rounded-r-xl bg-neutral-900 opacity-70 transition-all ${
          isOpened ? "w-2/12  " : "w-0"
        }`}
      >
        <div className="flex flex-col p-3 pt-6 gap-2">
          {item.map((item, index) => (
            <MenuItem
              title={item.title}
              icon={item.icon}
              url={item.url}
              key={index}
            />
          ))}
        </div>
        <div className="p-5 bg-orange-500">bottom</div>
      </div>
    </>
  );
}

export default Sidebar;
