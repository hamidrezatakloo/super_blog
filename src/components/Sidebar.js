import { useState } from "react";
import SideMenu from "./SideMenu";
const Sidebar = () => {
  const [showSidebar, setSidebar] = useState(false);

  const switchSidebar = () => {
    setSidebar(true);
  };

  return (
    <section>
      <div className={`${showSidebar ? "block" : "hidden"} lg:block h-full`}>
        <div className="w-[200px] bg-gray-100 h-full">
          <SideMenu showSidebar={showSidebar} setSidebar={setSidebar} />
        </div>
      </div>
      <div className={`${showSidebar ? "hidden" : "block"} lg:hidden`}>
        <button
          className="rounded bg-gray-100 p-2 m-2 text-gray-600 transition hover:text-gray-600/75"
          onClick={switchSidebar}
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
