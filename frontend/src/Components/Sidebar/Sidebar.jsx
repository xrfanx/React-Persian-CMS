
import { useState } from "react";
import { IoHomeOutline, IoBasketOutline, IoMenu, IoClose } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { MdOutlineLocalOffer } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* دکمه همبرگری فقط در موبایل/تبلت */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 right-4 z-50  p-2 bg-(--purpleHard) text-(--white) rounded-lg text-2xl outline-none border-0 cursor-pointer"
      >
        {isOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* لایه تیره پس‌زمینه در حالت موبایل */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}

      {/* کامپوننت اصلی Sidebar */}
      <div
        className={`fixed top-0 right-0 z-40 bg-(--purple) w-64 md:w-56 h-screen transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <h1 className="text-(--white) text-xl md:text-2xl p-4 text-center border-b border-(--white) mt-12 md:mt-0">
          به داشبورد خود خوش آمدید
        </h1>

        <ul className="list-none p-0 m-0 text-right pb-4 mb-4 flex flex-col gap-4 items-center justify-center mt-4">
          <li className="p-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-2 text-base text-(--white) no-underline w-[75%] md:w-[65%] border border-(--white) hover:bg-(--purpleHard) first:rounded-tl-[1.2rem] first:mb-2">
            <NavLink
              onClick={() => setIsOpen(false)}
              className="no-underline text-(--white) flex items-center justify-between w-full"
              to={"/"}
            >
              <IoHomeOutline />
              صفحه اصلی
            </NavLink>
          </li>
          <li className="p-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-2 text-base text-(--white) no-underline w-[75%] md:w-[65%] border border-(--white) hover:bg-(--purpleHard)">
            <NavLink
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `no-underline text-(--white) flex items-center justify-between w-full ${isActive ? "active" : ""}`}
              to={"/products"}
            >
              <SlBasket />
              محصولات
            </NavLink>
          </li>
          <li className="p-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-2 text-base text-(--white) no-underline w-[75%] md:w-[65%] border border-(--white) hover:bg-(--purpleHard)">
            <NavLink
              onClick={() => setIsOpen(false)}
              className="no-underline text-(--white) flex items-center justify-between w-full"
              to={"/comments"}
            >
              <FaRegComment />
              کامنت‌ ها
            </NavLink>
          </li>
          <li className="p-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-2 text-base text-(--white) no-underline w-[75%] md:w-[65%] border border-(--white) hover:bg-(--purpleHard)">
            <NavLink
              onClick={() => setIsOpen(false)}
              className="no-underline text-(--white) flex items-center justify-between w-full"
              to={"/users"}
            >
              <LuUsers />
              کاربران
            </NavLink>
          </li>
          <li className="p-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-2 text-base text-(--white) no-underline w-[75%] md:w-[65%] border border-(--white) hover:bg-(--purpleHard)">
            <NavLink
              onClick={() => setIsOpen(false)}
              className="no-underline text-(--white) flex items-center justify-between w-full"
              to={"/orders"}
            >
              <IoBasketOutline />
              سفارش ها
            </NavLink>
          </li>
          <li className="p-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-2 text-base text-(--white) no-underline w-[75%] md:w-[65%] border border-(--white) hover:bg-(--purpleHard)">
            <NavLink
              onClick={() => setIsOpen(false)}
              className="no-underline text-(--white) flex items-center justify-between w-full"
              to={"/offs"}
            >
              <MdOutlineLocalOffer />
              تخفیف ها
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}