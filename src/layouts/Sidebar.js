import { useState } from "react";
import { NavLink } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Icon from "@material-tailwind/react/Icon";
import H6 from "@material-tailwind/react/Heading6";

import {CgFileAdd} from "react-icons/cg";
import { AiOutlineFolderOpen, AiOutlineIdcard, AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { GiStabbedNote } from "react-icons/gi";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-center w-full inline-block"
          >
            <H6 color="gray">Marine insurance</H6>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/"
                  exact
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <Icon name="dashboard" size="xl" />
                  Dashboard
                </NavLink>
              </li>
            </ul>

            <div>
              <p className="text-left uppercase text-gray-600 mt-2 text-sm">
                offers
              </p>
              <ul className="flex-col min-w-full flex list-none">
                <li className="rounded-lg ">
                  <a
                  href=""
                    
                    className="flex capitalize items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                  >
                    <CgFileAdd size={20} />
                    create slip
                  </a>
                </li>
                <li className="rounded-lg ">
                  <a
                  href=""
                    
                    className="flex capitalize items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                  >
                    <AiOutlineLock size={20}  />
                    create Closing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-left uppercase text-gray-600 mt-2 text-sm">
                clients
              </p>
              <ul className="flex-col min-w-full flex list-none">
                <li className="rounded-lg ">
                  <a
                  href=""
                    
                    className="flex capitalize items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                  >
                    <AiOutlineUser size={20} />
                    insures
                  </a>
                </li>
                <li className="rounded-lg ">
                  <a
                  href=""
                    
                    className="flex capitalize items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                  >
                    <AiOutlineUser size={20} />
                    re-insures
                  </a>
                </li>
                <li className="rounded-lg ">
                  <a
                  href=""
                    
                    className="flex capitalize items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                  >
                    <AiOutlineUser  size={20}/>
                    reinsurance brokers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-left uppercase text-gray-600 mt-2 text-sm">
                others
              </p>
              <ul className="flex-col min-w-full flex list-none">
                <li className="rounded-lg ">
                  <a
                  href=""
                    
                    className="flex capitalize items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                  >
                    <AiOutlineUser  size={20}/>
                    setup business
                  </a>
                </li>
                <li className="rounded-lg ">
                  <a
                  href=""
                    
                    className="flex capitalize items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                  >
                    <GiStabbedNote size={20} />
                    claims
                  </a>
                </li>
                <li className="rounded-lg ">
                  <a
                  href=""
                    
                    className="flex capitalize items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                  >
                    <AiOutlineIdcard size={20} />
                    employees
                  </a>
                </li>
                <li className="rounded-lg ">
                  <a
                  href=""
                    
                    className="flex capitalize items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                  >
                    <AiOutlineFolderOpen size={20} />
                    employees
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-left uppercase text-gray-600 mt-2 text-sm">
                treaty
              </p>
              <ul className="flex-col min-w-full flex list-none">
                <li className="rounded-lg ">
                  <a
                  href=""
                    
                    className="flex capitalize items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                  >
                    <Icon name="person" size="xl" />
                    treaty programs
                  </a>
                </li>
                <li className="rounded-lg ">
                  <a
                  href=""
                    
                    className="flex capitalize items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                  >
                    <GiStabbedNote size={20} />
                    treaty claims
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
