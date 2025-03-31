"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Bot, Home } from "lucide-react";
import ThemeSwitch from "./ThemeSwitch";

const item = [
  {
    title: "home",
    url: "/",
    icon: <Home />,
  },
  {
    title: "   AI   ",
    url: "/ai",
    icon: <Bot />,
  },
];

function MenuItem({ title, icon, url }: any) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push(url)}
      className="flex flex-row justify-center items-center w-full p-4 text-sm rounded-xl bg-neutral-400 hover:bg-[#7a7a7a]  dark:bg-neutral-800 dark:hover:bg-neutral-700 "
    >
      {icon}  {title}
    </button>
  );
}

function Sidebar() {
  function stringToBoolean(str: any) {
    return str === "true";
  }

  function booleanToString(bool: boolean) {
    return bool.toString();
  }
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("sidebar") !== null) {
      setIsOpened(stringToBoolean(localStorage.getItem("sidebar")));
    } else {
      localStorage.setItem("sidebar", "false");
    }
  }, []);

  return (
    <>
      {/* ***************** the top right button************  */}
      <button
        onClick={() => {
          localStorage.setItem("sidebar", booleanToString(!isOpened));
          setIsOpened(() => stringToBoolean(localStorage.getItem("sidebar")));
          console.log(isOpened);
        }}
        className={`
          transition-all absolute m-5 rounded-full cursor-pointer p-2 border-1 ${
            isOpened ? "left-2/12" : "lef-0"
          }`}
      >
        {isOpened ? (
          <ArrowLeft className="dark:stroke-white stroke-neutral-800" />
        ) : (
          <ArrowRight className="dark:stroke-white stroke-neutral-800" />
        )}
      </button>
      {/* ************************************************* */}
      <div
        className={`grid grid-rows-[auto_50px] absolute overflow-hidden min-h-screen rounded-r-xl bg-neutral-200 dark:bg-neutral-900 opacity-70 transition-all ${
          isOpened ? "w-2/12" : "w-0"
        }`}
      >
        <div
          className={`flex flex-col p-3 pt-6 gap-2
        ${isOpened ? "" : "left-[-calc(2/12 * 100%)]"}`}
        >
          {item.map((item, index) => (
            <MenuItem
              title={item.title}
              icon={item.icon}
              url={item.url}
              key={index}
            />
          ))}
        </div>
        <div className="p-5">
          <button
            onClick={() => {
              document.querySelectorAll("div").forEach((element) => {
                element.classList.add("light");
              });
            }}
          >
            <ThemeSwitch />
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
